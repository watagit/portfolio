# Project Structure

## Organization Philosophy

**ドメイン駆動 + コンポーネント分離** - ビジネスロジック(domain)とUIコンポーネント(component)を明確に分離し、データソース(data)を独立管理

## Directory Patterns

### Domain Types (`/src/domain/`)
**Purpose**: ビジネスエンティティの型定義
**Example**: `project.ts`, `experience.ts`, `education.ts`, `socialAccount.ts`
**Characteristics**: Pure TypeScript型、ビジネスロジックなし

### Data Sources (`/src/data/`)
**Purpose**: 静的コンテンツデータ (JSONライクなエクスポート)
**Example**: プロジェクト一覧、経歴情報、学歴データ
**Characteristics**: ドメイン型に準拠したデータ定義

### Component Organization (`/src/component/`)

#### UI Components (`ui/`)
**Purpose**: 汎用UIコンポーネント (デザインシステム的な役割)
**Example**: `Header`, `ProfileHeading`, `SectionWithTitle`
**Characteristics**: ドメイン非依存、再利用可能

#### Model Components (`model/{domain}/`)
**Purpose**: 特定ドメインに紐づくコンポーネント
**Example**: `model/project/ProjectList`, `model/experience/ExperienceList`
**Characteristics**: ドメイン型を受け取り、ビジネスロジックを表示

#### Page Components (`page/`)
**Purpose**: ページ全体を構成するコンポーネント
**Example**: `Top.astro` (トップページ全体)

### Pages (`/src/pages/`)
**Purpose**: Astroのファイルベースルーティング
**Example**: `index.astro` → `/`
**Characteristics**: Layoutとページコンポーネントを組み合わせるのみ

### Layouts (`/src/layouts/`)
**Purpose**: 共通レイアウトテンプレート
**Example**: `Layout.astro` (HTML構造、メタタグ、グローバルスタイル)

### Styling (`/src/style/`)
**Purpose**: グローバルスタイル定義
**Characteristics**: Vanilla Extract or CSS

## Naming Conventions

- **Files**: PascalCase for components (`ProjectList.astro`), camelCase for types/data (`project.ts`)
- **Components**: PascalCase (`<ProjectItem />`)
- **Types**: PascalCase (`type Project = {...}`)

## Import Organization

```typescript
// Third-party modules
import type { Project } from "~/domain/project";

// Local relative imports
import ProjectItem from "./ProjectItem.astro";

// Alias imports (~/*)
import Layout from "~/layouts/Layout.astro";
```

**Path Aliases**:
- `~/`: `./src/` へのショートカット (tsconfig.paths.json)

## Code Organization Principles

- **単一責任**: Componentは表示のみ、DomainはビジネスロジックのみU
- **依存方向**: Component → Data → Domain (逆方向依存なし)
- **コロケーション**: コンポーネントとスタイルは同ディレクトリ配置
  - 例: `ProjectList/ProjectList.astro` + `ProjectList/style.css.ts`
- **Atomic Design風の階層**:
  - `ui/` (atoms/molecules相当)
  - `model/{domain}/` (organisms相当、ドメイン特化)
  - `page/` (templates相当)
  - `pages/` (pages相当、ルーティング)

---
_Document patterns, not file trees. New files following patterns shouldn't require updates_
