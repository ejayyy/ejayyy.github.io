import React from "react";
import { Metadata } from "next";
import { mergeKeywords } from "@/lib/metadata-utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "웹 개발 프로젝트 포트폴리오 - PHP, Laravel, Vue.js, Java, Spring을 활용한 다양한 프로젝트 경험",
  keywords: mergeKeywords([
    "portfolio",
    "web development",
    "PHP",
    "Laravel",
    "Vue.js",
    "Java",
    "Spring",
    "프로젝트",
    "포트폴리오",
  ]),
  openGraph: {
    title: "Portfolio",
    description:
      "웹 개발 프로젝트 포트폴리오 - PHP, Laravel, Vue.js, Java, Spring을 활용한 다양한 프로젝트 경험",
    type: "website",
  },
};

interface Project {
  title: string;
  sub?: string;
  env: string[];
  desc: string[];
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "학생 미술 공모전",
      sub: "매년 개최되는 공모전 접수 및 홍보 사이트",
      env: ["PHP", "Laravel", "Vue.js", "MySQL", "Docker"],
      desc: [
        "프로젝트 기획부터 프로덕션 런칭까지 전 과정 담당",
        "메인 사이트와 사이트 컨텐츠 조작을 위한 내부 관리자 페이지 제작",
        "제휴 할인과 단체 할인, 부분 결제 등의 예외처리를 통한 결제 시스템 구축",
        "큰 이미지 thumbnail 처리 및 component 재사용으로 웹사이트 최적화",
        "담당자와의 협업을 통한 데이터 설계 및 가공을 통한 데이터 최적화",
        "담당자와 시스템 방향 설정 및 조율을 통한 일정 관리",
      ],
    },
    {
      title: "티켓 판매 시스템",
      sub: "이벤트 관리 및 좌석 입력, 주문 등의 관리자, 판매 페이지",
      env: ["PHP", "Laravel", "Vue.js", "MySQL", "Docker"],
      desc: [
        "좌석 선택 및 홀드 기능 추가 및 선점 좌석 자동 해제 구현",
        "주문 수정, 취소 등의 변경과 판매 데이터, 좌석 수정 등의 기능 제작",
        "Authorize.net SDK를 이용한 결제 시스템 구축",
        "기존 시스템 분석 및 데이터 구조 설계와 기존 데이터 migration 완료",
        "일정 조율을 위한 프로젝트 매니징과 커뮤니케이션",
      ],
    },
    {
      title: "패밀리 사이트 유지보수",
      sub: "운영 중인 웹사이트 및 이벤트 페이지 제작, 유지보수",
      env: ["C#", "ASP.Net", "PHP", "Laravel", "MSSQL", "MySQL"],
      desc: [
        "이슈 분석 및 해결 방안 모색",
        "신규 기능 도입 시 기존 시스템과 융화되도록 유지보수",
        "구글 광고 인덱싱 오류 및 가이드라인에 맞추어 개발, 수정",
      ],
    },
    {
      title: "글로벌 배송 관리 시스템",
      sub: "일본 판매 채널 관리",
      env: ["PHP", "CodeIgnitor", "Java", "MSSQL", "Docker"],
      desc: [
        "Amazon japan, Yahoo, Rakuten, Qten API 분석 및 데이터 저장 배치 제작",
        "송장번호, 주문 상태 변경 등의 기능 개발",
        "내부 기록용 엑셀 및 물류 회사 포맷 파일 제작",
        "Regex를 통한 고객 데이터 예외 처리 및 필터 시스템 개발",
        "Linked server를 사용한 쿼리 작업 수행",
      ],
    },
    {
      title: "세일즈 채널 관리 시스템",
      sub: "Rest API를 활용한 판매 채널 관리",
      env: ["PHP", "CodeIgnitor", "MSSQL", "Docker"],
      desc: [
        "판매량 및 재고관리 등의 데이터 수집과 통계 처리 구현",
        "판매 데이터 기반 통계 차트 생성 및 데이터 조작",
        "내부 인벤토리 시스템과 동기화하는 배치 제작",
        "Rest API를 활용한 판매 채널의 상품, 주문 개발",
      ],
    },
    {
      title: "Shopify storefront 개편",
      sub: "신규 홈페이지 설계 및 제작",
      env: ["Liquid", "Javascript", "SCSS"],
      desc: [
        "다양한 디바이스와 해상도에 최적화된 반응형 UI 구현",
        "Mockup image를 토대로 UI, UX 제작",
        "사용자 중심의 화면 설계 및 개선",
        "Zoho API를 이용한 FAQ 제작",
        "개별 컴포넌트 최적화 및 버그 수정",
      ],
    },
    {
      title: "패밀리 사이트 유지보수",
      sub: "Shopify store 유지보수",
      env: ["Liquid", "Javascript", "SCSS"],
      desc: [
        "담당자의 요청에 따른 신규 기능 설계 및 제작",
        "ScrollMagic js를 사용한 이벤트 랜딩 페이지 제작",
        "웹 페이지, Component 최적화 및 버그 수정",
      ],
    },
    {
      title: "네트워크 데이터 누출 방지 시스템",
      sub: "저장된 데이터를 가공하여 사용자에게 데이터 제공",
      env: ["Java", "Spring", "Postgresql", "MyBatis", "JSP"],
      desc: [
        "인덱싱된 데이터의 압축 해제, 읽기 및 추출 기능 개발",
        "데이터 검색을 위한 상세 필터 시스템 구현",
        "수집된 데이터 기반 통계, 차트 및 보고서 생성",
        "자동 발송을 위한 이메일 스케줄러 개발",
      ],
    },
    {
      title: "SSL 복호화 시스템",
      sub: "GS 인증 1등급 획득",
      env: ["Java", "Spring", "Postgresql", "Hibernate", "JPA"],
      desc: [
        "네트워크 모듈과 REST API를 활용한 데이터 연동",
        "모듈 로그 기록 및 차단 내역 모니터링 기능 개발",
        "SQL Injection 등 보안 취약점 방지 기능 추가",
        "데이터 전송 및 처리 과정에서의 보안 강화 적용",
      ],
    },
    {
      title: "사내 시스템 유지보수",
      env: ["Java", "MSSQL", "JSP", "SVN"],
      desc: ["내부 시스템 유지보수 및 버그 수정"],
    },
  ];

  return (
    <>
      <h1 className="text-center">포트폴리오</h1>
      <section>
        <ol className="space-y-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className={
                index !== projects.length - 1
                  ? "border-b border-gray-200 dark:border-gray-700 pb-6"
                  : ""
              }
            >
              <h3 className="mb-0">{project.title}</h3>
              {project.sub && <small className="text-sm">{project.sub}</small>}
              <div className="flex items-center gap-2 flex-wrap font-medium text-sm text-white my-2 font-(family-name:--font-source-code-pro)">
                {project.env.map((env, envIndex) => (
                  <span
                    key={envIndex}
                    className="bg-neutral-500 dark:bg-neutral-600 p-2 rounded-lg leading-none"
                  >
                    {env}
                  </span>
                ))}
              </div>
              <ul>
                {project.desc.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
