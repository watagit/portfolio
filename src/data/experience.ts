import type { Experience } from "~/domain/experience";

export const experiences: Array<Experience> = [
  {
    id: crypto.randomUUID(),
    companyName: "株式会社 Helpfeel",
    position: "フルスタックエンジニア",
    period: "2023/12 - 現在",
    description: "自社サービスである Helpfeel の開発に携わっています。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "AnyReach 株式会社",
    position: "フルスタックエンジニア",
    period: "2023/11 - 現在",
    description: "自社サービスである AnyGift の開発に携わっています。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "C-Style 株式会社",
    position: "フロントエンドエンジニア",
    period: "2020/12 - 現在",
    description:
      "業務委託で自社サービスである通話配信サービスの開発に携わりました。現在は受託開発チームで主にフロントエンドの開発業務に従事しています。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "Crosshare 株式会社",
    position: "フロントエンドエンジニア",
    period: "2021/3 - 2022/12",
    description:
      "業務委託でゲーマー向けマッチングサービスの開発に携わりました。主にフロントエンドの開発を担当し、開発面のマネジメントやユーザーインタビュー等にも貢献しました。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "株式会社 ZOZO",
    position: "フロントエンドエンジニア",
    period: "2022/12/1 - 2022/12/31",
    description:
      "1 ヶ月間の就業型インターンに参加しました。フロントエンドチームに配属され、リプレイスやパフォーマンスチューニングに関するタスクに着手しました。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "株式会社 Speee",
    period: "2022/9/7 - 2022/9/22",
    description:
      "2 週間のサマーインターンに参加しました。”ユーザーへより早く高い価値を届ける” ことについて常に考えさせられる 12 日間でした。チームで不動産査定サービスを開発しました。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "株式会社 CARTA HOLDINGS",
    period: "2022/8/8 - 2022/8/26",
    description:
      "もの創り実践プログラム Treasure に参加しました。GoとReactを使ったウェブアプリケーション開発に取り組みました。リーダーとしてチームを牽引し、ベストチーム賞を受賞しました。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "株式会社ハウテレビジョン",
    period: "2020/9/7 - 2020/9/14",
    description:
      "1 週間のサマーインターンシップに参加しました。既存サービスである「外資就活ドットコム」の新機能の企画と実装をチームで行いました。",
  },
  {
    id: crypto.randomUUID(),
    companyName: "イジゲン株式会社",
    period: "2018/11 - 2019/3",
    description:
      "長期インターンに参加しました。Ruby on Rails を用いたウェブアプリケーション開発に取り組みました。ウェブフレームワークなどの技術に触れ、ウェブ開発の面白さを知りました。",
  },
];
