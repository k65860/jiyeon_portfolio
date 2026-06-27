"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiX,
} from "react-icons/fi";

type GalleryImage = {
  src: string;
  caption: string;
};

type Project = {
  id: string;
  number: string;
  icon: string;
  title: string;
  period: string;
  status?: string;
  summary: string;
  highlight: string;
  tech: string[];
  roles: string[];
  images: GalleryImage[];
  github: string;
  service?: string;
};

type CaseDetail = {
  label: string;
  text: string;
};

type CaseStudy = {
  id: string;
  category: string;
  project: string;
  title: string;
  summary: string;
  details: CaseDetail[];
  code?: string;
  images?: GalleryImage[];
};

type ModalState = {
  title: string;
  images: GalleryImage[];
  currentIndex: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const projects: Project[] = [
  {
    id: "carebuddy",
    number: "01",
    icon: "🐾",
    title: "CareBuddy",
    period: "2024.04 - 2024.10",
    summary:
      "3주 부트캠프 프로젝트 종료 후에도 팀원들과 다시 모여 약 4개월간 자발적으로 고도화한 반려동물 케어 커뮤니티 서비스",
    highlight:
      "카카오 OAuth 인증 흐름을 직접 검증하고, 사용자 정보·반려동물 데이터가 화면에 자연스럽게 반영되도록 API 연동을 구현했습니다.",
    tech: ["React", "TypeScript", "Recoil", "REST API", "Vercel"],
    roles: [
      "공통 레이아웃과 Header·Secondary Header·Footer 구현",
      "마이페이지 사용자 정보와 반려동물 데이터 API 연동",
      "프로필 수정 후 화면 상태 갱신 흐름 구현",
      "페이지·컴포넌트·API 명세 문서화",
      "카카오 OAuth 로그인 흐름 Technical PoC 진행",
    ],
    images: [
      {
        src: "/projects/carebuddy/carebuddy-01.png",
        caption: "마이페이지 사용자 정보, 반려동물 카드, 작성 글 목록",
      },
      {
        src: "/projects/carebuddy/carebuddy-02.png",
        caption: "반려동물 카드와 사용자 작성 글 목록 UI",
      },
      {
        src: "/projects/carebuddy/carebuddy-03.png",
        caption: "반려동물 등록 모달 상단 입력 화면",
      },
      {
        src: "/projects/carebuddy/carebuddy-04.png",
        caption: "반려동물 등록 모달 하단 입력 및 저장 요청",
      },
    ],
    github: "https://github.com/care-buddy/Carebuddy",
    service: "https://carebuddy.vercel.app/",
  },
  {
    id: "playmap",
    number: "02",
    icon: "👶🏻",
    title: "PlayMap",
    period: "2025.05 - 2025.06",
    status: "기업 협업 졸업 프로젝트 · 배포 종료",
    summary:
      "기업의 놀이활동 분류 데이터를 사용자가 쉽게 선택할 수 있는 4단계 키워드 UI로 재구성한 기업 협업 졸업 프로젝트",
    highlight:
      "복잡한 대·중·소분류 데이터를 ‘누구와 → 어디에서 → 어떤 활동 → 얼마나’ 흐름으로 전환해 추천 활동과 기록 저장까지 연결했습니다.",
    tech: ["React", "TypeScript", "REST API", "react-calendar", "Bottom Sheet"],
    roles: [
      "기업 요구사항 및 놀이활동 분류 데이터 구조 분석",
      "키워드 선택 → 추천 활동 → 기록 저장 흐름 구현",
      "선택 키워드 요약 및 해제 UI 구현",
      "추천 활동 표시와 기록 작성 화면 연결",
      "react-calendar 기반 활동 기록 탐색 UI 구현",
    ],
    images: [
      {
        src: "/projects/playmap/playmap-01.png",
        caption: "월별 캘린더와 날짜별 활동 기록 탐색 화면",
      },
      {
        src: "/projects/playmap/playmap-03.png",
        caption: "놀이활동 기록 생성용 바텀시트 UI",
      },
      {
        src: "/projects/playmap/playmap-04.png",
        caption: "4단계 키워드 선택, 선택값 요약, 추천 활동 노출 화면",
      },
    ],
    github: "https://github.com/k65860/playmap",
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "oauth",
    category: "Technical PoC",
    project: "CareBuddy",
    title: "Kakao OAuth 인증 흐름 검증",
    summary:
      "인가 코드 수신부터 사용자 정보 확인과 MongoDB 저장까지 외부 로그인 흐름을 직접 검증했습니다.",
    details: [
      {
        label: "문제 상황",
        text: "카카오 로그인 도입 과정에서 프론트엔드와 백엔드 사이의 인가 코드·사용자 정보 전달 흐름이 명확하지 않았습니다.",
      },
      {
        label: "진단 과정",
        text: "카카오 공식 문서를 기준으로 Redirect URI, 인가 코드, 사용자 정보 조회 흐름을 단계별로 정리했습니다.",
      },
      {
        label: "해결 방식",
        text: "callback URL의 인가 코드 수신, 서버 사용자 정보 확인, MongoDB 저장 과정을 순서대로 검증했습니다.",
      },
      {
        label: "검증 결과",
        text: "로그인 성공 화면과 MongoDB 사용자 데이터 저장 로그를 통해 인증 흐름이 정상 동작함을 확인했습니다.",
      },
      {
        label: "배운 점",
        text: "외부 로그인은 버튼 하나를 붙이는 기능이 아니라 인증·데이터·서버 흐름 전체를 이해해야 하는 기능이라는 점을 배웠습니다.",
      },
    ],
    images: [
      {
        src: "/evidence/kakao-success.png",
        caption: "카카오 로그인 후 callback URL과 로그인 성공 상태 확인",
      },
      {
        src: "/evidence/kakao-mongo.png",
        caption: "카카오 사용자 정보의 MongoDB 저장 흐름 확인",
      },
    ],
  },
  {
    id: "api-response",
    category: "Troubleshooting",
    project: "CareBuddy",
    title: "중첩 API 응답 구조 분석",
    summary:
      "배열과 중첩 객체로 반환된 게시글 데이터를 분석해 사용자별 게시글을 안정적으로 렌더링했습니다.",
    details: [
      {
        label: "문제 상황",
        text: "게시글 API 호출에는 성공했지만 response.data.message[0]만 사용해 전체 목록과 사용자별 데이터를 안정적으로 다루기 어려웠습니다.",
      },
      {
        label: "진단 과정",
        text: "콘솔로 응답 구조를 확인한 결과 message는 배열이고 userId는 내부 객체 구조로 구성되어 있음을 확인했습니다.",
      },
      {
        label: "해결 방식",
        text: "게시글 배열 전체를 상태에 저장하고 userId._id를 기준으로 필요한 게시글을 필터링했습니다.",
      },
      {
        label: "검증 결과",
        text: "사용자별 게시글 목록과 게시글 상세 정보를 분리해 정상 렌더링했습니다.",
      },
      {
        label: "배운 점",
        text: "API 연동은 요청 성공 여부보다 응답 데이터의 배열·객체 구조와 깊이를 먼저 읽는 과정이 중요하다는 점을 배웠습니다.",
      },
    ],
    code: `const userPosts = response.data.message.filter(
  (post) => post.userId?._id === currentUserId,
);`,
  },
  {
    id: "playmap-data",
    category: "Design Challenge",
    project: "PlayMap",
    title: "기업 데이터 → 4단계 키워드 UI 전환",
    summary:
      "기업 내부의 놀이활동 분류 데이터를 사용자가 실제 상황에 맞게 선택할 수 있는 키워드 흐름으로 재설계했습니다.",
    details: [
      {
        label: "문제 상황",
        text: "대·중·소분류와 내부 용어로 구성된 놀이활동 데이터는 사용자가 그대로 이해하고 선택하기 어려웠습니다.",
      },
      {
        label: "분석",
        text: "놀이 대상, 장소, 활동 유형, 시간이라는 선택 기준으로 데이터를 다시 구조화했습니다.",
      },
      {
        label: "UI 결정",
        text: "복잡한 조건을 한 화면에 나열하지 않고 바텀시트에서 단계별 키워드를 선택하도록 구성했습니다.",
      },
      {
        label: "결과",
        text: "사용자는 추천 규칙을 몰라도 키워드 선택만으로 상황에 맞는 활동을 추천받고 기록할 수 있게 되었습니다.",
      },
      {
        label: "AI 활용",
        text: "분류 기준을 빠르게 파악하는 보조 도구로 활용했고, 최종 키워드 체계와 데이터 연결 방식은 실제 요구사항을 기준으로 직접 검토했습니다.",
      },
    ],
    images: [
      {
        src: "/projects/playmap/playmap-04.png",
        caption:
          "놀이 대상·장소·활동·시간을 선택하고 추천 활동을 확인하는 화면",
      },
    ],
  },
];

const workCards = [
  {
    number: "01",
    title: "구조를 화면으로 바꿉니다",
    desc: "복잡한 규칙과 데이터를 그대로 노출하지 않고, 사용자가 선택하고 이해하기 쉬운 흐름으로 재구성합니다.",
  },
  {
    number: "02",
    title: "화면과 데이터를 함께 봅니다",
    desc: "UI 구현에 그치지 않고 API 응답 구조, 사용자 상태, 화면 갱신 흐름을 함께 확인합니다.",
  },
  {
    number: "03",
    title: "기록하고 공유합니다",
    desc: "페이지·컴포넌트·API 흐름을 문서화하고, 학습과 문제 해결 과정을 꾸준히 기록합니다.",
  },
];

export default function Home() {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = (
    title: string,
    images: GalleryImage[],
    currentIndex: number,
  ) => {
    setModal({ title, images, currentIndex });
  };

  const closeModal = () => setModal(null);

  const showPrevious = () => {
    setModal((prev) => {
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

  const showNext = () => {
    setModal((prev) => {
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
    <main className="min-h-screen overflow-x-hidden bg-[#FFF9F6] text-[#2F2A28]">
      <Header />
      <Hero />
      <ProofStrip />
      <SelectedWork onOpen={openModal} />
      <CaseStudies onOpen={openModal} />
      <HowIWork />
      <Origin onOpen={openModal} />
      <Evidence />
      <Contact />

      <AnimatePresence>
        {modal && (
          <ImageModal
            modal={modal}
            onClose={closeModal}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-40px)] max-w-6xl -translate-x-1/2 rounded-full border border-[#F3DED2] bg-white/80 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-3 md:px-6">
        <a
          href="#"
          className="text-sm font-black tracking-tight text-[#2F2A28]"
        >
          Jiyeon Kim
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#76665F] md:flex">
          <a href="#work" className="transition hover:text-[#2F2A28]">
            Work
          </a>
          <a href="#cases" className="transition hover:text-[#2F2A28]">
            Cases
          </a>
          <a href="#story" className="transition hover:text-[#2F2A28]">
            Story
          </a>
          <a href="#evidence" className="transition hover:text-[#2F2A28]">
            Evidence
          </a>
          <a href="#contact" className="transition hover:text-[#2F2A28]">
            Contact
          </a>
        </nav>

        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-[#2F2A28] px-3 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 md:px-4"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-20 pt-32 md:pb-24">
      <div className="absolute left-[-150px] top-16 h-96 w-96 rounded-full bg-[#FFDCD3]/70 blur-3xl" />
      <div className="absolute right-[-160px] top-1/3 h-[430px] w-[430px] rounded-full bg-[#F9E6CE]/80 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-145px)] max-w-6xl items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex rounded-full border border-[#F3DED2] bg-white/80 px-4 py-2 text-sm font-black text-[#C57966] shadow-sm">
            Frontend Developer
          </p>

          <h1 className="mt-7 break-keep text-5xl font-black leading-[1.16] tracking-[-0.06em] text-[#2F2A28] md:text-[66px]">
            복잡한 요구사항과 데이터를
            <br />
            사용자가 쉽게 선택하고 이해할 수 있는
            <br />
            <span className="bg-gradient-to-r from-[#C57966] to-[#B96183] bg-clip-text text-transparent">
              화면과 흐름으로 구현합니다.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl break-keep text-lg leading-8 text-[#6F625C]">
            React와 TypeScript를 기반으로 UI를 구현하고,
            <br className="hidden md:block" />
            API 데이터와 사용자 흐름이 자연스럽게 이어지도록 고민하는 프론트엔드
            개발자 김지연입니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFD2B5] px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              대표 프로젝트 보기 <FiArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#F3DED2] bg-white/85 px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              이력서 다운로드 <FiDownload />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold text-[#76665F]">
            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#2F2A28]"
            >
              GitHub <FiGithub />
            </a>

            <a
              href="https://velog.io/@k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#2F2A28]"
            >
              Velog <FiExternalLink />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto w-full max-w-[410px]"
        >
          <div className="rounded-[2.5rem] border border-[#F3DED2] bg-white/80 p-2.5 shadow-[0_28px_80px_rgba(123,83,60,0.12)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#FBE8DE]">
              <Image
                src="/profile.jpeg"
                alt="김지연 프로필 사진"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 410px"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F2A28]/75 via-[#2F2A28]/20 to-transparent px-7 pb-7 pt-28 text-white">
                <p className="text-3xl font-black tracking-[-0.04em]">김지연</p>
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

function ProofStrip() {
  const proofs = [
    {
      number: "01",
      title: "3주 → 4개월",
      desc: "CareBuddy 프로젝트 자발적 고도화",
    },
    {
      number: "02",
      title: "규칙 데이터 → UI",
      desc: "4단계 키워드 선택 흐름",
    },
    {
      number: "03",
      title: "Velog 73편 · SQLD",
      desc: "기록과 데이터 구조 관심",
    },
  ];

  return (
    <section className="border-y border-[#F3DED2] bg-white/70 px-5 py-6 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {proofs.map((proof) => (
          <div
            key={proof.number}
            className="flex items-center gap-4 rounded-2xl bg-[#FFF9F6] px-5 py-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFDCD3] text-sm font-black text-[#A85D4E]">
              {proof.number}
            </span>

            <div>
              <p className="font-black tracking-[-0.02em] text-[#2F2A28]">
                {proof.title}
              </p>
              <p className="mt-1 text-sm font-bold text-[#8A7770]">
                {proof.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SelectedWork({
  onOpen,
}: {
  onOpen: (title: string, images: GalleryImage[], currentIndex: number) => void;
}) {
  return (
    <section id="work" className="scroll-mt-28 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="프로젝트보다, 어떤 문제를 풀었는지 보여드립니다."
          desc="대표 프로젝트 2개를 중심으로 사용자 흐름, API 데이터, 설계 판단을 정리했습니다."
        />

        <div className="mt-14 space-y-14">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[2.5rem] border border-[#F3DED2] bg-white/85 shadow-[0_25px_70px_rgba(123,83,60,0.08)]"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-[#F3DED2] bg-gradient-to-br from-[#FFE3DA] via-[#FFF9F6] to-[#FBE9D7] p-8 md:p-10 lg:border-b-0 lg:border-r">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[#C57966]">
                    Project {project.number}
                  </p>

                  <div className="mt-6 flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] border border-[#F3DED2] bg-white text-2xl shadow-sm">
                      {project.icon}
                    </span>

                    <div>
                      <h3 className="text-4xl font-black tracking-[-0.05em] text-[#2F2A28]">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm font-black text-[#B06D5B]">
                        {project.period}
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 break-keep text-lg font-bold leading-8 text-[#5F514C]">
                    {project.summary}
                  </p>

                  {project.status && (
                    <span className="mt-5 inline-flex rounded-full bg-[#2F2A28] px-4 py-2 text-xs font-bold text-white">
                      {project.status}
                    </span>
                  )}

                  <div className="mt-7 rounded-[1.5rem] border border-[#F3DED2] bg-white/75 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C57966]">
                      Highlight
                    </p>
                    <p className="mt-3 break-keep font-bold leading-7 text-[#5F514C]">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white px-3.5 py-2 text-xs font-black text-[#6F625C] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.service && (
                      <a
                        href={project.service}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#2F2A28] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1"
                      >
                        Service <FiExternalLink />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#F3DED2] bg-white px-5 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
                    >
                      GitHub <FiGithub />
                    </a>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF0EA] text-[#B86B58]">
                      ✦
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C57966]">
                        My Contribution
                      </p>
                      <h4 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[#2F2A28]">
                        맡은 역할
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.roles.map((role, index) => (
                      <div
                        key={role}
                        className="flex gap-4 items-center rounded-2xl border border-[#F3DED2] bg-[#FFF9F6] px-4 py-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#C57966] shadow-sm">
                          {index + 1}
                        </span>
                        <p className="break-keep text-sm font-bold leading-6 text-[#5F514C]">
                          {role}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C57966]">
                          Screens
                        </p>
                        <h4 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[#2F2A28]">
                          주요 화면
                        </h4>
                      </div>

                      <p className="hidden text-sm font-bold text-[#9A8175] md:block">
                        클릭해서 크게 보기
                      </p>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {project.images.slice(0, 2).map((image, index) => (
                        <GalleryCard
                          key={image.src}
                          image={image}
                          onClick={() =>
                            onOpen(project.title, project.images, index)
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({
  onOpen,
}: {
  onOpen: (title: string, images: GalleryImage[], currentIndex: number) => void;
}) {
  return (
    <section
      id="cases"
      className="scroll-mt-28 bg-white/55 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="문제보다, 원인을 확인한 과정을 보여드립니다."
          desc="오류 해결, 기술 검증, 설계 판단을 같은 방식으로 나열하지 않고 성격에 맞게 분리했습니다."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  caseStudy,
  onOpen,
}: {
  caseStudy: CaseStudy;
  onOpen: (title: string, images: GalleryImage[], currentIndex: number) => void;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col rounded-[2rem] border border-[#F3DED2] bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#FFF0EA] px-3 py-1.5 text-xs font-black text-[#B05F4D]">
          {caseStudy.category}
        </span>
        <span className="rounded-full bg-[#F7F1EE] px-3 py-1.5 text-xs font-black text-[#7B6860]">
          {caseStudy.project}
        </span>
      </div>

      <h3 className="mt-5 break-keep text-2xl font-black tracking-[-0.04em] text-[#2F2A28]">
        {caseStudy.title}
      </h3>

      <p className="mt-4 break-keep font-bold leading-7 text-[#665752]">
        {caseStudy.summary}
      </p>

      {caseStudy.id === "playmap-data" && (
        <div className="mt-6 rounded-[1.4rem] border border-[#F3DED2] bg-[#FFF9F6] p-4">
          <div className="grid gap-2 text-center text-xs font-black text-[#6D5D56]">
            <span className="rounded-xl bg-white px-3 py-2">
              기업 분류 데이터
            </span>
            <span className="text-[#C57966]">↓</span>
            <span className="rounded-xl bg-white px-3 py-2">
              누구와 → 어디에서 → 어떤 활동 → 얼마나
            </span>
            <span className="text-[#C57966]">↓</span>
            <span className="rounded-xl bg-[#E8F8F5] px-3 py-2">
              추천 활동 조회 · 기록 저장
            </span>
          </div>
        </div>
      )}

      {caseStudy.code && (
        <pre className="mt-6 overflow-x-auto rounded-[1.3rem] bg-[#2F2A28] p-4 text-xs leading-6 text-[#FFF4EE]">
          <code>{caseStudy.code}</code>
        </pre>
      )}

      <details className="group mt-6 rounded-[1.4rem] border border-[#F3DED2] bg-[#FFF9F6]">
        <summary className="cursor-pointer list-none px-4 py-4 text-sm font-black text-[#2F2A28]">
          <span className="flex items-center justify-between">
            해결 과정 보기
            <span className="text-[#C57966] transition group-open:rotate-45">
              +
            </span>
          </span>
        </summary>

        <div className="space-y-3 border-t border-[#F3DED2] px-4 py-4">
          {caseStudy.details.map((detail) => (
            <div key={detail.label} className="rounded-xl bg-white p-3.5">
              <p className="text-xs font-black text-[#C57966]">
                {detail.label}
              </p>
              <p className="mt-2 break-keep text-sm leading-6 text-[#665752]">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </details>

      {caseStudy.images && (
        <button
          type="button"
          onClick={() => onOpen(caseStudy.title, caseStudy.images!, 0)}
          className="group mt-6 overflow-hidden rounded-[1.4rem] border border-[#F3DED2] bg-[#FFF9F6] text-left"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={caseStudy.images[0].src}
              alt={caseStudy.images[0].caption}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <p className="border-t border-[#F3DED2] bg-white px-4 py-3 text-sm font-bold text-[#665752]">
            {caseStudy.images[0].caption}
          </p>
        </button>
      )}
    </motion.article>
  );
}

function HowIWork() {
  return (
    <section className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="How I Work"
          title="같이 일할 때의 방식을 보여드립니다."
          desc="개발 방식과 협업 습관이 실제 프로젝트 경험에서 어떻게 드러났는지 정리했습니다."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {workCards.map((card) => (
            <motion.article
              key={card.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-[#F3DED2] bg-white/80 p-7 shadow-sm"
            >
              <span className="text-sm font-black tracking-[0.2em] text-[#C57966]">
                {card.number}
              </span>
              <h3 className="mt-6 break-keep text-2xl font-black tracking-[-0.04em] text-[#2F2A28]">
                {card.title}
              </h3>
              <p className="mt-4 break-keep leading-7 text-[#665752]">
                {card.desc}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 rounded-[2rem] border border-[#F3DED2] bg-[#2F2A28] p-8 text-white md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD5C8]">
            Persistence
          </p>
          <h3 className="mt-4 break-keep text-3xl font-black tracking-[-0.04em] md:text-4xl">
            프로젝트가 끝난 뒤에도,
            <br />더 나은 결과를 위해 다시 모였습니다.
          </h3>
          <p className="mt-5 max-w-3xl break-keep leading-8 text-white/75">
            CareBuddy는 원래 3주 부트캠프 프로젝트였습니다. 완성도가 아쉬워
            팀원들과 자발적으로 다시 모였고, 약 4개월 동안 Discord 코어타임을
            운영하며 기능과 화면 완성도를 고도화했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function Origin({
  onOpen,
}: {
  onOpen: (title: string, images: GalleryImage[], currentIndex: number) => void;
}) {
  const originImages: GalleryImage[] = [
    {
      src: "/origin/rooting-odin.png",
      caption:
        "2012년, Odin과 펌웨어 정보를 확인하며 루팅 문제를 해결하려 했던 카페 기록",
    },
    {
      src: "/origin/rooting-framework.png",
      caption: "framework-res.apk 파일 교체와 권한 설정을 다루던 기록",
    },
  ];

  return (
    <section
      id="story"
      className="scroll-mt-28 bg-[#FFF0EA]/75 px-5 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#C57966]">
            Origin
          </p>

          <h2 className="mt-5 break-keep text-4xl font-black leading-tight tracking-[-0.05em] text-[#2F2A28] md:text-5xl">
            처음부터 화면이 바뀌는
            <br />
            원리가 궁금했습니다.
          </h2>

          <p className="mt-7 break-keep leading-8 text-[#665752]">
            2011년부터 2012년 사이, 원하는 상단바 아이콘과 배터리 표시를
            적용하고 싶어 스마트폰 루팅, 시스템 파일 교체, 권한 설정을
            반복했습니다.
          </p>

          <p className="mt-4 break-keep leading-8 text-[#665752]">
            파일 구조를 확인하고 재부팅하며 결과를 검증하던 경험은 지금도 복잡한
            요구사항과 데이터를 사용자가 쉽게 사용할 수 있는 화면으로 바꾸는
            방식으로 이어지고 있습니다.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[#F0CCBE] bg-white/70 px-4 py-2 text-sm font-black text-[#9E5D4D]">
            Curiosity → Structure → Interface
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {originImages.map((image, index) => (
            <GalleryCard
              key={image.src}
              image={image}
              onClick={() => onOpen("Origin", originImages, index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Evidence() {
  const evidenceCards = [
    {
      eyebrow: "Writing",
      title: "Velog 기술 기록 73편",
      desc: "코딩테스트 풀이, 부트캠프 학습, 개발 중 마주한 문제와 해결 과정을 기록해왔습니다.",
      action: "Velog 방문",
      href: "https://velog.io/@k65860",
    },
    {
      eyebrow: "Sharing",
      title: "멋쟁이사자처럼 실습 강의",
      desc: "부원 대상으로 개발자 성향 테스트 서비스 제작 과정을 약 2시간 동안 설명하고 함께 구현했습니다.",
      action: "개발 경험 보기",
      href: "https://github.com/k65860",
    },
    {
      eyebrow: "Consistency",
      title: "배스킨라빈스 5년 4개월",
      desc: "장기 근속과 무지각으로 약속 시간, 인수인계, 맡은 일을 끝까지 책임지는 태도를 증명했습니다.",
      action: "Resume 보기",
      href: "/resume.pdf",
    },
  ];

  return (
    <section id="evidence" className="scroll-mt-28 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Writing & Evidence"
          title="기록, 공유, 지속성도 개발 방식의 일부입니다."
          desc="프로젝트 밖에서도 배운 것을 정리하고, 다른 사람에게 전달하며, 맡은 일을 꾸준히 이어왔습니다."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {evidenceCards.map((card) => (
            <motion.article
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex min-h-[285px] flex-col rounded-[2rem] border border-[#F3DED2] bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C57966]">
                {card.eyebrow}
              </p>

              <h3 className="mt-5 break-keep text-2xl font-black tracking-[-0.04em] text-[#2F2A28]">
                {card.title}
              </h3>

              <p className="mt-4 break-keep leading-7 text-[#665752]">
                {card.desc}
              </p>

              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#B05F4D] transition hover:translate-x-1"
              >
                {card.action} <FiArrowRight />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 rounded-[2rem] border border-[#F3DED2] bg-[#FFF9F6] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C57966]">
              Now Building
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#2F2A28]">
              Next.js 기반 추억저장소
            </h3>
            <p className="mt-3 break-keep leading-7 text-[#665752]">
              사진과 기록을 저장하고 다시 꺼내볼 수 있는 개인 아카이브 서비스를
              개발하며 Next.js App Router를 학습하고 있습니다.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-0 md:justify-end">
            {["Next.js", "App Router", "TypeScript", "UI Architecture"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3.5 py-2 text-xs font-black text-[#6F625C] shadow-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C57966]">
            Skills
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "JavaScript",
              "HTML/CSS",
              "REST API",
              "Axios",
              "Recoil",
              "SQL",
              "Figma",
              "Notion",
              "GitHub",
              "Postman",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#F3DED2] bg-white px-4 py-2.5 text-sm font-black text-[#5F514C]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 pb-20 pt-8 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-[#2F2A28] to-[#604C44] p-9 text-white md:p-14"
        >
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FFD6C8]">
            Contact
          </p>

          <h2 className="mt-5 break-keep text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            구조를 이해하고,
            <br />
            사용자 경험으로 구현하겠습니다.
          </h2>

          <p className="mt-5 max-w-2xl break-keep leading-8 text-white/75">
            GitHub, Velog, 이력서와 연락처를 한 번에 확인할 수 있도록
            정리했습니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:jiyeon020327@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#2F2A28] transition hover:-translate-y-1"
            >
              메일 보내기 <FiMail />
            </a>

            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1"
            >
              GitHub <FiGithub />
            </a>

            <a
              href="https://velog.io/@k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1"
            >
              Velog <FiExternalLink />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1"
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
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C57966]">
        {eyebrow}
      </p>
      <h2 className="mt-5 break-keep text-4xl font-black leading-tight tracking-[-0.05em] text-[#2F2A28] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 break-keep leading-8 text-[#6F625C]">{desc}</p>
    </div>
  );
}

function GalleryCard({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group overflow-hidden rounded-[1.5rem] border border-[#F3DED2] bg-[#FFF9F6] text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(123,83,60,0.1)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={image.src}
          alt={image.caption}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-[#2F2A28]/0 opacity-0 transition group-hover:bg-[#2F2A28]/20 group-hover:opacity-100">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#2F2A28] shadow-sm">
            크게 보기
          </span>
        </div>
      </div>

      <p className="min-h-[74px] border-t border-[#F3DED2] bg-white px-4 py-3 text-sm font-bold leading-6 text-[#5F514C]">
        {image.caption}
      </p>
    </button>
  );
}

function ImageModal({
  modal,
  onClose,
  onPrevious,
  onNext,
}: {
  modal: ModalState;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const currentImage = modal.images[modal.currentIndex];
  const hasMultipleImages = modal.images.length > 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2F2A28]/75 px-5 py-8 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#F3DED2] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#F3DED2] bg-[#FFF9F6] px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C57966]">
              {modal.title}
            </p>
            <p className="mt-1 text-sm font-bold text-[#5F514C]">
              {currentImage.caption}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-[#2F2A28] shadow-sm transition hover:bg-[#FFDCD3]"
            aria-label="이미지 닫기"
          >
            <FiX />
          </button>
        </div>

        <div className="relative h-[min(68vh,720px)] bg-white">
          <Image
            src={currentImage.src}
            alt={currentImage.caption}
            fill
            sizes="100vw"
            className="object-contain p-4 md:p-8"
          />

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={onPrevious}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2F2A28] shadow-md transition hover:bg-[#FFDCD3]"
                aria-label="이전 이미지"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                onClick={onNext}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2F2A28] shadow-md transition hover:bg-[#FFDCD3]"
                aria-label="다음 이미지"
              >
                <FiChevronRight />
              </button>

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#2F2A28]/85 px-3 py-1.5 text-xs font-black text-white">
                {modal.currentIndex + 1} / {modal.images.length}
              </span>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
