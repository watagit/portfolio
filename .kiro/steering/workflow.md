# Workflow & Development Process

## Git & Version Control

### Branch Naming
- Feature branches: `claude/{slack-description-id}` format
- Always develop on designated branch (never push to main directly)

### Commit Messages
- **Language**: 日本語
- **Style**: 簡潔で説明的なメッセージ
- **Format**: 変更の内容と理由を明確に記述

### Pull Requests
- **Language**: 日本語 (タイトル、説明文、すべて日本語で記述)
- **Title**: 70文字以内、変更内容を簡潔に表現
- **Description Structure**:
  - `## 概要` - 変更内容のサマリー (箇条書き1-3個)
  - `## テスト計画` - 検証項目のチェックリスト
  - Slackスレッドへのリンク (該当する場合)
  - Claude セッションリンク
- **Example**:
  ```markdown
  ## 概要
  - プロフィール文の段落間スペースを縮小 (gap: 8 → 4)
  - レイアウトの視認性を向上

  ## テスト計画
  - [ ] デスクトップ表示の確認
  - [ ] モバイル表示の確認

  関連Slackスレッド: https://smallvoyage.slack.com/...

  https://claude.ai/code/session_xxxxx
  ```

## Code Review Process
- 各フェーズで人間によるレビューを必須とする
- `-y` フラグは意図的なファストトラックのみ使用

## Communication
- **対外的なドキュメント (PR, コミット)**: 日本語
- **内部思考プロセス**: 英語可
- **コード内コメント**: 英語 (必要最小限)

---
_Define process, not prescriptive steps for every scenario_
