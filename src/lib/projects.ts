export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  readonly title: string;
  readonly subtitle?: string;
  readonly technologies: readonly string[];
  readonly description: readonly string[];
  readonly slug: string;
  readonly images?: readonly ProjectImage[];
  readonly challenges?: readonly string[];
  readonly solutions?: readonly string[];
  readonly results?: readonly string[];
}

export const projects: Project[] = [
  {
    title: "주문 관리 시스템",
    subtitle: "내부 ERP 시스템의 MSA 전환",
    technologies: [
      "Java 8",
      "Java 24",
      "Spring 4",
      "Springboot 3",
      "MySQL",
      "Docker",
      "Jenkins",
    ],
    description: [
      "모놀리식 시스템의 확장성 한계 극복을 위한 MSA 구조 설계 및 파일럿 구축",
      "도메인 주도 설계(DDD)를 적용하여 비즈니스 로직별 서비스 분리",
      "레거시 코드 유지보수 체계화 및 OpenAPI 기반 문서화 시스템 구축",
      "Jenkins 기반 CI/CD 도입 구상 및 코드 분리 전략 수립 주도",
    ],
    slug: "order-management",
    images: [
      {
        src: "/image/portfolio/order-management/architecture.jpg",
        alt: "MSA 아키텍처 다이어그램",
        caption: "모놀리식에서 MSA로의 전환 설계",
      },
      {
        src: "/image/portfolio/order-management/architecture2.png",
        alt: "시스템 구성도",
        caption: "마이크로서비스 간 통신 구조",
      },
    ],
    challenges: [
      "레거시 시스템과의 호환성 유지하면서 점진적 개선",
      "기존 개발팀의 MSA 패러다임 적응을 위한 교육 및 가이드라인 제공",
    ],
    solutions: [
      "Strangler Fig 패턴을 적용한 점진적 마이그레이션 전략 수립",
      "팀 내 MSA 베스트 프랙티스 문서화 및 코드 리뷰 프로세스 강화",
    ],
    results: [
      "서비스별 독립적인 개발 및 배포로 개발 생산성 향상",
      "신규 시스템 설계 도입",
      "시스템 안정성 확보",
    ],
  },
  {
    title: "고도몰 플랫폼 최적화",
    subtitle: "5개의 자사몰 관리",
    technologies: ["PHP", "고도몰", "MySQL", "jQuery", "HTML", "CSS"],
    description: [
      "관리자 및 프로모션 페이지 기능 개선",
      "반복되는 프로세스의 템플릿화",
      "운영자와 퍼블리셔 간 협업 프로세스 표준화",
      "REST API를 활용한 데이터 연동",
      "운영 가이드 문서화 및 협업 체계 구축",
    ],
    slug: "godomall",
    images: [
      {
        src: "/image/portfolio/godomall/dashboard.jpg",
        alt: "관리자 대시보드",
      },
    ],
    challenges: [
      "프로모션 페이지 제작 시 발생하는 중복 작업 및 일관성 부족",
      "각기 다른 설정과 커스터마이징이 적용된 5개 자사몰 관리",
      "운영팀과 개발팀 간의 커뮤니케이션 프로세스 개선 필요",
    ],
    solutions: [
      "운영 가이드 문서화 및 협업 체계 구축",
      "템플릿 기반 자동화 시스템 도입",
    ],
    results: [
      "업무 자동화",
      "운영 이슈 대응 속도 단축",
      "중복, 수동 업무 최소화",
    ],
  },
  {
    title: "학생 미술 공모전 플랫폼",
    subtitle: "매년 개최되는 공모전 접수 및 홍보 사이트",
    technologies: [
      "PHP",
      "Laravel",
      "Blade",
      "Vue.js",
      "Authorize.net",
      "MySQL",
      "Docker",
    ],
    description: [
      "확장 가능한 아키텍처 설계 및 재사용 컴포넌트 활용",
      "대용량 이미지 처리 최적화, 큐 전송을 통한 업로드 속도 개선",
      "Authorize.net 결제 게이트웨이 연동 및 분할 결제, 단체 할인 로직 구현",
      "데이터베이스 구조 설계 및 기존 데이터 마이그레이션 자동화",
    ],
    slug: "artcontest",
    challenges: [
      "학교별 단체 참가 및 할인 정책의 복잡한 비즈니스 로직 구현",
      "다양한 크기와 형식의 작품 이미지 최적화 및 저장",
    ],
    solutions: [
      "Intervention.io를 활용한 자동 이미지 리사이징 및 형식 변환",
      "큐 시스템을 통한 비동기 이미지 처리",
    ],
    results: ["모바일 웹 도입", "트래픽 3배 증가", "지원자 50% 증가"],
  },
  {
    title: "실시간 티켓 예매 플랫폼",
    subtitle: "레거시 ASP 시스템의 Laravel 기반 구조 전환",
    technologies: [
      "PHP",
      "Laravel",
      "Vue.js",
      "MySQL",
      "Classic ASP",
      "Docker",
    ],
    description: [
      "레거시 ASP 시스템의 Laravel 기반 구조 전환",
      "전체 예매 프로세스 통합 시스템 개발",
      "Authorize.net 결제 게이트웨이 연동 및 안전한 결제 프로세스 구축",
      "Vue.js를 활용한 직관적인 좌석 선택 인터페이스 개발",
      "데이터베이스 인덱싱 최적화 및 쿼리 성능 개선",
    ],
    slug: "ticket",
    challenges: [
      "동시 다발적인 좌석 예매 요청 처리 및 중복 예매 방지",
      "레거시 데이터베이스 구조의 정규화 및 최적화",
    ],
    solutions: ["데이터베이스 인덱싱 최적화 및 쿼리 성능 개선"],
    results: [
      "판매 페이지 신규 도입",
      "서드파티 레거시 제거",
      "매출 2000% 증가",
      "트래픽 200% 증가",
    ],
  },
  {
    title: "글로벌 배송 자동화 시스템",
    subtitle: "일본 판매 채널 관리",
    technologies: ["PHP 7", "CodeIgnitor 3", "Java WSDL", "MSSQL", "Docker"],
    description: [
      "수동 처리로 인한 오배송 방지 및 업무 효율화",
      "Amazon japan, Yahoo, Rakuten 등 일본 이커머스 REST API 연동",
      "주문-송장–배송 동기화 배치 시스템 개발",
      "재고 관리 시스템과의 연동을 통한 자동 출고 처리",
      "다국가 배송을 위한 관세 및 세금 계산 시스템 구현",
      "Linked Server 기반 쿼리 최적화",
    ],
    images: [
      {
        src: "/image/portfolio/global-shipping/orderList.jpg",
        alt: "주문 목록",
      },
    ],
    slug: "global-shipping",
    challenges: ["각기 다른 API 스펙을 가진 다수의 이커머스 플랫폼 연동"],
    results: [
      "데이터 처리 100% 자동화",
      "오배송률 50% 감소",
      "관세 이슈 90% 감소",
    ],
  },
  {
    title: "판매 채널 통합 관리 시스템",
    subtitle: "Rest API를 활용한 판매 채널 통합 관리",
    technologies: ["PHP 7", "CodeIgnitor 3", "MSSQL", "Docker"],
    description: [
      "REST API 기반 상품, 주문, 재고 통합 시스템 개발",
      "실시간 재고 동기화 도입",
      "자동화된 상품 정보 배포 시스템 구축",
      "채널별 매출 분석 및 성과 지표 시각화",
    ],
    images: [
      {
        src: "/image/portfolio/channel-integration/detail.jpg",
        alt: "상세보기",
      },
    ],
    slug: "channel-integration",
    challenges: ["대용량 상품 데이터의 효율적인 관리 및 검색"],
    results: [
      "채널 간 데이터 일관성 95% 달성",
      "주문 취소 30% 감소",
      "의사결정 시간 단축",
    ],
  },
  {
    title: "자사 쇼핑몰 개편",
    subtitle: "개편되는 쇼핑몰 페이지 설계 및 제작",
    technologies: ["Liquid", "Javascript", "SCSS"],
    description: [
      "사용자 경험 개선을 위한 전면적인 UI/UX 개편",
      "다양한 해상도에 최적화된 반응형 웹디자인 구현",
      "FAQ 기능 도입 및 개별 컴포넌트 최적화",
      "Shopify 테마 최적화",
    ],
    images: [
      {
        src: "/image/portfolio/shopify/cyrill.png",
        alt: "메인 페이지",
      },
      {
        src: "/image/portfolio/shopify/faq.png",
        alt: "Zoho FAQ API를 사용한 FAQ",
      },
    ],
    slug: "shopify",
    challenges: [
      "Shopify 플랫폼의 제약사항 내에서 커스터마이징 구현",
      "다양한 디바이스에서의 일관된 쇼핑 경험 제공",
    ],
    solutions: ["크로스 브라우저 테스팅 및 디바이스별 최적화 작업 수행"],
    results: [
      "페이지 로딩 속도 개선",
      "고객 응대 시간 30% 감소",
      "매출 30% 증가",
    ],
  },
  {
    title: "네트워크 데이터 누출 방지 시스템",
    subtitle: "저장된 데이터를 가공하여 사용자에게 데이터 제공",
    technologies: [
      "Java 8",
      "Spring 4",
      "Postgresql",
      "Hibernate",
      "JPA",
      "MyBatis",
      "JSP",
    ],
    description: [
      "자체 검색 엔진을 활용한 고급 검색 쿼리 시스템 구현",
      "데이터 기반 통계 및 보고서 시각화 대시보드 구현",
      "자동 발송을 위한 이메일 스케줄러 개발",
    ],
    slug: "sign",
    images: [
      {
        src: "/image/portfolio/sign/dashboard.jpg",
        alt: "대시보드",
      },
      {
        src: "/image/portfolio/sign/report.jpg",
        alt: "보고서",
      },
    ],
    results: ["솔루션 판매 30% 증가", "고객 만족도 20% 향상"],
  },
  {
    title: "SSL 복호화 시스템",
    subtitle: "GS 인증 1등급 획득",
    technologies: ["Java 8", "Spring 5", "Postgresql", "Hibernate", "JPA"],
    description: [
      "REST API 기반 보안 모듈 통신 구현",
      "SQL injection, XSS 공격 대응 및 보안 로직 제작",
      "모듈 로그 기록 및 차단 내역 모니터링 기능 개발",
    ],
    slug: "ssl-decryption",
    challenges: ["GS 인증 1등급 보안 요구사항 충족"],
    solutions: ["정부 보안 인증 기준에 맞는 보안 아키텍처 설계"],
    results: [
      "GS 인증 1등급 획득 (정부 보안 인증)",
      "보안 취약점 90% 이상 감소",
    ],
  },
];
