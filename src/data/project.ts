import type { Project } from "@/domain/project";

export const projects: Array<Project> = [
  {
    id: "1",
    thumbnailImageUrl:
      "https://raw.githubusercontent.com/watagit/portfolio/image/easyreview.png",
    serviceName: "Easy Review",
    description:
      "日本語話者フレンドリーかつ、初心者エンジニアフレンドリーな UI で、気軽にコードレビューを投稿できるサービスです。",
  },
  {
    id: "2",
    thumbnailImageUrl:
      "https://raw.githubusercontent.com/watagit/portfolio/image/codeforyamaguchi.png",
    serviceName: "山口県公認 新型コロナウイルス感染症対策サイト",
    description:
      "山口県内のコロナウイルスに関する情報をまとめた山口県公認のサイトです。",
  },
  {
    id: "3",
    thumbnailImageUrl:
      "https://raw.githubusercontent.com/watagit/portfolio/image/yowin.png",
    serviceName: "Yowin",
    description:
      "ゲーマー向けのマッチングサービスです。ボタンを 1 クリックするだけで自分と相性のいいプレイヤーとマッチングし Discord でコミュニケーションを取ることができます。",
  },
];
