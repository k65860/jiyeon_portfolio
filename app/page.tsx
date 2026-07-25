"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiX,
} from "react-icons/fi";

type ProjectSection = {
  title: string;
  items: string[];
};

type Troubleshooting = {
  title: string;
  problem: string;
  diagnosis: string;
  solution: string;
  result: string;
};

type Project = {
  id: string;
  number: string;
  title: string;
  thumbnail: string;
  thumbnailPosition?: string;
  label: string;
  period: string;
  type: string;
  summary: string;
  keyContribution: string;
  role: string;
  tech: string[];
  color: string;
  textColor: string;
  sections: ProjectSection[];
  troubleshooting: Troubleshooting;
  learned: string;
  github: string;
  service?: string;
  note?: string;
};

const projects: Project[] = [
  {
    id: "memory-storage",
    number: "01",
    title: "추억저장소",
    thumbnail: "/projects/memory-storage.png",
    label: "AUTH · STORAGE · RLS",
    period: "2026.04 — 진행 중",
    type: "개인 프로젝트 · 기획/디자인/개발 100%",
    summary:
      "사진과 기록을 저장하고 로그인한 사용자별로 자신의 추억을 다시 확인하는 모바일 기록 서비스",
    keyContribution:
      "화면 구현과 인증, 이미지 저장, 데이터 소유권과 접근 권한까지 혼자 연결했습니다.",
    role: "Product Designer · Frontend Developer",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase"],
    color: "bg-[#F7D9DF]",
    textColor: "text-[#733A4A]",
    sections: [
      {
        title: "기획부터 개발까지 단독 진행",
        items: [
          "App Router로 로그인·회원가입·목록·등록·상세·수정 경로 구성",
          "Header, Bottom Navigation, SideBar, MemoryCard, 수정 모달 컴포넌트 분리",
          "제목 기준 실시간 검색과 모바일 퍼스트 인터페이스 구현",
        ],
      },
      {
        title: "사용자별 인증·데이터 구조",
        items: [
          "Supabase Auth로 회원가입·로그인·로그아웃 흐름 구현",
          "Auth 사용자 ID를 profiles.id와 memories.user_id에 연결",
          "조회·수정 요청에 현재 사용자 ID 조건을 포함하고 RLS 정책으로 권한 제한",
        ],
      },
      {
        title: "이미지 업로드 흐름",
        items: [
          "이미지 형식과 5MB 용량을 업로드 전에 검증",
          "URL.createObjectURL()로 선택 즉시 로컬 미리보기 제공",
          "Storage 업로드 후 Public URL을 받아 Database 기록과 순차 연결",
        ],
      },
    ],
    troubleshooting: {
      title: "RLS 정책 누락으로 발생한 추억 등록 403 오류",
      problem:
        "로그인은 정상인데 추억 등록 요청이 403 Forbidden으로 차단됐습니다.",
      diagnosis:
        "요청 데이터가 아니라 Supabase 권한 설정을 확인했고, RLS는 활성화됐지만 INSERT 허용 정책이 없다는 점을 찾았습니다.",
      solution:
        "auth.uid()와 새 데이터의 user_id가 일치할 때만 등록을 허용하는 INSERT 정책을 작성했습니다.",
      result:
        "본인 데이터는 정상 저장되고 정책 조건을 충족하지 않는 요청은 차단되는 것을 확인했습니다.",
    },
    learned:
      "인증은 로그인 화면으로 끝나지 않으며, 사용자 확인·데이터 소유 관계·서버 권한 정책이 함께 설계되어야 한다는 점을 배웠습니다.",
    github: "https://github.com/k65860/memory_storage",
  },
  {
    id: "playmap",
    number: "02",
    title: "PlayMap",
    thumbnail: "/projects/playmap.png",
    label: "DATA → INTERFACE",
    period: "2025.05 — 2025.06",
    type: "기업 협업 졸업 프로젝트 · Frontend",
    summary:
      "아이의 놀이 조건과 활동 키워드를 기반으로 놀이활동을 추천하고 기록하는 서비스",
    keyContribution:
      "기업의 복잡한 분류 데이터를 선택·추천·기록 저장으로 구현했습니다.",
    role: "Frontend Developer · UI Prototype",
    tech: ["React", "TypeScript", "REST API", "react-calendar", "Figma"],
    color: "bg-[#DDE5FF]",
    textColor: "text-[#344D8B]",
    sections: [
      {
        title: "기존 구조와 데이터 분석",
        items: [
          "기업 서비스의 폴더 구조, 공통 컴포넌트, API 호출 방식 선행 분석",
          "분류 데이터를 ‘누구와·어디에서·어떤 활동을·얼마나’ 질문 UI로 재구성",
          "대·소분류 조건 필터링과 동일 이름 키워드 중복 제거",
        ],
      },
      {
        title: "선택에서 추천까지",
        items: [
          "카테고리를 키로 하는 객체로 단계별 선택 상태 관리",
          "선택값 요약과 개별 해제 UI 구현",
          "PLAY_SQ 식별자로 키워드와 활동 설명 데이터를 연결해 추천 결과 표시",
        ],
      },
      {
        title: "기록 CRUD와 캘린더",
        items: [
          "월별 기록 날짜 표시와 선택 날짜의 상세 기록 조회 분리",
          "기록 등록·수정·삭제 API를 화면 컴포넌트와 분리",
          "긴 활동 내용은 카드 안에서 접고 펼칠 수 있도록 구현",
        ],
      },
    ],
    troubleshooting: {
      title: "기록 생성과 키워드 연결 요청의 데이터 의존성",
      problem:
        "활동 기록과 여러 키워드를 서로 다른 API로 저장해야 해 요청 순서에 따라 연결이 실패할 수 있었습니다.",
      diagnosis:
        "키워드 연결 요청에는 기록 생성 응답에서 반환되는 RCD_SQ가 반드시 필요했습니다.",
      solution:
        "기록을 먼저 생성한 뒤 ID를 추출하고, 유효한 키워드 ID만 Promise.all()로 병렬 연결했습니다.",
      result:
        "하나의 활동 기록에 여러 키워드가 누락 없이 연결되고 중복 키워드도 화면에서 제거됐습니다.",
    },
    learned:
      "UI를 만들기 전에 선택 상태의 구조와 API 사이의 데이터 의존 관계를 먼저 정의해야 한다는 점을 체감했습니다.",
    github: "https://github.com/k65860/2025_PlayMap_FrontEnd.git",
    note: "기업 저장소 운영 종료 후 개인 GitHub로 코드를 이전했습니다.",
  },
  {
    id: "carebuddy",
    number: "03",
    title: "CareBuddy",
    thumbnail: "/projects/carebuddy.png",
    label: "API RESPONSE · STATE",
    period: "2024.04 MVP · 2024.06 — 2024.10 고도화",
    type: "부트캠프 팀 프로젝트 · Frontend",
    summary:
      "반려동물의 진료 기록을 작성하고 다른 사용자와 질병 정보를 공유하는 커뮤니티 서비스",
    keyContribution:
      "중첩된 사용자 응답 구조를 분석해 마이페이지 데이터를 연결하고, 수정 결과가 화면에 즉시 반영되도록 구현했습니다.",
    role: "Frontend Developer · Documentation",
    tech: ["React", "TypeScript", "Recoil", "styled-components", "Axios"],
    color: "bg-[#DCEBDD]",
    textColor: "text-[#315B3E]",
    sections: [
      {
        title: "공통 레이아웃과 마이페이지",
        items: [
          "중첩 라우팅의 Outlet 영역에 마이페이지가 렌더링되도록 구조 수정",
          "페이지별 Header·Footer 중복을 제거하고 공통 레이아웃 재사용",
          "회원정보·반려동물·작성 글을 역할별 컴포넌트로 분리",
        ],
      },
      {
        title: "GET /me 응답 데이터 분배",
        items: [
          "response.data.message 전체를 사용자 상태에 저장",
          "postId, buddyId 등 필요한 데이터만 각 하위 컴포넌트에 전달",
          "게시글을 작성일순으로 정렬하고 삭제되지 않은 글만 렌더링",
        ],
      },
      {
        title: "프로필 수정과 협업 문서",
        items: [
          "FormData로 닉네임·소개글·이미지를 PUT /me에 동시 전송",
          "선택 이미지 미리보기와 서버 응답 기반 사용자 상태 갱신",
          "페이지·컴포넌트·담당자·API 요청/응답 명세를 문서화",
        ],
      },
    ],
    troubleshooting: {
      title: "GET /me 응답 구조를 활용한 작성 글 렌더링",
      problem:
        "사용자 정보는 조회됐지만 로그인한 사용자의 작성 글이 마이페이지에 표시되지 않았습니다.",
      diagnosis:
        "실제 응답을 확인해 postId에 이미 해당 사용자의 게시글이 포함되어 있다는 점을 파악했습니다.",
      solution:
        "전체 게시글 재조회와 불필요한 ID 비교를 제거하고 사용자 응답을 상태에 저장해 필요한 컴포넌트로 나눴습니다.",
      result:
        "회원정보·반려동물·작성 글이 각 영역에 정상 표시됐고 데이터 흐름도 단순해졌습니다.",
    },
    learned:
      "API 호출 성공 여부보다 실제 응답의 배열·객체·중첩 구조를 먼저 확인하고 화면에 필요한 데이터로 분리하는 습관을 갖게 됐습니다.",
    github: "https://github.com/care-buddy/Carebuddy",
    service: "https://carebuddy.vercel.app/",
  },
  {
    id: "winehouse",
    number: "04",
    title: "Winehouse",
    thumbnail: "/projects/winehouse.png",
    thumbnailPosition: "object-top",
    label: "VANILLA JS · ADMIN",
    period: "2024 · 부트캠프 초기 프로젝트",
    type: "팀 프로젝트 · 관리자 페이지 담당",
    summary:
      "고객이 원하는 와인을 탐색하고 구매할 수 있는 쇼핑몰과 관리자 운영 화면",
    keyContribution:
      "URL 식별자 기반 상품 렌더링부터 관리자 인증, 상품·주문 관리까지 웹 서비스의 전체 흐름을 처음 경험했습니다.",
    role: "Frontend Developer · Admin UI",
    tech: ["JavaScript", "HTML", "CSS", "Fetch API", "REST API"],
    color: "bg-[#F1E1D2]",
    textColor: "text-[#6D4932]",
    sections: [
      {
        title: "동적 상품 화면",
        items: [
          "URLSearchParams로 categoryId와 productId 추출",
          "목록·상세 API 응답을 DOM 요소로 만들어 화면에 렌더링",
          "선택 수량에 따라 총가격을 계산하고 장바구니·주문 흐름 연결",
        ],
      },
      {
        title: "관리자 인증과 상품 관리",
        items: [
          "관리자 로그인 이메일 검증과 로그인 API 연동",
          "토큰을 localStorage에 저장하고 인증 요청에 Bearer 헤더 전달",
          "상품·카테고리 조회와 상품 추가·수정·삭제 화면 구현",
        ],
      },
      {
        title: "여러 API 응답 조합",
        items: [
          "주문별 배송 상태·상품 정보·상품 이미지를 추가 조회",
          "서로 다른 응답을 주문 단위 화면 데이터로 조합",
          "배송 상태·주문 일자·수량·금액·이미지를 하나의 카드에 표시",
        ],
      },
    ],
    troubleshooting: {
      title: "관리자 인증 토큰 저장 키 불일치",
      problem:
        "관리자 로그인은 성공했지만 상품 등록·삭제와 카테고리 조회 요청이 실패했습니다.",
      diagnosis:
        "로그인 화면과 각 관리자 페이지에서 토큰 저장 키가 달랐고 일부 요청에는 인증 헤더가 없었습니다.",
      solution:
        "저장 키를 token으로 통일하고 권한이 필요한 요청에 Authorization: Bearer 헤더를 추가했습니다.",
      result:
        "로그인 이후 상품·카테고리 관리 API를 정상적으로 호출할 수 있게 됐습니다.",
    },
    learned:
      "로그인은 토큰 발급으로 끝나지 않고 저장과 후속 요청의 전달 규칙까지 일관되어야 한다는 점을 배웠습니다.",
    github: "https://github.com/k65860/Winehouse.git",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main id="top" className="min-h-screen bg-[#F3F5F7] text-[#172033]">
      <Header />
      <Hero />
      <Experience />
      <ProjectGrid onSelect={setSelectedProject} />
      <Contact />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#172033]/10 bg-[#F3F5F7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-sm font-black tracking-[-0.02em]">
          KIM JIYEON
        </a>
        <nav className="flex items-center gap-5 text-xs font-bold text-black/60 md:gap-8 md:text-sm">
          <a className="transition hover:text-[#172033]" href="#experience">
            Profile
          </a>
          <a className="transition hover:text-[#172033]" href="#projects">
            Projects
          </a>
          <a
            className="hidden transition hover:text-[#172033] sm:block"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid overflow-hidden rounded-[1.5rem] border border-[#172033]/10 bg-white shadow-[0_18px_55px_rgba(23,32,51,0.07)] md:grid-cols-[0.78fr_1.22fr]"
        >
          <div
            className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#E8EDF3] md:min-h-[600px]"
            role="img"
            aria-label="개발자 이모지"
          >
            <div className="absolute h-56 w-56 rounded-full bg-white/70 shadow-[0_20px_60px_rgba(23,32,51,0.10)] sm:h-64 sm:w-64 md:h-72 md:w-72" />
            <span className="relative -translate-y-2 text-[8.5rem] leading-none drop-shadow-[0_14px_18px_rgba(23,32,51,0.12)] sm:text-[10rem] md:text-[11rem]">
              👩🏻‍💻
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172033]/70 to-transparent px-7 pb-7 pt-20 text-xs font-black uppercase tracking-[0.22em] text-white">
              Frontend Portfolio
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3566C8]">
              Frontend Developer
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl lg:text-5xl">
              김지연
              <span className="mt-2 block text-xl font-bold tracking-[-0.025em] text-black/40 sm:text-2xl">
                Kim Jiyeon
              </span>
            </h1>

            <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
              <ProfileRow
                label="Education"
                value={
                  <>삼육대학교 인공지능융합학부 (복수전공: 컴퓨터공학부)</>
                }
              />
              <ProfileRow label="Location" value="서울특별시 강동구" />
              <ProfileRow
                label="GitHub"
                value={
                  <a
                    href="https://github.com/k65860"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-black/20 underline-offset-4 hover:decoration-black"
                  >
                    github.com/k65860
                  </a>
                }
              />
              <ProfileRow
                label="Velog"
                value={
                  <a
                    href="https://velog.io/@k65860/posts"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-black/20 underline-offset-4 hover:decoration-black"
                  >
                    velog.io/@k65860/posts
                  </a>
                }
              />
              <ProfileRow
                label="Email"
                value={
                  <a
                    href="mailto:jy_0327@naver.com"
                    className="underline decoration-black/20 underline-offset-4 hover:decoration-black"
                  >
                    jy_0327@naver.com
                  </a>
                }
              />
            </dl>

            <p className="mt-8 max-w-xl break-keep text-sm font-medium leading-7 text-[#172033]/55">
              {/* React와 TypeScript를 중심으로 웹 서비스를 개발해 왔으며, 사용자
              인증·API 연동·데이터 처리 경험을 프로젝트로 쌓았습니다. */}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[110px_1fr] sm:gap-5">
      <dt className="text-xs font-black uppercase tracking-[0.14em] text-black/35">
        {label}
      </dt>
      <dd className="break-keep text-sm font-bold leading-6 sm:text-base">
        {value}
      </dd>
    </div>
  );
}

