import type { Education } from "~/domain/education";

export const educations: Array<Education> = [
  {
    id: "1",
    universityName: "奈良先端科学技術大学院大学",
    period: "2022/4 - 2024/4 (中退)",
    description: "コンピュテーショナルフォトグラフィ分野の研究を行いました。",
  },
  {
    id: "2",
    universityName: "山口大学",
    period: "2020/4 - 2022/3",
    description:
      "大分高専から 3 年次編入しました。 卒業研究では「感情認識のためのマルチアテンション型深層ニューラルネットワークの研究」をテーマに研究を行いました。",
  },
  {
    id: "3",
    universityName: "大分工業高等専門学校",
    period: "2015/4 - 2020/3",
    description:
      "「CNN を用いた路面領域抽出における影の色補正に関する研究」をテーマに研究を行いました。",
  },
];
