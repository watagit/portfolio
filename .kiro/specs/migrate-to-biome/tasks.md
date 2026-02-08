# Implementation Plan: Biome移行

## Overview
ESLint + Prettier構成をBiome（オールインワンツールチェーン）に置き換え、開発環境の統合とパフォーマンス向上を実現します。

## Implementation Tasks

### Phase 1: 準備と環境確認

- [ ] 1. 移行前の環境確認とベースライン確立
- [ ] 1.1 Git作業ディレクトリの状態確認
  - uncommittedな変更がないことを確認（`git status`）
  - 未コミットの変更がある場合は警告を出力
  - _Requirements: 3.3_

- [ ] 1.2 移行前のlint/format実行とベースライン記録
  - `pnpm lint`を実行し、現在のエラー状態を記録
  - `pnpm format`を実行し、フォーマット差分がないことを確認
  - 実行時間を計測し、移行後の比較用データとして保存
  - _Requirements: 6.1, 6.2_

### Phase 2: パッケージ管理

- [ ] 2. Biomeパッケージのインストールと既存パッケージの削除
- [ ] 2.1 (P) Biomeパッケージのインストール
  - `@biomejs/biome`を最新安定版（2.3.14以上）でdevDependenciesに追加
  - `pnpm add -D @biomejs/biome`を実行
  - package.jsonにBiomeが追加されたことを確認
  - _Requirements: 1.1_

- [ ] 2.2 既存ESLint/Prettierパッケージの削除
  - `eslint`, `prettier`, `prettier-plugin-astro`, `@trivago/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss`の5パッケージを削除
  - `pnpm remove eslint prettier prettier-plugin-astro @trivago/prettier-plugin-sort-imports prettier-plugin-tailwindcss`を実行
  - package.jsonから該当パッケージが削除されたことを確認
  - pnpm-lock.yamlが正しく更新されたことを確認
  - _Requirements: 1.2, 1.3_

### Phase 3: Biome設定ファイルの作成

- [ ] 3. biome.json設定ファイルの作成と検証
- [ ] 3.1 (P) biome.json基本構造の作成
  - プロジェクトルートに`biome.json`を作成
  - `$schema`フィールドを設定（Biome公式スキーマ）
  - `files.ignore`に既存ESLintのignoresパターンを移行: `.next/**`, `out/**`, `build/**`, `dist/**`, `next-env.d.ts`, `storybook-static/**`, `node_modules/**`, `pnpm-lock.yaml`, `coverage`
  - `files.include`に対象ファイルタイプを設定: `**/*.ts`, `**/*.tsx`, `**/*.astro`, `**/*.json`
  - _Requirements: 2.1, 2.2, 2.3_

- [ ] 3.2 (P) フォーマッター設定の追加
  - `formatter.enabled: true`を設定
  - `formatter.indentStyle`と`formatter.indentWidth`を既存Prettier設定に合わせて設定
  - Astroファイルのフォーマット設定を有効化
  - _Requirements: 2.2, 2.5_

- [ ] 3.3 (P) リンター設定の追加
  - `linter.enabled: true`を設定
  - `linter.rules.recommended: true`を設定
  - TypeScript strict mode対応のリントルールを有効化
  - _Requirements: 2.6_

- [ ] 3.4 Import順序整理機能の設定
  - `organizeImports.enabled: true`を設定
  - `organizeImports.groups`を既存Prettier設定と同等に設定:
    - グループ1: `:PACKAGE:` (サードパーティモジュール)
    - ブランクライン挿入
    - グループ2: `\\./.* ` (ローカル相対パス)
    - ブランクライン挿入
    - グループ3: `~/.*` (エイリアスパス)
  - tsconfig.paths.jsonの`~/`エイリアス定義を参照
  - _Requirements: 2.4_

- [ ] 3.5 Biome設定の動作検証
  - 代表的なTypeScriptファイルで`biome check`を実行
  - 代表的なAstroファイルで`biome format`を実行
  - Import順序が期待通り（サードパーティ → 相対 → エイリアス）に整理されることを確認
  - エラーが発生した場合は設定を調整
  - _Requirements: 2.1, 2.4_

### Phase 4: package.jsonスクリプトの更新

- [ ] 4. package.jsonスクリプトのBiomeコマンドへの置き換え
- [ ] 4.1 (P) lintスクリプトの更新
  - `lint:eslint`スクリプトを`lint:biome`に名称変更
  - コマンドを`eslint .`から`biome check .`に変更
  - `lint`スクリプト（run-s経由）が`lint:biome`, `lint:markup`, `lint:tsc`を並列実行することを確認
  - _Requirements: 4.1, 4.3, 4.4_

- [ ] 4.2 (P) formatスクリプトの更新
  - `format`スクリプトのコマンドを`prettier --write .`から`biome format --write .`に変更
  - _Requirements: 4.2_

- [ ] 4.3 package.jsonスクリプトの検証
  - `pnpm lint:biome`を実行し、Biomeチェックが正常動作することを確認
  - `pnpm format`を実行し、Biomeフォーマットが正常動作することを確認
  - `pnpm lint`を実行し、Biome/Markuplint/tscが並列実行されることを確認
  - _Requirements: 4.4, 6.1, 6.2_

### Phase 5: 既存設定ファイルの削除

- [ ] 5. 不要設定ファイルの削除
- [ ] 5.1 ESLint/Prettier設定ファイルの削除
  - `eslint.config.mjs`, `.prettierrc`, `.prettierignore`がGit管理下にあることを確認
  - `git rm eslint.config.mjs .prettierrc .prettierignore`を実行
  - `git status`で削除が正しく記録されていることを確認
  - _Requirements: 3.1, 3.2, 3.3_

