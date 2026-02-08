# Requirements Document

## Project Description (Input)
ESlint と Prettier を Biome に移行

## Introduction

Biomeは、ESLint、Prettier、その他のツールを統合したオールインワンツールチェーンです。本プロジェクトでは、現在のESLint + Prettier構成をBiomeに置き換え、開発環境の統合とパフォーマンス向上を実現します。

現在の構成:
- **Linter**: ESLint 9.39.2 (最小構成、ignoresのみ)
- **Formatter**: Prettier 3.8.1 + プラグイン3つ
  - `prettier-plugin-astro`: Astroファイル対応
  - `@trivago/prettier-plugin-sort-imports`: import順序自動整理
  - `prettier-plugin-tailwindcss`: Tailwindクラス順序整理
- **対象ファイル**: TypeScript (.ts, .tsx), Astro (.astro)

## Requirements

### Requirement 1: Biomeパッケージのインストールと既存ツールの削除

**Objective:** 開発者として、Biomeを導入し既存のリンター/フォーマッターを削除することで、ツールチェーンを簡素化したい

#### Acceptance Criteria
1. The Portfolio Build System shall `@biomejs/biome`パッケージをdevDependenciesにインストールする
2. The Portfolio Build System shall 以下の既存パッケージを削除する:
   - `eslint`
   - `prettier`
   - `prettier-plugin-astro`
   - `@trivago/prettier-plugin-sort-imports`
   - `prettier-plugin-tailwindcss`
3. When パッケージインストール後、the Portfolio Build System shall `node_modules`とロックファイルを正しく更新する

### Requirement 2: Biome設定ファイルの作成

**Objective:** 開発者として、既存のESLint/Prettier設定と同等の機能をBiomeで実現したい

#### Acceptance Criteria
1. The Portfolio Build System shall `biome.json`設定ファイルをプロジェクトルートに作成する
2. The Biome Configuration shall 以下のファイルタイプをフォーマット対象とする:
   - TypeScript (`.ts`, `.tsx`)
   - Astro (`.astro`)
   - JSON (`.json`)
3. The Biome Configuration shall 既存ESLintのignoresパターンと同等の除外設定を持つ:
   - `.next/**`, `out/**`, `build/**`, `dist/**`
   - `next-env.d.ts`, `storybook-static/**`, `node_modules/**`
4. The Biome Configuration shall import順序整理機能を有効化し、既存Prettier設定と同等のルールを適用する:
   - サードパーティモジュール → ローカル相対パス → エイリアスパス (`~/`)
5. Where Astroファイルが存在する場合、the Biome Configuration shall Astroファイルのフォーマット設定を含む
6. The Biome Configuration shall TypeScript strict modeプロジェクトに適したリントルールを設定する

### Requirement 3: 既存設定ファイルの削除

**Objective:** 開発者として、不要になった設定ファイルを削除し、プロジェクトをクリーンに保ちたい

#### Acceptance Criteria
1. The Migration Process shall 以下のファイルを削除する:
   - `eslint.config.mjs`
   - `.prettierrc`
2. If `.prettierignore`が存在する場合、then the Migration Process shall 当該ファイルも削除する
3. The Migration Process shall 削除前にGit管理下のファイルであることを確認する

### Requirement 4: package.jsonスクリプトの更新

**Objective:** 開発者として、既存のlint/formatコマンドをBiomeコマンドに置き換えたい

#### Acceptance Criteria
1. The Portfolio Build System shall `lint:eslint`スクリプトを`lint:biome`に置き換える:
   - 旧: `"lint:eslint": "eslint ."`
   - 新: `"lint:biome": "biome check ."`
2. The Portfolio Build System shall `format`スクリプトをBiomeコマンドに置き換える:
   - 旧: `"format": "prettier --write ."`
   - 新: `"format": "biome format --write ."`
3. The Portfolio Build System shall `lint`スクリプト (run-s経由で複数lintを実行) を維持し、markuplintとtscと併用する
4. When 開発者が`pnpm lint`を実行した場合、the Portfolio Build System shall Biomeチェックを他のlintツールと並行実行する

### Requirement 5: 既存コードのフォーマット適用

**Objective:** 開発者として、移行後に既存コードをBiomeの規則に準拠させたい

#### Acceptance Criteria
1. The Migration Process shall 移行完了後、全TypeScript/Astroファイルに対してBiomeフォーマットを実行する
2. If フォーマット適用後にコード差分が発生した場合、then the Migration Process shall 差分をレビュー可能な状態で提示する
3. The Migration Process shall フォーマット適用によりロジックが変更されないことを保証する (構文エラーが発生しない)

### Requirement 6: 開発ワークフローの検証

**Objective:** 開発者として、移行後も既存の開発ワークフローが正常に機能することを確認したい

#### Acceptance Criteria
1. When 開発者が`pnpm lint`を実行した場合、the Portfolio Build System shall エラーなくlintチェックを完了する
2. When 開発者が`pnpm format`を実行した場合、the Portfolio Build System shall 全対象ファイルを正しくフォーマットする
3. The Portfolio Build System shall 既存のtscとmarkuplintコマンドが引き続き正常動作する
4. If Biomeがエラーを検出した場合、then the Portfolio Build System shall 明確なエラーメッセージを表示する

### Requirement 7: ドキュメンテーション更新

**Objective:** 開発者として、移行後のツールチェーン構成をドキュメントで確認したい

#### Acceptance Criteria
1. The Migration Process shall `.kiro/steering/tech.md`のCode Qualityセクションを更新する:
   - ESLint/Prettierの記述をBiomeに置き換える
   - Import順序整理機能がBiomeで実現されることを明記する
2. If README.mdにlint/format手順の記載がある場合、then the Migration Process shall 該当箇所を更新する
3. The Migration Process shall 更新されたドキュメントにBiomeの公式ドキュメントリンクを含める

## Non-Functional Requirements

### Performance
- Biomeは既存のESLint + Prettier構成よりも高速に動作することが期待される (目標: 50%以上の実行時間短縮)

### Compatibility
- Node.js 22.22.0以上の環境で動作すること
- pnpm 10.x パッケージマネージャーと互換性を持つこと

### Maintainability
- 設定ファイルは可読性が高く、将来的なルール追加が容易であること
- Biomeのデフォルトルールをベースとし、カスタムルールは最小限に抑えること
