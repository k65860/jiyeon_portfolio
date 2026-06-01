export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tech: string[];
  roles: string[];
  problem: string;
  solution: string;
  result: string;
  github: string;
  service: string;
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    title: "Carebuddy",
    subtitle: "반려동물 질병 커뮤니티 서비스",
    period: "2024.04 - 2024.10",
    description:
      "반려동물 진료 기록을 작성하고, 유저들과 질병 정보를 공유할 수 있는 반려동물 질병 커뮤니티 서비스입니다.",
    tech: [
      "React",
      "TypeScript",
      "Recoil",
      "Axios",
      "React Router",
      "Styled-components",
      "Vercel",
    ],
    roles: [
      "프론트엔드 개발에 필요한 페이지명, 컴포넌트명, 기능명을 Notion에 문서화해 팀원들이 화면 구조와 구현 범위를 쉽게 파악할 수 있도록 정리",
      "전체 페이지 라우팅과 공통 레이아웃 구조 설계",
      "로고, 주요 페이지 이동 메뉴, 사용자 아이콘이 포함된 Header 구현",
      "페이지 성격에 따라 하위 메뉴를 보여주는 Secondary Header 구현",
      "Footer 구현 및 전체 서비스 공통 UI 흐름 정리",
      "마이페이지에서 로그인한 사용자 정보 조회 및 프로필 수정 기능 구현",
      "사용자 프로필 이미지, 닉네임, 소개글 수정 API 연동",
      "사용자 이탈 방지를 고려해 회원탈퇴 기능을 UX상 눈에 덜 띄는 위치에 배치",
      "로그인한 사용자의 반려동물 ID를 기반으로 등록된 반려동물 목록을 카드 형태로 조회",
      "반려동물 등록/수정 모달 구현 및 등록 버튼 클릭 시 API 요청 전송",
      "로그인한 사용자의 ID를 기반으로 작성 글 목록 조회",
      "작성 글에 대분류/소분류 정보를 표시하고, 제목 클릭 시 post.id 기반 상세 페이지로 이동하도록 useNavigate 적용",
      "데이터 요청 중에는 isLoading 상태를 활용해 로딩 UI를 표시하는 조건부 렌더링 구현",
    ],
    problem:
      "프론트엔드와 백엔드가 분리된 환경에서 API를 연동하는 과정에서 브라우저 CORS 정책으로 인해 요청이 차단되는 문제가 발생했습니다.",
    solution:
      "요청 주소, 허용 origin, credentials 설정 여부를 백엔드 팀과 함께 점검했습니다. 프론트엔드에서는 Axios 요청 경로와 API 호출 방식을 정리하고, 백엔드에서는 프론트엔드 배포 주소와 로컬 개발 주소를 허용하도록 CORS 설정을 수정했습니다.",
    result:
      "API 요청이 정상적으로 처리되면서 마이페이지의 사용자 정보 조회/수정, 반려동물 카드 조회 및 등록/수정, 사용자 작성 글 목록 조회 기능을 안정적으로 연결할 수 있었습니다.",
    github: "https://github.com/k65860/Carebuddy",
    service: "https://carebuddy.vercel.app/",
    images: [
      {
        src: "/images/projects/carebuddy-header.png",
        alt: "Carebuddy 공통 헤더와 드롭다운 메뉴 화면",
        caption: "공통 Header 및 Secondary Header",
      },
      {
        src: "/images/projects/carebuddy-mypage.png",
        alt: "Carebuddy 마이페이지 사용자 정보와 반려동물 카드 화면",
        caption: "마이페이지 사용자 정보 및 반려동물 카드",
      },
      {
        src: "/images/projects/carebuddy-profile-edit.png",
        alt: "Carebuddy 사용자 프로필 수정 화면",
        caption: "사용자 프로필 조회/수정",
      },
      {
        src: "/images/projects/carebuddy-pet-create.png",
        alt: "Carebuddy 반려동물 등록 모달 화면",
        caption: "반려동물 등록 모달",
      },
      {
        src: "/images/projects/carebuddy-pet-edit.png",
        alt: "Carebuddy 반려동물 수정 모달 화면",
        caption: "반려동물 정보 수정 모달",
      },
      {
        src: "/images/projects/carebuddy-detail.png",
        alt: "Carebuddy 게시글 상세 화면",
        caption: "게시글 상세 페이지",
      },
    ],
  },
  {
    title: "Playmap",
    subtitle: "아이 기질 기반 놀이활동 추천 서비스",
    period: "2025.05 - 2025.06",
    description:
      "아이의 기질 분석 결과와 기록자가 선택한 놀이 키워드의 교집합을 통해 맞춤형 놀이활동을 추천하는 서비스입니다.",
    tech: [
      "React",
      "TypeScript",
      "Axios",
      "react-calendar",
      "Styled-components",
    ],
    roles: [
      "기존 기업 서비스 구조 분석",
      "신규 기능 요구사항 명세화",
      "Figma 기반 화면 흐름 및 바텀시트 모달 프로토타입 제작",
      "react-calendar 기반 놀이활동 기록 캘린더 구현",
      "키워드 선택, 추천 활동 표시, 기록 저장 API 연동 흐름 구현",
    ],
    problem:
      "사용자가 월별 캘린더에서 어떤 날짜에 놀이활동 기록이 있는지 바로 파악하기 어려웠습니다.",
    solution:
      "react-calendar의 날짜 타일 렌더링 방식을 활용해 기록이 존재하는 날짜에 표시점을 추가했습니다.",
    result:
      "날짜 선택 전에도 기록 여부를 확인할 수 있어 활동 기록 탐색 흐름이 직관적으로 개선되었습니다.",
    github: "https://github.com/PlayguideP/frontend",
    service: "",
  },
];