### Phase 6: 既存コードのフォーマット適用

- [ ] 6. 全ファイルへのBiomeフォーマット適用と差分レビュー
- [ ] 6.1 Biomeフォーマットの全ファイル適用
  - `biome format --write .`を実行
  - 全TypeScript/Astroファイルにフォーマットを適用
  - _Requirements: 5.1_

- [ ] 6.2 フォーマット差分の確認と検証
  - `git diff`でフォーマット差分を確認
  - ロジック変更がないことを目視確認（スタイルのみの変更）
  - `tsc`で型チェックを実行し、構文エラーがないことを確認
  - Astroファイルで実験的サポートによるエラーが発生していないかチェック
  - _Requirements: 5.2, 5.3_

### Phase 7: 開発ワークフローの検証

- [ ] 7. 移行後のワークフロー検証とパフォーマンス測定
- [ ] 7.1 lintワークフローの検証
  - `pnpm lint`を実行し、エラーなく完了することを確認
  - Biome/Markuplint/tscが並列実行されることを確認
  - Biomeがエラーを検出した場合、明確なエラーメッセージが表示されることを確認
  - _Requirements: 6.1, 6.3, 6.4_

- [ ] 7.2 formatワークフローの検証
  - `pnpm format`を実行し、全対象ファイルが正しくフォーマットされることを確認
  - 再度`pnpm format`を実行し、差分が発生しないこと（冪等性）を確認
  - _Requirements: 6.2_

- [ ] 7.3 パフォーマンス測定と比較
  - `pnpm lint`の実行時間を計測
  - `pnpm format`の実行時間を計測
  - Phase 1で記録したベースラインと比較し、50%以上の改善を確認
  - 改善率が目標に達しない場合は原因を調査
  - _Requirements: Non-Functional (Performance)_

- [ ] 7.4 CI/CDパイプラインの動作確認
  - `.github/workflows/check.yml`が`pnpm lint`を実行していることを確認
  - ローカルで移行後の最初のcommitを作成
  - CIが正常に実行され、Biomeチェックが成功することを確認
  - _Requirements: 6.1_

### Phase 8: ドキュメント更新

- [ ] 8. ドキュメントの更新とBiome公式リンク追加
- [ ] 8.1 (P) Steeringドキュメントの更新
  - `.kiro/steering/tech.md`のCode Qualityセクションを開く
  - 「Linter: ESLint」を「Linter/Formatter: Biome」に置き換え
  - 「Formatter: Prettier」の記述を削除
  - Import順序整理機能がBiomeの`organizeImports`で実現されることを明記
  - Biome公式ドキュメント（https://biomejs.dev/）へのリンクを追加
  - _Requirements: 7.1_

- [ ] 8.2 (P) READMEの更新（存在する場合）
  - README.mdにlint/format手順の記載があるか確認
  - 記載がある場合、ESLint/Prettierの記述をBiomeに更新
  - Biomeコマンド（`pnpm lint`, `pnpm format`）の説明を追加
  - _Requirements: 7.2_

- [ ] 8.3 ドキュメント更新の検証
  - 更新されたtech.mdをレビュー、記述の正確性を確認
  - Biome公式ドキュメントリンクが正しいことを確認
  - _Requirements: 7.3_

## Requirements Coverage

全7要件を網羅的にカバー:

- **Requirement 1** (1.1-1.3): Task 2.1, 2.2
- **Requirement 2** (2.1-2.6): Task 3.1, 3.2, 3.3, 3.4, 3.5
- **Requirement 3** (3.1-3.3): Task 1.1, 5.1
- **Requirement 4** (4.1-4.4): Task 4.1, 4.2, 4.3
- **Requirement 5** (5.1-5.3): Task 6.1, 6.2
- **Requirement 6** (6.1-6.4): Task 1.2, 4.3, 7.1, 7.2, 7.4
- **Requirement 7** (7.1-7.3): Task 8.1, 8.2, 8.3

## Task Execution Notes

### 並列実行可能タスク (P)
以下のタスクは独立しており、並列実行が可能です:
- **Phase 2**: 2.1 (Biomeインストール) - 独立実行可能
- **Phase 3**: 3.1, 3.2, 3.3 (biome.json各セクション作成) - ファイル競合なし、独立実行可能
- **Phase 4**: 4.1, 4.2 (package.jsonスクリプト更新) - 異なるスクリプト名、競合なし
- **Phase 8**: 8.1, 8.2 (ドキュメント更新) - 異なるファイル、競合なし

### 依存関係
- **Phase 3 (3.4, 3.5)**: Phase 3.1-3.3完了後に実行（biome.json基本構造が必要）
- **Phase 4 (4.3)**: Phase 4.1, 4.2完了後に実行（全スクリプト更新後に検証）
- **Phase 5**: Phase 2, 3, 4完了後に実行（Biome移行完了後に旧設定削除）
- **Phase 6**: Phase 5完了後に実行（設定削除後にフォーマット適用）
- **Phase 7**: Phase 6完了後に実行（フォーマット適用後に検証）

### リスク対応
- **Astro実験的サポート**: Task 6.2でAstroフォーマットエラーをチェック、発生時は手動修正またはMarkuplint補完
- **Import順序検証**: Task 3.5で既存順序と一致することを確認、不一致時は設定調整
- **CI失敗**: Task 7.4でCI動作確認、失敗時はBiomeコマンドのexit code調査
