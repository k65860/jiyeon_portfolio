"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  SiAxios,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: ReactNode;
  desc: string;
  color: string;
};

type ProjectImage = {
  src: string;
  caption: string;
  device: "desktop" | "mobile";
};

type Trouble = {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
};

type FeatureGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tech: string[];
  roles: string[];
  flow: string[];
  featureGroups?: FeatureGroup[];
  images: ProjectImage[];
  troubles: Trouble[];
  github: string;
  service?: string;
  status?: string;
};

type ImageModalState = {
  projectTitle: string;
  images: ProjectImage[];
  currentIndex: number;
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const sectionBase = "min-h-[100svh] px-5 py-20 md:py-24 flex items-center";

const projects: Project[] = [
  {
    title: "Carebuddy",
    subtitle: "반려동물 질병 커뮤니티 서비스",
    period: "2024.04 - 2024.10",
    description:
      "반려동물 진료 기록을 작성하고 유저들과 질병 정보를 공유할 수 있는 커뮤니티 서비스입니다.",
    tech: [
      "React",
      "TypeScript",
      "Recoil",
      "Axios",
      "React Router",
      "Styled-components",
    ],
    roles: [
      "Notion 기반 페이지명·컴포넌트명·기능명 문서화로 프론트엔드 구현 범위 정리",
      "Header, Secondary Header를 포함한 공통 레이아웃과 전체 페이지 라우팅 구조 설계",
      "마이페이지, 반려동물 카드, 작성 글 목록의 API 연동과 상태 갱신 흐름 구현",
    ],
    flow: [
      "로그인 → 사용자 정보 조회 → 마이페이지 기본값 반영",
      "프로필 수정 → PUT 요청 → 응답값 기준 화면 상태 갱신",
      "반려동물 카드 생성/수정/삭제 → 카드 목록 반영",
      "작성 글 목록 조회 → 게시글 상세 확인",
    ],
    featureGroups: [
      {
        title: "공통 레이아웃 및 라우팅",
        items: [
          "전체 페이지 라우팅 구조 설계",
          "로고, 주요 페이지 이동 메뉴, 사용자 아이콘이 포함된 Header 구현",
          "페이지별 카테고리와 현재 페이지명을 표시하는 Secondary Header 구현",
        ],
      },
      {
        title: "마이페이지 사용자 정보 관리",
        items: [
          "로그인한 사용자 정보를 조회하여 프로필 이미지, 닉네임, 소개글을 화면에 렌더링",
          "프로필 수정 API를 연동하고, 수정 완료 후 서버 응답값을 기준으로 화면 상태 갱신",
          "새로고침 없이 변경 결과가 반영되도록 전역 상태와 로컬 상태를 함께 관리",
          "회원탈퇴 기능은 사용자 이탈 방지를 고려해 주요 동선에서 벗어난 위치에 배치",
        ],
      },
      {
        title: "반려동물 카드 CRUD",
        items: [
          "로그인한 사용자의 반려동물 ID를 기반으로 등록된 반려동물 목록 조회",
          "반려동물 정보를 카드 UI로 렌더링",
          "반려동물 등록/수정 모달 구현",
          "등록 및 수정 버튼 클릭 시 API 요청을 전송하고, 응답 결과에 따라 목록 상태 갱신",
        ],
      },
      {
        title: "작성 글 목록 조회",
        items: [
          "로그인한 사용자 ID를 기반으로 작성 글 목록 조회",
          "작성 글에 대분류·소분류 정보를 함께 표시",
          "제목 클릭 시 useNavigate를 활용해 post.id 기반 상세 페이지로 이동",
          "데이터 요청 중 isLoading 상태를 활용해 로딩 UI를 조건부 렌더링",
        ],
      },
    ],
    images: [
      {
        src: "/projects/carebuddy/carebuddy-01.png",
        caption:
          "마이페이지 전체 구조: 사용자 정보 조회/수정, 반려동물 카드, 작성 글 목록 관리",
        device: "desktop",
      },
      {
        src: "/projects/carebuddy/carebuddy-02.png",
        caption: "반려동물 카드와 사용자 작성 글 목록 UI",
        device: "desktop",
      },
      {
        src: "/projects/carebuddy/carebuddy-03.png",
        caption: "반려동물 등록 모달 상단: 프로필 이미지, 이름, 성별, 종 입력",
        device: "desktop",
      },
      {
        src: "/projects/carebuddy/carebuddy-04.png",
        caption:
          "반려동물 등록 모달 하단: 나이, 중성화 여부, 체중 입력 및 등록 요청",
        device: "desktop",
      },
    ],
    troubles: [
      {
        title: "CORS 이슈 해결",
        problem:
          "프론트엔드와 백엔드가 분리된 환경에서 API를 연동하는 과정 중, 브라우저 CORS 정책으로 인해 마이페이지 관련 요청이 차단되었습니다.",
        cause:
          "프론트엔드 배포 주소와 로컬 개발 주소가 백엔드 CORS 허용 origin에 포함되어 있지 않았고, 요청 방식과 credentials 설정 여부도 함께 확인이 필요한 상황이었습니다.",
        solution:
          "백엔드 팀과 함께 요청 주소, 허용 origin, credentials 설정 여부를 점검했습니다. 프론트엔드에서는 Axios 요청 경로와 API 호출 방식을 정리했고, 백엔드에서는 프론트엔드 배포 주소와 로컬 개발 주소를 허용하도록 CORS 설정을 수정했습니다.",
        result:
          "API 요청이 정상적으로 처리되면서 마이페이지 사용자 정보 조회/수정, 반려동물 카드 조회/등록/수정, 사용자 작성 글 목록 조회 기능을 안정적으로 연결할 수 있었습니다.",
      },
      {
        title: "사용자 정보 상태 관리 구조화",
        problem:
          "로그인 이후 마이페이지와 유저페이지 등 여러 화면에서 동일한 사용자 정보가 필요했습니다.",
        cause:
          "각 페이지에서 사용자 정보를 개별 호출하면 중복 요청이 발생하고, 프로필 수정 이후 화면마다 데이터가 다르게 보일 수 있었습니다.",
        solution:
          "로그인 사용자 정보를 전역 상태로 관리하고, 프로필 수정 완료 후 서버 응답값을 기준으로 전역 상태와 로컬 입력 상태를 함께 갱신했습니다.",
        result:
          "사용자 정보 조회 로직이 단순해졌고, 새로고침 없이 수정 결과가 화면에 반영되도록 상태 흐름을 일관되게 관리할 수 있었습니다.",
      },
    ],
    github: "https://github.com/k65860/Carebuddy",
    service: "https://carebuddy.vercel.app/",
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
      "신규 기능 요구사항을 페이지/API 기준으로 명세화",
      "Figma 기반 화면 흐름 및 바텀시트 모달 프로토타입 제작",
      "react-calendar 기반 월별 활동 기록 캘린더 구현",
      "키워드 선택 → 추천 활동 표시 → 기록 저장까지 연결된 사용자 흐름 구현",
    ],
    flow: [
      "월별 캘린더 확인 → 기록 있는 날짜 표시점 확인",
      "날짜 선택 → 활동 기록 목록 확인",
      "추가 버튼 클릭 → 바텀시트 모달 오픈",
      "키워드 단계별 선택 → 선택 키워드 요약 → 추천 활동 표시",
      "활동 내용 입력 → 저장 API 연동",
    ],
    images: [
      {
        src: "/projects/playmap/playmap-01.png",
        caption: "월별 캘린더와 날짜별 활동 기록 목록",
        device: "mobile",
      },
      {
        src: "/projects/playmap/playmap-03.png",
        caption: "기록 생성용 바텀시트 모달 UI",
        device: "mobile",
      },
      {
        src: "/projects/playmap/playmap-04.png",
        caption: "단계별 키워드 선택, 선택 키워드 요약, 추천 활동 표시",
        device: "mobile",
      },
    ],
    troubles: [
      {
        title: "월별 캘린더에서 기록 여부를 바로 알기 어려운 문제",
        problem:
          "사용자가 날짜를 눌러보기 전까지는 어떤 날짜에 기록이 있는지 알기 어려웠습니다.",
        cause:
          "기록 존재 여부가 월별 캘린더 화면에서 즉시 드러나지 않아 탐색 비용이 컸습니다.",
        solution:
          "react-calendar의 날짜 타일 렌더링 방식을 활용해 기록이 존재하는 날짜에 표시점을 추가했습니다.",
        result:
          "사용자는 날짜 선택 전에 기록 여부를 파악할 수 있게 되었고, 활동 기록 탐색 흐름이 더 직관적으로 개선되었습니다.",
      },
      {
        title: "키워드 선택과 추천 활동 연결 문제",
        problem:
          "날짜, 키워드, 피드백, 추천 활동 정보가 서로 연결되어 있어 선택 상태가 추천 결과와 저장 API까지 이어져야 했습니다.",
        cause:
          "화면에 보여줄 키워드명과 API에 전달할 키워드 ID를 명확히 분리하지 않으면 추천 표시와 저장 요청이 어긋날 수 있었습니다.",
        solution:
          "선택된 키워드 ID와 화면 표시용 키워드명을 분리해 관리하고, 선택된 키워드를 기준으로 추천 활동을 찾아 표시하도록 구성했습니다.",
        result:
          "사용자는 하나의 모달 흐름 안에서 키워드 선택, 추천 활동 확인, 기록 저장까지 자연스럽게 진행할 수 있게 되었습니다.",
      },
    ],
    github: "https://github.com/k65860/playmap",
    status: "기업 협업 프로젝트 · 현재 배포 종료",
  },
];

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact />,
    desc: "컴포넌트 기반 UI 구현",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    desc: "Props, State, API 응답 타입 정의",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    desc: "이벤트 처리와 조건부 렌더링",
    color: "#F7DF1E",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    desc: "포트폴리오 웹 구현",
    color: "#000000",
  },
  {
    name: "Styled-components",
    icon: <SiStyledcomponents />,
    desc: "재사용 가능한 스타일 컴포넌트",
    color: "#DB7093",
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    desc: "GET/POST/PUT/DELETE API 연동",
    color: "#5A29E4",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    desc: "API 요청 및 응답 테스트",
    color: "#FF6C37",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    desc: "브랜치 기반 협업 및 코드 관리",
    color: "#181717",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    desc: "화면 흐름과 프로토타입 제작",
    color: "#F24E1E",
  },
  {
    name: "Notion",
    icon: <SiNotion />,
    desc: "기능 명세서와 협업 문서 정리",
    color: "#000000",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    desc: "프론트엔드 배포 경험",
    color: "#000000",
  },
];

