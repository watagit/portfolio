# Technology Stack

## Architecture

Static Site Generation (SSG) - Astroによる高速な静的サイト生成

## Core Technologies

- **Language**: TypeScript (strict mode)
- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x + Vanilla Extract
- **Runtime**: Node.js 22.22.0+
- **Package Manager**: pnpm

## Key Libraries

- **@astrojs/tailwind**: Astro用Tailwind統合
- **@vanilla-extract/css**: Type-safe CSS-in-JS
- **sharp**: 画像最適化

## Development Standards

### Type Safety
- TypeScript strict mode有効
- Astro tsconfig: `astro/tsconfigs/strict`を継承
- 明示的な型定義を優先

### Code Quality
- **Linter**: ESLint (minimal configuration)
- **Formatter**: Prettier
  - Import順序自動整理 (`@trivago/prettier-plugin-sort-imports`)
  - Astro/Tailwindプラグイン統合
- **Markup Quality**: Markuplint (Astro対応)

### Testing
現時点でテストフレームワークは未構成

## Development Environment

### Required Tools
- Node.js 22.22.0以上
- pnpm 10.x

### Common Commands
```bash
# Dev: pnpm dev
# Build: pnpm build
# Preview: pnpm preview
# Lint: pnpm lint (eslint + markuplint + tsc)
# Format: pnpm format
```

## Key Technical Decisions

- **Astro選定**: 静的コンテンツ中心のポートフォリオに最適 (島アーキテクチャでインタラクティブ性も確保可能)
- **Tailwind + Vanilla Extract**: ユーティリティファーストと型安全性の両立
- **Import順序**: サードパーティ → ローカル相対 → エイリアスの順で自動整列
- **Strict TypeScript**: 型安全性を最優先

---
_Document standards and patterns, not every dependency_
