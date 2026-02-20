# Visual Regression Testing

このプロジェクトでは、VercelのPreview環境に対してビジュアルリグレッションテストを実行し、UI の差分を自動的に検出します。

## セットアップ

### 1. Argos CI の設定

1. [Argos CI](https://argos-ci.com/) にGitHubアカウントでサインアップ
2. リポジトリを接続
3. プロジェクトトークンを取得
4. GitHubリポジトリの Settings > Secrets and variables > Actions に `ARGOS_TOKEN` を追加

### 2. ローカル環境でのテスト

```bash
# Playwrightブラウザのインストール（初回のみ）
pnpm playwright install chromium

# ビルドしてプレビューサーバーを起動
pnpm build
pnpm preview

# 別のターミナルでビジュアルテストを実行
pnpm test:visual

# UIモードでテストを実行（デバッグ用）
pnpm test:visual:ui
```

## 仕組み

1. PRが作成されると、Vercelが自動的にPreview環境をデプロイ
2. Vercelのデプロイが成功すると、`deployment_status`イベントがトリガー
3. GitHub Actionsワークフロー (`.github/workflows/visual-regression.yml`) が実行され、Playwright でスクリーンショットを撮影
4. Argos CI がスクリーンショットを比較し、差分があればPRにコメントで通知

## テスト対象ページの追加

`tests/visual.spec.ts` の `pages` 配列に新しいページを追加してください。

```typescript
const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },  // 追加例
  { name: "Projects", path: "/projects" },  // 追加例
];
```

## ビューポートの変更

`tests/visual.spec.ts` の `viewports` 配列を編集してください。

```typescript
const viewports = [
  { name: "Desktop", width: 1920, height: 1080 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Mobile", width: 375, height: 667 },
];
```

## コスト

- **Argos CI**: 個人・オープンソースプロジェクトは無料
- **GitHub Actions**: 無料枠内で動作（パブリックリポジトリは無制限）
- **Vercel**: 既存のPreview環境を使用するため追加コストなし

## トラブルシューティング

### Argosにスクリーンショットがアップロードされない

1. `ARGOS_TOKEN` が正しく設定されているか確認
2. GitHub Actionsのログで `pnpm argos upload` のエラーを確認

### Playwright テストが失敗する

1. ローカルで `pnpm test:visual:ui` を実行してデバッグ
2. `BASE_URL` が正しく設定されているか確認（ワークフローファイル内）

## 参考リンク

- [Argos CI Documentation](https://argos-ci.com/docs)
- [Playwright Documentation](https://playwright.dev/)
- [Vercel Deployment Events](https://vercel.com/docs/deployments/deploy-hooks)