const experiences = [
  {
    title: "삼육대학교 멋쟁이사자처럼 부원 및 운영진",
    date: "2021.03 - 2022.12",
  },
  {
    title: "멋쟁이사자처럼 해커톤 참가",
    date: "2022.08",
  },
  {
    title: "SW 중심대학 해커톤 참가",
    date: "2023.06",
  },
  {
    title: "엘리스트랙 부트캠프 수료",
    date: "2023.12 - 2024.04",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden scroll-smooth bg-[#FFF8F4] text-[#2F2A28]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-40px)] max-w-6xl -translate-x-1/2 rounded-full border border-[#FFE8CD] bg-white/75 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-black tracking-tight">
          Jiyeon Kim
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#6F625C] md:flex">
          <a className="transition hover:text-[#2F2A28]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#2F2A28]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#2F2A28]" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-[#2F2A28]" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] px-5 pb-16 pt-28">
      <div className="absolute left-[-140px] top-10 h-96 w-96 rounded-full bg-[#FFDCDC] blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#FFE8CD] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-176px)] max-w-6xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 inline-flex rounded-full border border-[#FFE8CD] bg-white/70 px-4 py-2 text-sm font-black text-[#D88F73] shadow-sm">
            Frontend Developer
          </p>

          <h1 className="break-keep text-5xl font-black leading-[1.14] tracking-[-0.055em] text-[#2F2A28] md:text-[64px]">
            사용자 흐름을 설계하는
            <br />
            프론트엔드 개발자
            <br />
            <span className="bg-gradient-to-r from-[#D88F73] to-[#C46A8A] bg-clip-text text-transparent">
              김지연입니다.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl break-keep text-lg leading-8 text-[#6F625C]">
            React와 TypeScript를 기반으로 사용자 입력, 상태 관리, API 연동
            흐름을 구현하며 사용자가 자연스럽게 서비스를 이용할 수 있는 화면을
            만듭니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFD2B5] px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              프로젝트 보기 <FiArrowRight />
            </a>

            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#FFE8CD] bg-white/75 px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              GitHub <FiGithub />
            </a>

            <a
              href="https://velog.io/@k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#FFE8CD] bg-white/75 px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              Velog <FiExternalLink />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="rounded-[2.4rem] border border-[#FFE8CD] bg-white/80 p-[10px] shadow-[0_28px_90px_rgba(123,83,60,0.14)] backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#FFE8CD]">
              <Image
                src="/profile.jpeg"
                alt="김지연 프로필 사진"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F2A28]/70 via-[#2F2A28]/20 to-transparent px-6 pb-6 pt-24 text-white">
                <h2 className="text-3xl font-black tracking-[-0.04em]">
                  김지연
                </h2>
                <p className="mt-1 text-sm font-bold text-white/85">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const aboutCards = [
    {
      number: "01",
      title: "기록하며 성장합니다",
      desc: "학습한 내용을 블로그에 정리하고 프로젝트 회고를 남기며 배운 내용을 내 것으로 만듭니다.",
    },
    {
      number: "02",
      title: "사용자 흐름을 중요하게 생각합니다",
      desc: "로그인, 정보 수정, 기록 작성, 추천 결과 확인처럼 사용자가 실제로 거치는 흐름을 기준으로 UI를 구현합니다.",
    },
    {
      number: "03",
      title: "협업 가능한 구조를 만듭니다",
      desc: "페이지 명세서, API 명세서, Figma 프로토타입을 활용해 팀원들이 구현 범위를 명확히 이해할 수 있도록 정리합니다.",
    },
  ];

  return (
    <section id="about" className={sectionBase}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="배운 것을 기록하고 사용자 흐름으로 연결합니다."
          desc="프론트엔드 개발자로서 화면을 단순히 만드는 것보다 사용자가 서비스를 이용하는 과정이 자연스럽게 이어지는지 고민합니다."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutCards.map((card) => (
            <motion.article
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-[#FFE8CD] bg-white/70 p-7 shadow-sm backdrop-blur-md"
            >
              <span className="text-sm font-black text-[#D88F73]">
                {card.number}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#2F2A28]">
                {card.title}
              </h3>
              <p className="mt-4 break-keep leading-7 text-[#6F625C]">
                {card.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [imageModal, setImageModal] = useState<ImageModalState | null>(null);

  const openImageModal = (
    projectTitle: string,
    images: ProjectImage[],
    currentIndex: number,
  ) => {
    setImageModal({
      projectTitle,
      images,
      currentIndex,
    });
  };

  const closeImageModal = () => {
    setImageModal(null);
  };

  const showPrevImage = () => {
    setImageModal((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        currentIndex:
          prev.currentIndex === 0
            ? prev.images.length - 1
            : prev.currentIndex - 1,
      };
    });
  };

  const showNextImage = () => {
    setImageModal((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        currentIndex:
          prev.currentIndex === prev.images.length - 1
            ? 0
            : prev.currentIndex + 1,
      };
    });
  };

  return (
    <section
      id="projects"
      className="relative min-h-[100svh] bg-white/45 px-5 py-20 md:py-24"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#FFDCDC]/70 blur-3xl" />
      <div className="absolute right-[-140px] top-[520px] h-80 w-80 rounded-full bg-[#DDF3FF]/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="사용자 흐름을 설계한 프로젝트"
          desc="실제 화면, 구현 포인트, 문제 해결 과정을 중심으로 정리했습니다."
        />

        <div className="mt-12 space-y-16">
          {projects.map((project, index) => {
            const hasMobileImage = project.images.some(
              (image) => image.device === "mobile",
            );

            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2.5rem] border border-[#FFE8CD] bg-white/80 shadow-[0_28px_90px_rgba(123,83,60,0.09)] backdrop-blur-md"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-[#FFE8CD] bg-gradient-to-br from-[#FFDCDC] via-[#FFF8F4] to-[#FFE8CD] p-8 md:p-10 lg:border-b-0 lg:border-r">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D88F73]">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <div className="mt-6 flex items-start gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border border-[#FFE8CD] bg-white/80 text-3xl shadow-sm">
                        {project.title === "Carebuddy" ? "🐾" : "👶🏻"}
                      </div>

                      <div>
                        <h3 className="text-4xl font-black tracking-[-0.04em] text-[#2F2A28] md:text-5xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 break-keep text-lg font-bold text-[#6F625C]">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/75 px-4 py-2 text-xs font-black text-[#9A8175]">
                        {project.period}
                      </span>

                      {project.status && (
                        <span className="rounded-full bg-[#2F2A28]/85 px-4 py-2 text-xs font-bold text-white">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="mt-7 break-keep leading-8 text-[#6F625C]">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/70 px-3.5 py-2 text-xs font-black text-[#6F625C] shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                      {project.service && (
                        <a
                          href={project.service}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#2F2A28] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
                        >
                          Service <FiExternalLink />
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-bold text-[#2F2A28] shadow-sm transition hover:-translate-y-1"
                      >
                        GitHub <FiGithub />
                      </a>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFF8F4] text-[#D88F73]">
                        ✦
                      </span>
                      <h4 className="text-xl font-black tracking-[-0.02em] text-[#2F2A28]">
                        역할 요약
                      </h4>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {project.roles.map((role, roleIndex) => (
                        <div
                          key={role}
                          className="flex items-start gap-4 rounded-[1.25rem] border border-[#FFE8CD] bg-[#FFF8F4]/80 px-4 py-4"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#D88F73] shadow-sm">
                            {roleIndex + 1}
                          </span>
                          <p className="break-keep text-sm font-bold leading-6 text-[#6F625C]">
                            {role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {project.flow.length > 0 && (
                  <div className="border-t border-[#FFE8CD] bg-[#FFF8F4]/70 px-8 py-6 md:px-10">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                      <p className="shrink-0 pt-2 text-sm font-black text-[#2F2A28]">
                        사용자 흐름
                      </p>

                      <div className="grid flex-1 gap-3 md:grid-cols-2">
                        {project.flow.map((flow, flowIndex) => (
                          <div
                            key={flow}
                            className="flex gap-3 rounded-2xl border border-[#FFE8CD] bg-white/80 px-4 py-3"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D88F73] text-xs font-black text-white">
                              {flowIndex + 1}
                            </span>
                            <p className="break-keep text-sm font-bold leading-6 text-[#6F625C]">
                              {flow}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="border-t border-[#FFE8CD] p-8 md:p-10">
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D88F73]">
                        Screens
                      </p>
                      <h4 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#2F2A28]">
                        주요 화면
                      </h4>
                    </div>

                    <p className="hidden text-sm font-bold text-[#9A8175] md:block">
                      {hasMobileImage ? "Mobile UI" : "Desktop UI"}
                    </p>
                  </div>

                  <div
                    className={
                      hasMobileImage
                        ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid gap-5 md:grid-cols-2"
                    }
                  >
                    {project.images.map((image, imageIndex) => (
                      <ProjectImageCard
                        key={image.src}
                        image={image}
                        onClick={() =>
                          openImageModal(
                            project.title,
                            project.images,
                            imageIndex,
                          )
                        }
                      />
                    ))}
                  </div>
                </div>

                {project.featureGroups && (
                  <div className="border-t border-[#FFE8CD] bg-white p-8 md:p-10">
                    <div className="mb-6">
                      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D88F73]">
                        Implementation
                      </p>
                      <h4 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#2F2A28]">
                        주요 구현 기능
                      </h4>
                      <p className="mt-3 break-keep text-sm leading-6 text-[#9A8175]">
                        기능을 화면 구조, 사용자 상태, API 연동 흐름 기준으로
                        나누어 정리했습니다.
                      </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                      {project.featureGroups.map((group, groupIndex) => (
                        <FeatureGroupCard
                          key={group.title}
                          group={group}
                          index={groupIndex}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-[#FFE8CD] bg-[#FFF8F4]/50 p-8 md:p-10">
                  <div className="mb-6">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D88F73]">
                      Trouble Shooting
                    </p>
                    <h4 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#2F2A28]">
                      문제 해결 경험
                    </h4>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-2">
                    {project.troubles.map((trouble) => (
                      <TroubleBox key={trouble.title} trouble={trouble} />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {imageModal && (
        <ImageModal
          modal={imageModal}
          onClose={closeImageModal}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </section>
  );
}

function FeatureGroupCard({
  group,
  index,
}: {
  group: FeatureGroup;
  index: number;
}) {
  return (
    <article className="rounded-[1.7rem] border border-[#FFE8CD] bg-[#FFF8F4]/70 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#D88F73] shadow-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h5 className="break-keep text-lg font-black tracking-[-0.02em] text-[#2F2A28]">
            {group.title}
          </h5>

          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D88F73]" />
                <p className="break-keep text-sm font-bold leading-6 text-[#6F625C]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectImageCard({
  image,
  onClick,
}: {
  image: ProjectImage;
  onClick: () => void;
}) {
  const isMobile = image.device === "mobile";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group m-0 w-full cursor-pointer overflow-hidden rounded-[1.7rem] border border-[#FFE8CD] bg-white/85 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(123,83,60,0.1)]"
      aria-label={`${image.caption} 크게 보기`}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-[#FFE8CD] bg-[#FFF8F4] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFDCDC]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFE8CD]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#DDF3FF]" />

        <span className="ml-auto text-xs font-bold text-[#D88F73] opacity-0 transition group-hover:opacity-100">
          클릭해서 크게 보기
        </span>
      </div>

      <div
        className={[
          "relative w-full overflow-hidden bg-white",
          isMobile ? "aspect-[9/16]" : "aspect-[16/9]",
        ].join(" ")}
      >
        <Image
          src={image.src}
          alt={image.caption}
          fill
          sizes={
            isMobile
              ? "(max-width: 768px) 100vw, 33vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-[#2F2A28]/0 opacity-0 transition group-hover:bg-[#2F2A28]/20 group-hover:opacity-100">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#2F2A28] shadow-sm">
            크게 보기
          </span>
        </div>
      </div>

      <div className="min-h-[108px] border-t border-[#FFE8CD] bg-white px-5 py-4">
        <h5 className="break-keep text-base font-black tracking-[-0.02em] text-[#2F2A28]">
          {image.caption.split(":")[0]}
        </h5>
        <p className="mt-2 break-keep text-sm leading-6 text-[#6F625C]">
          {image.caption}
        </p>
      </div>
    </button>
  );
}

function ImageModal({
  modal,
  onClose,
  onPrev,
  onNext,
}: {
  modal: ImageModalState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const currentImage = modal.images[modal.currentIndex];
  const isMobile = currentImage.device === "mobile";
  const hasMultipleImages = modal.images.length > 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2F2A28]/70 px-5 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={[
          "relative max-h-[90vh] w-full overflow-hidden rounded-[2rem] border border-[#FFE8CD] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]",
          isMobile ? "max-w-md" : "max-w-6xl",
        ].join(" ")}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#FFE8CD] bg-[#FFF8F4] px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D88F73]">
              {modal.projectTitle} Preview
            </p>
            <h4 className="mt-1 break-keep text-lg font-black text-[#2F2A28]">
              {currentImage.caption.split(":")[0]}
            </h4>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-[#2F2A28] shadow-sm transition hover:bg-[#FFDCDC]"
            aria-label="이미지 모달 닫기"
          >
            ×
          </button>
        </div>

        <div className="relative max-h-[78vh] overflow-auto bg-white p-4">
          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#2F2A28] shadow-md transition hover:bg-[#FFDCDC]"
                aria-label="이전 이미지 보기"
              >
                <FiChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={onNext}
                className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#2F2A28] shadow-md transition hover:bg-[#FFDCDC]"
                aria-label="다음 이미지 보기"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className={[
              "relative mx-auto overflow-hidden rounded-[1.3rem] bg-[#FFF8F4]",
              isMobile
                ? "h-[76vh] max-h-[760px] w-full"
                : "aspect-[16/10] w-full",
            ].join(" ")}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="break-keep text-center text-sm font-bold leading-6 text-[#6F625C]">
              {currentImage.caption}
            </p>

            {hasMultipleImages && (
              <div className="flex items-center gap-2">
                {modal.images.map((image, index) => (
                  <span
                    key={image.src}
                    className={[
                      "h-2.5 rounded-full transition-all",
                      index === modal.currentIndex
                        ? "w-7 bg-[#D88F73]"
                        : "w-2.5 bg-[#FFE8CD]",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}

            {hasMultipleImages && (
              <p className="text-xs font-bold text-[#9A8175]">
                {modal.currentIndex + 1} / {modal.images.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TroubleBox({ trouble }: { trouble: Trouble }) {
  return (
    <div className="rounded-[1.7rem] border border-[#FFE8CD] bg-white/85 p-6 shadow-sm">
      <h5 className="break-keep text-xl font-black tracking-[-0.03em] text-[#2F2A28]">
        {trouble.title}
      </h5>

      <div className="mt-5 grid gap-3">
        <TroubleItem label="문제" text={trouble.problem} tone="problem" />
        <TroubleItem label="원인" text={trouble.cause} tone="cause" />
        <TroubleItem label="해결" text={trouble.solution} tone="solution" />
        <TroubleItem label="결과" text={trouble.result} tone="result" />
      </div>
    </div>
  );
}

function TroubleItem({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "problem" | "cause" | "solution" | "result";
}) {
  const toneStyle = {
    problem: "bg-[#FFDCDC] text-[#A55A4A]",
    cause: "bg-[#FFE8CD] text-[#9A6A54]",
    solution: "bg-[#DDF3FF] text-[#4F7185]",
    result: "bg-[#E8F6EA] text-[#587A5D]",
  };

  return (
    <div className="rounded-2xl bg-[#FFF8F4] p-4">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-black",
            toneStyle[tone],
          ].join(" ")}
        >
          {label}
        </span>
      </div>

      <p className="break-keep text-sm leading-7 text-[#6F625C]">{text}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className={sectionBase}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="기술을 사용자 흐름 구현에 연결합니다."
          desc="단순히 기술을 사용했다는 것보다, 프로젝트에서 어떤 역할로 활용했는지를 보여주도록 구성했습니다."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.article
              key={skill.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="group min-h-[168px] rounded-[1.7rem] border border-[#FFE8CD] bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(123,83,60,0.08)]"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg shadow-sm"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-[#2F2A28]">
                {skill.name}
              </h3>
              <p className="mt-3 break-keep text-sm leading-6 text-[#6F625C]">
                {skill.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className={`${sectionBase} bg-white/45`}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="학습과 협업 경험"
          desc="프론트엔드 개발자로 성장하기 위해 학습, 해커톤, 부트캠프 경험을 쌓았습니다."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-[#FFE8CD] bg-white/75 p-8"
          >
            <h3 className="text-2xl font-black text-[#2F2A28]">Education</h3>
            <ul className="mt-5 space-y-3 leading-7 text-[#6F625C]">
              <li>삼육대학교 인공지능융합학부 / 컴퓨터공학부</li>
              <li>2021.03 - 2026.02</li>
            </ul>

            <h3 className="mt-10 text-2xl font-black text-[#2F2A28]">
              Certificate
            </h3>
            <ul className="mt-5 space-y-3 leading-7 text-[#6F625C]">
              <li>SQLD 취득</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[2rem] border border-[#FFE8CD] bg-white/75 p-8"
          >
            <h3 className="text-2xl font-black text-[#2F2A28]">Activities</h3>

            <div className="mt-6 space-y-4">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#FFF8F4] px-5 py-4"
                >
                  <p className="font-black text-[#2F2A28]">{item.title}</p>
                  <p className="mt-1 text-sm font-bold text-[#D88F73]">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={sectionBase}>
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#2F2A28] to-[#5A4740] p-10 text-white md:p-14"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#FFDCDC]">
            Contact
          </p>

          <h2 className="mt-5 break-keep text-4xl font-black leading-tight md:text-5xl">
            프로젝트와 이력서를 바로 확인할 수 있게 정리했습니다.
          </h2>

          <p className="mt-5 max-w-2xl break-keep leading-8 text-white/75">
            메일, GitHub, Velog, 이력서를 한 번에 확인할 수 있도록 구성했습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:jiyeon020327@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
            >
              메일 보내기 <FiMail />
            </a>

            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              GitHub <FiGithub />
            </a>

            <a
              href="https://velog.io/@k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Velog <FiExternalLink />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              이력서 다운로드 <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D88F73]">
        {eyebrow}
      </p>
      <h2 className="mt-4 break-keep text-4xl font-black leading-tight tracking-[-0.03em] text-[#2F2A28] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl break-keep leading-8 text-[#6F625C]">
        {desc}
      </p>
    </motion.div>
  );
}
