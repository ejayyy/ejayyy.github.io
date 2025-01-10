import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Portfolio() {
  const projects = [
    {
      title: "학생 미술 공모전",
      sub: "매년 개최되는 공모전 접수 및 홍보 사이트",
      date: "2022.08 ~ 2024.10",
      env: ["PHP 8", "Laravel 10", "Vue", "MySQL", "CPanel", "Docker", "GitLab", "Notion"],
      desc: [
        "담당자와의 협업을 통한 데이터 설계 및 가공을 통한 데이터 최적화",
        "메인 사이트와 사이트 컨텐츠 조작을 위한 내부 관리자 페이지 제작",
        "큰 이미지 thumbnail 처리 및 component 재사용으로 웹사이트 최적화",
        "제휴 할인과 단체 할인, 부분 결제 등의 예외처리를 통한 결제 시스템 구축",
        "기획부터 설계까지 참여하여 최종 Production 런칭",
        "담당자와 시스템 방향 설정 및 조율을 통한 일정 관리",
      ],
    }, {
      title: "티켓 판매 시스템",
      sub: "이벤트 관리 및 좌석 입력, 주문 등의 관리자, 판매 페이지",
      env: ["PHP 8", "Laravel 11", "Vue", "MySQL", "CPanel", "Docker", "GitLab", "Notion"],
      date: "2023.11 ~ 2024.10",
      desc: [
        "판매 페이지에서 좌석 선택 및 홀드 기능 추가 및 선점 좌석 자동 해제 구현",
        "주문 수정, 취소 등의 변경과 판매 데이터, 좌석 수정 등의 기능 제작",
        "기존 메뉴얼 분석 및 시스템, DB 설계와 기존 데이터 migration 완료",
        "Authorize.net 모듈을 이용한 결제 시스템 구축",
        "개발 스펙&일정 조율을 위한 프로젝트 매니징과 커뮤니케이션",
      ],
    }, {
      title: "패밀리 사이트 유지보수",
      sub: "현재 운영 중인 웹사이트 및 이벤트 페이지 제작, 유지보수",
      env: ["PHP", "Laravel", "C#", "ASP.Net", "MSSQL", "MySQL", "IIS", "Windows Server", "GitLab", "Notion"],
      date: "2022.08 ~ 2024.10",
      desc: [
        "이슈 분석 및 해결 방안 모색",
        "신규 기능 도입 시 기존 시스템과 융화되도록 유지보수",
        "구글 광고 인덱싱 오류 및 가이드라인에 맞추어 개발, 수정",
      ],
    },
    , {
      title: "글로벌 배송 관리 시스템",
      sub: "배송 정보 및 송장 번호, 재고 상태 확인 및 상태 업데이트 관리",
      date: "2020.08 ~ 2022.05",
      env: ["PHP 7", "CodeIgnitor 3", "Java", "WDSL", "MSSQL", "Nginx", "Docker", "Linux", "Github", "Notion"],
      desc: [
        "Amazon japan, Yahoo, Rakuten, Qten API 분석 및 주문, 상품 저장 배치 제작",
        "내부 기록용 엑셀 및 물류 회사 포맷 파일 제작",
        "송장번호, 주문 상태 변경 등의 기능 개발",
        "Linked server를 사용한 쿼리 작업 수행",
        "Regex를 통한 고객 데이터 예외 처리 및 필터 제작",
      ]
    },
    {
      title: "세일즈 채널 관리 시스템",
      sub: "Rest API를 활용한 판매 채널의 상품, 주문 내역 수집 및 업데이트",
      date: "2021.04 ~ 2022.05",
      env: ["PHP 7", "CodeIgnitor3", "MSSQL", "Nginx", "Docker", "Linux", "Github", "Notion"],
      desc: [
        "판매량, 재고관리 등의 데이터 수집 및 통계 데이터 노출",
        "REST API를 통한 주문, 상품 CRUD 시스템 개발",
        "내부 inventory 시스템과 동기화하는 배치 제작",
        "판매 데이터 기반 통계 차트 생성 및 데이터 조작",
      ],
    },
    {
      title: "Shopify 쇼핑몰 revamp",
      sub: "Shopify 전용 store theme 제작 및 유지보수",
      date: "2020.01 ~ 2020.05",
      env: ["Shopify Liquid", "Javascript", "SCSS", "Trello", "Monday.com"],
      desc: [
        "Mockup image를 토대로 UI, UX 제작",
        "Zoho API를 이용한 FAQ 제작",
        "Screen Dimension에 맞는 SCSS 설계",
        "ScrollMagic js를 사용한 이벤트 랜딩 페이지 제작",
      ]
    },
    {
      title: "패밀리 사이트 유지보수",
      sub: "Shopify store 유지보수",
      date: "2019.09 ~ 2020.05",
      env: ["Shopify Liquid", "Javascript", "SCSS", "Trello", "Monday.com"],
      desc: [
        "담당자의 요청에 따른 신규 기능 설계 및 제작",
        "웹 페이지, Component 최적화 및 버그 수정",
      ]
    }, {
      title: "네트워크 데이터 누출 방지 시스템",
      sub: "저장된 데이터를 가공하여 사용자에게 데이터 제공",
      date: "2016.10 ~ 2018.02",
      env: ["Java 8", "Spring 4", "Postgresql", "MyBatis", "JSP", "Tomcat 8", "Linux", "GitLab", "Redmine"],
      desc: [
        "Lucene에서 인덱싱한 데이터를 오픈하여 읽거나 추출하는 기능",
        "검색 질의를 위한 상세 필터 시스템 제작",
        "수집된 데이터 통계 및 차트, 보고서 제작",
      ]
    }, {
      title: "SSL 복호화 시스템",
      sub: "GS 인증 1등급 획득",
      date: "2017.10 ~ 2018.02",
      env: ["Java 8", "Spring 5", "Postgresql", "Hibernate", "JPA", "Tomcat 8", "Linux", "GitLab"],
      desc: [
        "REST API를 기반으로 모듈과 데이터 상호교환",
        "사용자가 조작한 값을 모듈에게 전송하거나 차단한 기록을 읽어 결과 도출",
        "GS인증을 위한 SQL injection 공격 등의 예방 시스템 제작",
      ],
    }, {
      title: "사내 시스템 유지보수",
      date: "2017.10 ~ 2018.02",
      env: ["Java", "MSSQL", "JSP", "SVN", "Redmine"],
      desc: [
        "내부 시스템 유지보수 및 버그 수정",
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