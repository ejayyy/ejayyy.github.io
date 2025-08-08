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
      title: "주문 관리 시스템",
      sub: "내부 ERP 시스템의 MSA 전환",
      env: ["Java 8", "Spring 4", "Kotlin", "Springboot 3", "MySQL", "Docker"],
      desc: [
        "모놀리식 시스템의 확장성 한계 극복을 위한 MSA 구조 설계 및 파일럿 구축",
        "Jenkins 기반 CI/CD 도입 구상 및 코드 분리 전략 수립 주도",
        "레거시 코드 유지보수 체계화",
        "OpenAPI 기반 문서화",
      ],
    },
    {
      title: "고도몰 플랫폼 최적화",
      sub: "5개의 자사몰 관리",
      env: ["PHP", "고도몰", "MySQL", "jQuery", "HTML", "CSS"],
      desc: [
        "관리자 및 프로모션 페이지 기능 개선, REST API 연동",
        "데이터 관리 프로세스 템플릿화를 통한 자동화",
        "운영자와 퍼블리셔 간 협업 프로세스 표준화",
        "페이지 제작 일관성 향상",
      ],
    },
    {
      title: "학생 미술 공모전 플랫폼",
      sub: "매년 개최되는 공모전 접수 및 홍보 사이트",
      env: [
        "PHP",
        "Laravel",
        "Blade",
        "Vue.js",
        "Authorize.net",
        "MySQL",
        "Docker",
      ],
      desc: [
        "확장 가능한 아키텍처 설계 및 재사용 컴포넌트 활용",
        "대용량 이미지 처리 최적화, 큐 전송을 통한 업로드 속도 개선",
        "분할 결제 및 단체 할인 로직 구현",
        "데이터베이스 구조 설계 및 기존 데이터 마이그레이션 자동화",
      ],
    },
    {
      title: "실시간 티켓 예매 플랫폼",
      sub: "레거시 ASP 시스템의 Laravel 기반 구조 전환",
      env: ["PHP", "Laravel", "Vue.js", "MySQL", "Classic ASP.net", "Docker"],
      desc: [
        "전체 예매 프로세스 통합 시스템 개발",
        "실시간 좌석 관리 로직 구현 및 결제 모듈(Authorize.net) 구현",
        "반응형 모바일 페이지 신설 및 관리자 페이지 구축",
        "기존 데이터 분석 및 설계, 데이터 마이그레이션",
      ],
    },
    {
      title: "글로벌 배송 자동화 시스템",
      sub: "일본 판매 채널 관리",
      env: ["PHP 7", "CodeIgnitor 3", "Java WSDL", "MSSQL", "Docker"],
      desc: [
        "수동 처리로 인한 오배송 방지 및 업무 효율화",
        "Amazon japan, Yahoo, Rakuten 등 일본 이커머스 REST API 연동",
        "주문-송장–배송 동기화 배치 시스템 개발",
        "Linked Server 기반 쿼리 최적화",
      ],
    },
    {
      title: "판매 채널 통합 관리 시스템",
      sub: "Rest API를 활용한 판매 채널 통합 관리",
      env: ["PHP 7", "CodeIgnitor 3", "MSSQL", "Docker"],
      desc: [
        "REST API 기반 상품, 주문,재고 통합 시스템 개발",
        "데이터 실시간 동기화 도입",
        "판매량 통계 및 재고 현황 대시보드 제작",
        "데이터 일관성 95% 확보 및 의사결정 시간 단축",
      ],
    },
    {
      title: "자사 쇼핑몰 개편",
      sub: "개편되는 쇼핑몰 페이지 설계 및 제작",
      env: ["Liquid", "Javascript", "SCSS"],
      desc: [
        "Shopify 기반의 쇼핑몰 프론트엔드 전체 개편",
        "다양한 해상도에 최적화된 반응형 UI/UX 설계",
        "FAQ 기능 도입 및 개별 컴포넌트 최적화",
        "Shopify 테마 최적화",
      ],
    },
    {
      title: "네트워크 데이터 누출 방지 시스템",
      sub: "저장된 데이터를 가공하여 사용자에게 데이터 제공",
      env: [
        "Java 8",
        "Spring 4",
        "Postgresql",
        "Hibernate",
        "JPA",
        "MyBatis",
        "JSP",
      ],
      desc: [
        "자체 검색 엔진을 활용한 고급 검색 쿼리 시스템 구현",
        "데이터 기반 통계 및 보고서 시각화 대시보드 구현",
        "자동 발송을 위한 이메일 스케줄러 개발",
      ],
    },
    {
      title: "SSL 복호화 시스템",
      sub: "GS 인증 1등급 획득",
      env: ["Java 8", "Spring 5", "Postgresql", "Hibernate", "JPA"],
      desc: [
        "REST API 기반 보안 모듈 통신 구현",
        "SQL injection, XSS 공격 대응 및 보안 로직 제작",
        "모듈 로그 기록 및 차단 내역 모니터링 기능 개발",
      ],
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
