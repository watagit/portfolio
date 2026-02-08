# Research & Design Decisions Template

---
**Purpose**: Biomeへの移行における技術調査結果とアーキテクチャ判断の記録

**Usage**:
- ESLint/PrettierからBiomeへの移行に関する調査活動と結果を記録
- 設計判断のトレードオフを文書化
- 将来の監査や再利用のための参照と証拠を提供
---

## Summary
- **Feature**: `migrate-to-biome`
- **Discovery Scope**: Extension (既存ツールチェーンの置き換え)
- **Key Findings**:
  - Biome v2.3.14が最新版（2026年2月時点）、Astro/TypeScriptサポートが安定
  - Import順序整理は`organizeImports`機能で実現可能
  - 既存の`.prettierignore`設定をBiome設定に移行する必要あり

## Research Log

### Biome最新バージョンとAstro対応状況
- **Context**: BiomeがAstroファイルとTypeScript strictモードをサポートしているか確認
- **Sources Consulted**:
  - [Biome公式サイト](https://biomejs.dev/)
  - [Biome v2.3リリースノート](https://biomejs.dev/blog/biome-v2-3/)
  - [Roadmap 2026](https://biomejs.dev/blog/roadmap-2026/)
  - [Setting up Biome | Astro Tips](https://astro-tips.dev/tips/biome/)
- **Findings**:
  - **最新バージョン**: `@biomejs/biome@2.3.14` (2026年2月時点)
  - **Astroサポート**: v2.3.0以降でVue/Svelte/Astroファイルを標準サポート（実験的だが安定）
  - **TypeScriptサポート**: TypeScript 5.6対応、型推論エンジンによる型認識リントルール
  - **パフォーマンス**: Rustベース、Prettierと97%互換性、434個のリントルール
  - **Node.js不要**: スタンドアロン実行可能
- **Implications**:
  - 既存のAstro/TypeScript構成と完全互換
  - Astro特有の構文（JSX-like）は一部制限がある可能性があるが、基本的なフォーマット/リントは問題なし
  - 型認識リントにより、TypeScript strict modeとの相性が良い

### Import順序整理機能の移行
- **Context**: 既存Prettier設定の`@trivago/prettier-plugin-sort-imports`と同等の機能をBiomeで実現
- **Sources Consulted**:
  - [Biome organizeImports公式ドキュメント](https://biomejs.dev/assist/actions/organize-imports/)
  - [Biome V2: Taming Your Imports for Perfect Order](https://dev.to/realchakrawarti/biome-v2-taming-your-imports-for-perfect-order-5g80)
- **Findings**:
  - Biomeの`organizeImports`機能でimport順序整理が可能
  - グループ定義: `:PACKAGE:` (サードパーティ), `:ALIAS:` (エイリアス), 相対パス
  - 既存Prettier設定と同等のルール実現可能:
    ```json
    "organizeImports": {
      "enabled": true,
      "groups": [
        ":PACKAGE:",           // サードパーティモジュール
        ":BLANK_LINE:",
        ["\\./.*"],            // ローカル相対パス
        ":BLANK_LINE:",
        ["~/.*"]               // エイリアスパス (~/)
      ]
    }
    ```
  - エイリアス `~/` は `:ALIAS:` カテゴリとして認識される（tsconfig.paths.json定義に基づく）
- **Implications**:
  - `@trivago/prettier-plugin-sort-imports`の完全な代替が可能
  - 既存の順序ルール（サードパーティ → ローカル相対 → エイリアス）をBiomeで再現

### 既存設定ファイルの分析
- **Context**: 削除対象ファイルと移行すべき設定の特定
- **Sources Consulted**: プロジェクトローカルファイル
- **Findings**:
  - **ESLint設定** (`eslint.config.mjs`):
    - ignoresパターンのみ定義（実質的なリントルールなし）
    - 除外パターン: `.next/**, out/**, build/**, dist/**, next-env.d.ts, storybook-static/**, node_modules/**`
  - **Prettier設定** (`.prettierrc`):
    - プラグイン3つ: `prettier-plugin-astro`, `@trivago/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss`
    - import順序: サードパーティ → 相対 → エイリアス
    - Astroファイル用オーバーライド設定
  - **Prettierignore** (`.prettierignore`):
    - 除外パターン: `pnpm-lock.yaml, .next, coverage`
- **Implications**:
  - ESLintのignoresはBiomeの`files.ignore`に移行
  - Prettierignoreの内容もBiome設定に統合
  - Tailwind CSS順序整理はBiomeのフォーマッターで自動処理（プラグイン不要）

## Architecture Pattern Evaluation

| Option | Description | Strengths | Risks / Limitations | Notes |
|--------|-------------|-----------|---------------------|-------|
| Drop-in Replacement | 既存設定を1:1でBiome設定に移行 | 学習コスト低、挙動の一貫性 | Biome固有の最適化を活かせない可能性 | 選択した方針 |
| Biome Defaults + Minimal Config | Biomeのデフォルト設定をベースに最小限のカスタマイズ | 保守性高、将来のBiomeアップデートに追従しやすい | 既存フォーマットと差分が発生する可能性 | 今回は見送り（コード変更を最小化） |

## Design Decisions

### Decision: Import順序整理の実装方式

- **Context**: Prettierの`@trivago/prettier-plugin-sort-imports`と同等の順序を維持する必要がある
- **Alternatives Considered**:
  1. **organizeImports機能** — Biome組み込み機能でグループ定義
  2. **手動整理** — import順序を手動で管理（ツールサポートなし）
- **Selected Approach**: organizeImports機能を使用し、以下のグループ定義を適用
  ```json
  "organizeImports": {
    "enabled": true,
    "groups": [
      ":PACKAGE:",
      ":BLANK_LINE:",
      ["\\./.*"],
      ":BLANK_LINE:",
      ["~/.*"]
    ]
  }
  ```
- **Rationale**:
  - Biomeのネイティブ機能で既存ルールを完全再現可能
  - 追加プラグイン不要、パフォーマンス最適
  - tsconfig.paths.jsonの`~/`エイリアス定義を活用
- **Trade-offs**:
  - **利点**: プラグイン依存なし、高速、型認識サポート
  - **妥協点**: グループ定義の構文がPrettierプラグインと異なる（学習コスト）
- **Follow-up**: 移行後に全ファイルでimport順序が期待通りか検証

### Decision: Astroファイルのフォーマット設定

- **Context**: Astroファイル（`.astro`）のフォーマット/リント設定
- **Alternatives Considered**:
  1. **Biomeのexperimental Astroサポート** — v2.3以降の標準機能を使用
  2. **Markuplintとの併用** — BiomeはTS/JSのみ、Astroは引き続きMarkuplint
- **Selected Approach**: Biomeのexperimental Astroサポートを使用（Markuplintは併用維持）
- **Rationale**:
  - Biome v2.3以降でHTML/CSS/JS部分のフォーマット/リントが可能
  - Markuplintはマークアップ品質チェック専用として継続使用
  - ツールの責任分離: Biome（コード品質）、Markuplint（マークアップ品質）
- **Trade-offs**:
  - **利点**: コード品質とマークアップ品質の両方をカバー
  - **妥協点**: Astro特有の構文で一部制限がある可能性（実験的サポート）
- **Follow-up**: Astroファイルのフォーマット結果を手動検証、必要に応じてBiome設定を調整

### Decision: Tailwind CSS順序整理の扱い

- **Context**: `prettier-plugin-tailwindcss`を削除した場合のTailwindクラス順序
- **Alternatives Considered**:
  1. **Biomeの標準フォーマッター** — プラグインなしでクラス順序を整理
  2. **手動整理** — 開発者が手動でクラス順序を管理
- **Selected Approach**: Biomeの標準フォーマッター（クラス順序整理は現時点で非サポート）
- **Rationale**:
  - Biomeは現時点でTailwindクラス順序の自動整理をサポートしていない
  - クラス順序は視覚的な影響のみで、機能的な影響はない
  - 将来的にBiomeがサポートする可能性があるため、現時点では手動管理を受容
- **Trade-offs**:
  - **利点**: ツールチェーン簡素化、依存削減
  - **妥協点**: Tailwindクラス順序が統一されない可能性
- **Follow-up**: 移行後にTailwindクラス順序の重要性を再評価、必要に応じて別ツール導入を検討

## Risks & Mitigations

- **Risk 1**: Astro実験的サポートによるフォーマット/リントエラー
  - **Mitigation**: 移行後に全Astroファイルを手動検証、エラー発生時はBiome設定を調整またはMarkuplintで補完
- **Risk 2**: Import順序グループ定義の誤設定による意図しない順序
  - **Mitigation**: 移行前に代表的なファイルでテスト実行、既存順序と一致することを確認
- **Risk 3**: Tailwindクラス順序の乱れによるコードレビュー時の認知負荷
  - **Mitigation**: チームで順序の重要性を議論、必要に応じて別ツール（Tailwind Prettier Plugin以外）を検討

## References
- [Biome公式サイト](https://biomejs.dev/)
- [Biome GitHub Repository](https://github.com/biomejs/biome)
- [Biome v2.3リリースノート](https://biomejs.dev/blog/biome-v2-3/)
- [Roadmap 2026](https://biomejs.dev/blog/roadmap-2026/)
- [Biome organizeImports公式ドキュメント](https://biomejs.dev/assist/actions/organize-imports/)
- [Setting up Biome | Astro Tips](https://astro-tips.dev/tips/biome/)
- [Biome: The ESLint and Prettier Killer? Complete Migration Guide for 2026](https://dev.to/pockit_tools/biome-the-eslint-and-prettier-killer-complete-migration-guide-for-2026-27m)
