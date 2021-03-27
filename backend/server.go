package main

import (
  "github.com/gin-gonic/gin"
  "log"
)

type Experience struct {
  Name   string
  Detail string
  Period string
}

type Education struct {
  Name   string
  Detail string
  Period string
}

type Skill struct {
  Name string
}

type Experiences []Experience
type Educations  []Education
type Skills      []Skill

type Response struct {
  Name        string      `json:"name"`
  Biography   string      `json:"biography"`
  TwitterID   string      `json:"twitter_id"`
  Experiences Experiences `json:"experiences"`
  Educations  Educations  `json:"educations"`
  Skills      Skills      `json:"skills"`
}

func main() {
  r := gin.Default()

  user := Response{
    Name: "小野 航",
    Biography: "大分高専情報工学科卒業。山口大学工学部知能情報工学科3年に在学中。高専では「CNNを用いた路面領域抽出における影の色補正に関する研究」をテーマに研究を行いました。ウェブフロントエンドとデータサイエンスに興味があります。",
    TwitterID: "@what_a_pon",
    Experiences: Experiences{
      Experience{Name: "Crosshare, Inc.", Detail: "業務委託としてジョインする。", Period: "Mar 2021 - Present"},
      Experience{Name: "Kyuzitsu Hack Co., Ltd.", Detail: "アルバイトとして業務のサポート開発や新機能の開発に携わる。", Period: "Dec 2020 - Present"},
      Experience{Name: "Nudge!", Detail: "2030年を作る人材を支援する仕組みを作るためにチームで活動する。", Period: "Jul 2020 - Present"},
      Experience{Name: "HowTelevision, Inc.", Detail: "サマーインターンシップに参加した。既存サービス「外資就活ドットコム」の新機能の企画と実装をチームで行った。", Period: "Sep 2020"},
      Experience{Name: "IJGN INC.", Detail: "3ヶ月の長期インターンに参加した。Ruby on Rails を用いたウェブアプリケーション開発に取り組んだ。授業では扱わないウェブの技術に触れ、面白さを知る。", Period: "Nov 2018 - Mar 2019"},
    },
    Educations: Educations{
      Education{Name: "山口大学 工学部 知能情報工学科", Detail: "3年次編入学。 オンライン化を活かし、勉強会やビジネスコンテスト、ハッカソンなどに参加する。 学業の傍ら、起業を目指し仲間と活動する。"},
      Education{Name: "大分高専 情報工学科", Detail: "プログラミングやネットワーク、システム設計などの基礎を学ぶ。卒業研究では「CNN を用いた路面領域抽出における影の色補正に関する研究」をテーマに研究を行った。独学でウェブの技術を学ぶ。", Period: "Dec 2020 - Feb 2021"},
    },
    Skills: Skills{
      Skill{Name: "React"},
      Skill{Name: "Typescript"},
      Skill{Name: "JavaScript"},
      Skill{Name: "Ruby"},
      Skill{Name: "Ruby on Rails"},
      Skill{Name: "Python"},
    },
  }

  r.GET("/user", func(c *gin.Context) {
    c.JSON(200, user)
  })

  err := r.Run(":8080")
  if err != nil {
    log.Fatal(err)
  }
}
