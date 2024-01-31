import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Portfolio() {
  const projects = [
    {
      title: "업소록",
      sub: "등록된 상점이나 서비스 검색, 수정 요청 및 리뷰",
      date: "2023.10 ~",
      env: ["NextJS", "Prisma", "MSSQL", "CPanel"],
      desc: [
        "상점 등록 및 업데이트를 위한 정보 요청 구현",
        "자체 광고를 위한 내부 등록툴 수정 및 최적화",
      ],
    },
    {
      title: "학생미술공모전",
      sub: "매년 개최되는 공모전 접수 및 홍보 사이트",
      date: "2022.08 ~",
      env: ["PHP", "Laravel", "MySQL", "CPanel"],
      desc: [
        "공모전 접수 양식 구현 및 이미지 thumbnail 생성, 부분 결제 개발",
        "사이트 컨텐츠 조작을 위한 내부 관리자 페이지 제작",
      ],
    }, {
      title: "티켓 예매 시스템",
      sub: "이벤트 관리 및 좌석 입력, 주문 등의 관리자 페이지",
      date: "2023.01 ~ 2023.10",
      env: ["PHP", "MySQL", "CPanel", "ASP", "IIS"],
      desc: [
        "판매 페이지에서 좌석 선택 및 홀드 기능 추가 및 선점 좌석 자동 해제 구현",
        "주문 수정, 취소 등의 변경과 판매 데이터, 좌석 수정 등의 기능 제작",
      ],
    },
    {
      title: "판매 채널 주문 관리",
      sub: "Rest API를 활용한 판매 채널들의 상품, 주문 내역 수집 및 업데이트",
      date: "2020.08 ~ 2022.05",
      env: ["PHP 7", "CodeIgnitor3", "MSSQL", "Nginx"],
      desc: [
        "Linked server를 사용한 쿼리 작업 수행",
        "Amazon, Yahoo, Rakuten, Coupang API 분석 및 적용",
      ],
    }
    , {
      title: "배송 관리",
      sub: "배송 정보 및 송장 번호, 재고 상태 확인 및 상태 업데이트 관리",
      date: "2021.04 ~ 2022.05",
      env: ["PHP 7", "CodeIgnitor3", "MSSQL", "Nginx"],
      desc: [
        "판매량, 재고관리 등의 데이터 수집 및 통계 데이터 노출",
      ]
    },
    {
      title: "Shopify Theme",
      sub: "Shopify 전용 store theme 제작 및 유지보수",
      date: "2019.01 ~ 2020.06",
      env: ["Liquid", "Shopify", "SCSS"],
      desc: [
        "디자이너와 UI, UX를 중점으로 한 dimension 기반 설계 및 개발",
        "ScrollMagic js, Zoho Desk API 사용",
      ]
    }, {
      title: "Network data loss prevention system",
      sub: "저장된 데이터를 가공하여 사용자에게 데이터 제공",
      date: "2016.10 ~ 2018.02",
      env: ["Java 8", "Spring 5", "Postgresql", "JSP", "Linux", "Tomcat 8"],
      desc: [
        "모듈에서 인덱싱한 데이터를 오픈하여 읽거나 추출하는 기능",
        "통계를 위한 데이터 기반 그래프 제작 및 엑셀 추출",
      ]
    }, {
      title: "SSL decryption solution",
      date: "2017.10 ~ 2018.02",
      env: ["Java 8", "Spring 5", "Postgresql", "JPA", "JSP", "Linux", "Tomcat 8"],
      desc: [
        "REST API를 기반으로 모듈과 데이터 상호교환",
        "사용자가 조작한 값을 모듈에게 전송하거나 차단한 기록을 읽어 결과 도출",
      ],
    }
  ]

  return (
    <Layout>
      <Seo title="Portfolio" />
      <h1 css={css`font-weight:700;text-align:center;`}>포트폴리오</h1>
      <section>
        <ol>
          {projects.map((x, i) =>
            <li id={i}>
              <h5>{x.title}<small css={css`font-weight:300;margin-left:.5rem;`}>({x.date})</small></h5>
              <div css={css`display:flex;
                align-items:center;
                gap:.5rem;
                flex-wrap:wrap;
                font-weight:500;
                font-size:0.9rem;
                color:white;
                margin:.2rem 0 .6rem;`}>
                {x.env.map((env, i) => <span
                  id={i}
                  css={css`background-color:gray;
                    padding:0 .3rem;
                    border-radius:.3rem;`}
                >{env}</span>)}
              </div>
              {x.sub && <p>{x.sub}</p>}
              <ul>
                {x.desc.map((desc, i) => <li id={i}>{desc}</li>)}
              </ul>
            </li>
          )}
        </ol>
      </section>
    </Layout>
  )
}