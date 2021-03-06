package main

import (
  "github.com/gin-gonic/gin"
  "log"
  "net/http"

  "google.golang.org/appengine"
)

type MetaData struct {
  Name      string `json:"name"`
  TwitterID string `json:"twitter_id"`
}

type Biography struct {
  Content string `json:"content"`
}

type Experience struct {
  Name   string `json:"name"`
  Detail string `json:"detail"`
  Period string `json:"period"`
}

type Education struct {
  Name   string `json:"name"`
  Detail string `json:"detail"`
  Period string `json:"period"`
}

type Skill struct {
  Name string `json:"name"`
}

type Experiences []Experience
type Educations  []Education
type Skills      []Skill

type Response struct {
  MetaData    MetaData    `json:"meta_data"`
  Bio         Biography   `json:"bio"`
  Experiences Experiences `json:"experiences"`
  Educations  Educations  `json:"educations"`
  Skills      Skills      `json:"skills"`
}

func main() {
  r := gin.Default()

  metaData := MetaData{
    Name: "小野 航",
    TwitterID: "@what_a_pon",
  }

  bio := Biography{
    Content: "大分高専情報工学科卒業。山口大学工学部知能情報工学科3年に在学中。高専では「CNNを用いた路面領域抽出における影の色補正に関する研究」をテーマに研究を行いました。ウェブフロントエンドとデータサイエンスに興味があります。",
  }

  experiences := Experiences{
    Experience{Name: "Crosshare, Inc.", Detail: "業務委託としてジョインする。", Period: "Mar 2021 - Present"},
    Experience{Name: "Kyuzitsu Hack Co., Ltd.", Detail: "アルバイトとして業務のサポート開発や新機能の開発に携わる。", Period: "Dec 2020 - Present"},
    Experience{Name: "Nudge!", Detail: "2030年を作る人材を支援する仕組みを作るためにチームで活動する。", Period: "Jul 2020 - Present"},
    Experience{Name: "HowTelevision, Inc.", Detail: "サマーインターンシップに参加した。既存サービス「外資就活ドットコム」の新機能の企画と実装をチームで行った。", Period: "Sep 2020"},
    Experience{Name: "IJGN INC.", Detail: "3ヶ月の長期インターンに参加した。Ruby on Rails を用いたウェブアプリケーション開発に取り組んだ。授業では扱わないウェブの技術に触れ、面白さを知る。", Period: "Nov 2018 - Mar 2019"},
  }

  educations := Educations{
    Education{Name: "山口大学 工学部 知能情報工学科", Detail: "3年次編入学。 オンライン化を活かし、勉強会やビジネスコンテスト、ハッカソンなどに参加する。 学業の傍ら、起業を目指し仲間と活動する。"},
    Education{Name: "大分高専 情報工学科", Detail: "プログラミングやネットワーク、システム設計などの基礎を学ぶ。卒業研究では「CNN を用いた路面領域抽出における影の色補正に関する研究」をテーマに研究を行った。独学でウェブの技術を学ぶ。", Period: "Dec 2020 - Feb 2021"},
  }

  skills := Skills{
    Skill{Name: "React"},
    Skill{Name: "Typescript"},
    Skill{Name: "JavaScript"},
    Skill{Name: "Ruby"},
    Skill{Name: "Ruby on Rails"},
    Skill{Name: "Python"},
  }

  response := Response{
    MetaData: metaData,
    Bio: bio,
    Experiences: experiences,
    Educations: educations,
    Skills: skills,
  }

  r.GET("/", func(c *gin.Context) {
    c.JSON(http.StatusOK, response)
  })

  r.GET("/ping", func(c *gin.Context) {
    c.JSON(http.StatusOK, "hello")
  })

  err := r.Run(":8080")
  if err != nil {
    log.Fatal(err)
  }

  appengine.Main()
}