function ProjectGrid({ onSelect }: { onSelect: (project: Project) => void }) {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="프로젝트별 담당 역할과 구현 내용, 문제 해결 과정을 정리했습니다. 카드를 선택하면 상세 내용을 확인할 수 있습니다."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => onSelect(project)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
              className={`${project.color} group flex min-h-[450px] flex-col rounded-[1.5rem] border border-[#172033]/10 p-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,32,51,0.10)] md:p-9`}
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  className={`text-xs font-black tracking-[0.18em] ${project.textColor}`}
                >
                  {project.label}
                </p>
                <span className="text-sm font-black text-black/30">
                  {project.number}
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.1rem] border border-black/10 bg-white/50">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} 프로젝트 대표 화면`}
                  className={`h-80 w-full object-cover ${project.thumbnailPosition ?? "object-center"}`}
                />
              </div>

              <div className="mt-7">
                <p className="text-xs font-bold text-black/45">
                  {project.type}
                </p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm font-bold text-black/50">
                  {project.period}
                </p>
                <p className="mt-7 max-w-xl break-keep text-lg font-bold leading-8">
                  {project.summary}
                </p>
              </div>

              <div className="mt-auto border-t border-black/15 pt-6">
                <p className="break-keep text-sm font-bold leading-6 text-black/65">
                  {project.keyContribution}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/55 px-3 py-1.5 text-[11px] font-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-[-35deg]">
                    <FiArrowRight />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const activities = [
    {
      title: "삼육대학교 멋쟁이사자처럼 운영진",
      period: "2021.03 — 2023.03",
    },
    {
      title: "멋쟁이사자처럼 해커톤 참가",
      period: "2022.08.19 — 2022.08.20",
    },
    {
      title: "SW중심대학 해커톤 참가",
      period: "2023.06.28 — 2023.06.30",
    },
    {
      title: "엘리스 트랙 웹 개발자 부트캠프 수료",
      period: "2023.12.25 — 2024.04.19",
    },
  ];

  const certificates = [
    { title: "SQLD", date: "2026.03" },
    { title: "GTQ 그래픽기술자격 2급", date: "2014.09" },
    { title: "인터넷 A등급", date: "2014.03" },
    { title: "한글파워포인트 A등급", date: "2013.12" },
    { title: "아래한글 B등급", date: "2013.03" },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Profile Details"
          title="대내외활동 · 자격증"
          // description="최신순으로 정리했습니다."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.5rem] border border-[#172033]/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,32,51,0.04)] md:p-9">
            <h3 className="text-2xl font-black tracking-[-0.035em]">
              대내외활동
            </h3>
            <div className="mt-7 divide-y divide-[#172033]/10 border-y border-[#172033]/10">
              {activities.map((item) => (
                <div key={item.title} className="py-5">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <p className="font-bold">{item.title}</p>
                    <time className="shrink-0 text-sm font-bold text-[#3566C8]">
                      {item.period}
                    </time>
                  </div>
                  {/* {item.detail && (
                    <p className="mt-1 text-sm text-[#172033]/45">
                      {item.detail}
                    </p>
                  )} */}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-[#172033]/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,32,51,0.04)] md:p-9">
            <h3 className="text-2xl font-black tracking-[-0.035em]">자격증</h3>
            <div className="mt-7 divide-y divide-[#172033]/10 border-y border-[#172033]/10">
              {certificates.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-5 py-5"
                >
                  <p className="font-bold">{item.title}</p>
                  <time className="shrink-0 text-sm font-bold text-[#3566C8]">
                    {item.date}
                  </time>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 px-5 pb-6 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#172033] px-7 py-14 text-white md:px-12 md:py-20">
        <p className="text-xs font-black uppercase tracking-[0.22em]">
          Contact
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <h2 className="break-keep text-4xl font-black leading-[1.08] tracking-[-0.06em] md:text-6xl">
            Contact
          </h2>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="mailto:jy_0327@naver.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#4D7DE0] px-5 py-3 text-sm font-bold text-white"
            >
              Email <FiMail />
            </a>
            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold"
            >
              GitHub <FiGithub />
            </a>
            <a
              href="https://velog.io/@k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold"
            >
              Velog <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl justify-between px-1 py-6 text-xs font-bold text-black/40">
        <span>© 2026 Kim Jiyeon · Frontend Portfolio</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-end">
      <div>
        <p
          className={`text-xs font-black uppercase tracking-[0.22em] ${
            dark ? "text-[#7FA6F5]" : "text-[#3566C8]"
          }`}
        >
          {eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl break-keep text-4xl font-black leading-[1.12] tracking-[-0.055em] md:text-5xl">
          {title}
        </h2>
      </div>
      <p
        className={`break-keep leading-7 ${dark ? "text-white/55" : "text-[#172033]/50"}`}
      >
        {description}
      </p>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/55 p-0 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.985 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        onClick={(event) => event.stopPropagation()}
        className="mx-auto h-full max-w-6xl overflow-y-auto bg-[#F3F5F7] md:rounded-[1.5rem]"
      >
        <div
          className={`relative px-6 pb-10 pt-20 md:px-12 md:pb-14 ${project.color}`}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-xl transition hover:bg-white"
            aria-label="프로젝트 상세 닫기"
          >
            <FiX />
          </button>
          <p
            className={`text-xs font-black tracking-[0.2em] ${project.textColor}`}
          >
            PROJECT {project.number} · {project.label}
          </p>
          <h2
            id={`${project.id}-title`}
            className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl"
          >
            {project.title}
          </h2>
          <p className="mt-5 max-w-2xl break-keep text-xl font-bold leading-8">
            {project.summary}
          </p>

          <dl className="mt-10 grid gap-5 border-t border-black/15 pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs font-black text-black/40">PERIOD</dt>
              <dd className="mt-2 font-bold">{project.period}</dd>
            </div>
            <div>
              <dt className="text-xs font-black text-black/40">ROLE</dt>
              <dd className="mt-2 font-bold">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-black text-black/40">TYPE</dt>
              <dd className="mt-2 font-bold">{project.type}</dd>
            </div>
          </dl>
        </div>

        <div className="px-6 py-12 md:px-12 md:py-16">
          <section className="grid gap-6 border-b border-black/15 pb-12 md:grid-cols-[0.35fr_0.65fr]">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#3566C8]">
              Key Contribution
            </h3>
            <p className="break-keep text-2xl font-black leading-10 tracking-[-0.03em] md:text-3xl">
              {project.keyContribution}
            </p>
          </section>

          <section className="py-12">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#3566C8]">
              What I Did
            </h3>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {project.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-3xl bg-white p-6"
                >
                  <span className="text-xs font-black text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-4 text-xl font-black tracking-[-0.025em]">
                    {section.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-6 text-black/60"
                      >
                        <FiCheck className="mt-1 shrink-0 text-[#3566C8]" />
                        <span className="break-keep">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] bg-[#172033] p-7 text-white md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7FA6F5]">
              Troubleshooting
            </p>
            <h3 className="mt-4 break-keep text-2xl font-black tracking-[-0.035em] md:text-3xl">
              {project.troubleshooting.title}
            </h3>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-2">
              {[
                ["문제", project.troubleshooting.problem],
                ["진단", project.troubleshooting.diagnosis],
                ["해결", project.troubleshooting.solution],
                ["결과", project.troubleshooting.result],
              ].map(([label, text]) => (
                <div key={label} className="bg-[#1E2940] p-5 md:p-6">
                  <p className="text-xs font-black text-[#7FA6F5]">{label}</p>
                  <p className="mt-3 break-keep text-sm leading-7 text-white/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 border-y border-black/15 py-10 md:grid-cols-[0.35fr_0.65fr]">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#3566C8]">
              What I Learned
            </h3>
            <div>
              <p className="break-keep text-lg font-bold leading-8">
                {project.learned}
              </p>
              {project.note && (
                <p className="mt-4 break-keep text-sm leading-6 text-black/45">
                  * {project.note}
                </p>
              )}
            </div>
          </section>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/15 px-3.5 py-2 text-xs font-black"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.service && (
                <a
                  href={project.service}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-bold"
                >
                  서비스 <FiExternalLink />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
