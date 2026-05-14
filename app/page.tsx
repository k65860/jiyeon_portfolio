"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiStyledcomponents,
  SiAxios,
  SiPostman,
  SiGithub,
  SiFigma,
  SiNotion,
  SiVercel,
} from "react-icons/si";
import { FiExternalLink, FiGithub, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
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

const projects = [
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
      "전체 페이지 라우팅 및 공통 레이아웃 설계",
      "일반 로그인 플로우 구현",
      "마이페이지 사용자 정보 조회/수정 API 연동",
      "반려동물 카드 CRUD 및 수정 모달 구현",
      "게시글 목록 조회 및 질병 그룹별 필터링 UI 구현",
    ],
    problem:
      "회원가입/로그인 이후 사용자 정보가 여러 페이지에서 필요했지만, 페이지마다 API를 다시 호출하면 중복 코드와 불필요한 요청이 발생했습니다.",
    solution:
      "로그인 사용자 정보를 전역 상태로 관리하고, 마이페이지와 유저페이지에서 동일한 사용자 데이터를 재사용하도록 구조를 정리했습니다.",
    result:
      "사용자 정보 조회 로직이 단순해졌고, 프로필 수정 후 화면 반영 흐름을 일관되게 관리할 수 있었습니다.",
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF2EB] text-[#2F2A28]">
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
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#FFE8CD] bg-white/70 px-6 py-3 shadow-sm backdrop-blur-md">
        <a href="#" className="text-sm font-bold tracking-tight text-[#2F2A28]">
          Jiyeon Kim
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#6F625C] md:flex">
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
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pt-28">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#FFDCDC] blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-96 w-96 rounded-full bg-[#FFD6BA] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-[#FFD6BA] bg-white/60 px-4 py-2 text-sm font-semibold text-[#9A6A54]">
            Frontend Developer
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#2F2A28] md:text-6xl">
            사용자 흐름을 설계하는
            <br />
            프론트엔드 개발자
            <br />
            <span className="bg-gradient-to-r from-[#D88F73] to-[#B86B82] bg-clip-text text-transparent">
              김지연입니다.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6F625C]">
            React와 TypeScript를 기반으로 사용자 입력, 상태 관리, API 연동
            흐름을 구현하며 사용자가 자연스럽게 서비스를 이용할 수 있는 화면을
            만듭니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[#FFD6BA] px-6 py-3 text-sm font-bold text-[#2F2A28] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              프로젝트 보기
            </a>
            <a
              href="https://github.com/k65860"
              target="_blank"
              className="rounded-full border border-[#FFD6BA] bg-white/70 px-6 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1 hover:shadow-md"
            >
              GitHub
            </a>
            <a
              href="https://velog.io/@k65860"
              target="_blank"
              className="rounded-full border border-[#FFD6BA] bg-white/70 px-6 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1 hover:shadow-md"
            >
              Velog
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-[2rem] border border-[#FFE8CD] bg-white/70 p-7 shadow-[0_24px_80px_rgba(123,83,60,0.12)] backdrop-blur-md"
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FFDCDC] via-[#FFF2EB] to-[#FFD6BA] p-8">
            <p className="text-sm font-bold text-[#9A6A54]">
              Portfolio Summary
            </p>

            <div className="mt-8 space-y-5">
              <SummaryItem label="Main Stack" value="React · TypeScript" />
              <SummaryItem label="Focus" value="UI Flow · API Integration" />
              <SummaryItem label="Blog" value="70+ Posts" />
              <SummaryItem label="Certificate" value="SQLD" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/65 p-5">
      <p className="text-sm text-[#9A8175]">{label}</p>
      <p className="mt-1 text-xl font-black text-[#2F2A28]">{value}</p>
    </div>
  );
}

function About() {
  const aboutCards = [
    {
      title: "기록하며 성장합니다",
      desc: "학습한 내용을 블로그에 정리하고 프로젝트 회고를 남기며 배운 내용을 내 것으로 만듭니다.",
    },
    {
      title: "사용자 흐름을 중요하게 생각합니다",
      desc: "로그인, 정보 수정, 기록 작성, 추천 결과 확인처럼 사용자가 실제로 거치는 흐름을 기준으로 UI를 구현합니다.",
    },
    {
      title: "협업 가능한 구조를 만듭니다",
      desc: "페이지 명세서, API 명세서, Figma 프로토타입을 활용해 팀원들이 구현 범위를 명확히 이해할 수 있도록 정리합니다.",
    },
  ];

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="배운 것을 기록하고 사용자 흐름으로 연결합니다."
          desc="프론트엔드 개발자로서 화면을 단순히 만드는 것보다 사용자가 서비스를 이용하는 과정이 자연스럽게 이어지는지 고민합니다."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[2rem] border border-[#FFE8CD] bg-white/70 p-7 shadow-sm backdrop-blur-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-sm font-black text-[#D88F73]">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-black text-[#2F2A28]">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-[#6F625C]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white/45 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="직접 구현한 사용자 흐름 중심 프로젝트"
          desc="프로젝트별로 담당 역할, 구현 기능, 문제 해결 경험이 드러나도록 구성했습니다."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-[#FFE8CD] bg-white/75 shadow-[0_24px_80px_rgba(123,83,60,0.08)] backdrop-blur-md"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-gradient-to-br from-[#FFDCDC] via-[#FFF2EB] to-[#FFD6BA] p-8 md:p-10">
                  <p className="text-sm font-black text-[#9A6A54]">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-4xl font-black text-[#2F2A28]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-[#6F625C]">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#9A8175]">
                    {project.period}
                  </p>
                  <p className="mt-6 leading-7 text-[#6F625C]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/65 px-3 py-2 text-xs font-bold text-[#6F625C]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.service && (
                      <a
                        href={project.service}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-[#2F2A28] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
                      >
                        Service <FiExternalLink />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-white/75 px-5 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
                    >
                      GitHub <FiGithub />
                    </a>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h4 className="text-lg font-black text-[#2F2A28]">
                    담당 역할
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {project.roles.map((role) => (
                      <li
                        key={role}
                        className="flex gap-3 leading-7 text-[#6F625C]"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D88F73]" />
                        {role}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid gap-4">
                    <ProblemBox title="문제" text={project.problem} />
                    <ProblemBox title="해결" text={project.solution} />
                    <ProblemBox title="결과" text={project.result} />
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

function ProblemBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-[#FFE8CD] bg-[#FFF8F4] p-5">
      <p className="text-sm font-black text-[#D88F73]">{title}</p>
      <p className="mt-2 leading-7 text-[#6F625C]">{text}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="기술을 사용자 흐름 구현에 연결합니다."
          desc="단순히 기술을 사용했다는 것보다, 프로젝트에서 어떤 역할로 활용했는지를 보여주도록 구성했습니다."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="group rounded-[1.7rem] border border-[#FFE8CD] bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm transition group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-[#2F2A28]">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6F625C]">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-white/45 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="학습과 협업 경험"
          desc="프론트엔드 개발자로 성장하기 위해 학습, 해커톤, 부트캠프 경험을 쌓았습니다."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <TimelineCard
            title="Education"
            items={[
              "삼육대학교 인공지능융합학부 / 컴퓨터공학부 복수전공",
              "2021.03 - 2026.02",
            ]}
          />
          <TimelineCard
            title="Activities"
            items={[
              "삼육대학교 멋쟁이사자처럼 운영진",
              "멋쟁이사자처럼 해커톤 참가",
              "SW 중심대학 해커톤 참가",
              "엘리스트랙 프론트엔드&백엔드 웹 개발자 트랙 수료",
            ]}
          />
          <TimelineCard title="자격증" items={["제 60회 SQL 개발자 취득"]} />
          <TimelineCard
            title="Profile"
            items={[
              "Velog: velog.io/@k65860",
              "GitHub: github.com/k65860",
              "Email: jy_0327@naver.com",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[2rem] border border-[#FFE8CD] bg-white/75 p-7 shadow-sm">
      <h3 className="text-xl font-black text-[#2F2A28]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="leading-7 text-[#6F625C]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#FFE8CD] bg-gradient-to-br from-[#FFDCDC] via-[#FFF2EB] to-[#FFD6BA] p-10 text-center shadow-[0_24px_80px_rgba(123,83,60,0.12)] md:p-16"
      >
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9A6A54]">
          Contact
        </p>
        <h2 className="mt-5 text-3xl font-black leading-tight text-[#2F2A28] md:text-5xl">
          함께 사용자에게 더 좋은 흐름을 만드는
          <br />
          프론트엔드 개발자가 되고 싶습니다.
        </h2>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:jy_0327@naver.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#2F2A28] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
          >
            메일 보내기 <FiMail />
          </a>
          <a
            href="https://github.com/k65860"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-white/75 px-6 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
          >
            GitHub <FiGithub />
          </a>
          <a
            href="https://velog.io/@k65860"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-white/75 px-6 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
          >
            Velog <FiExternalLink />
          </a>
        </div>
      </motion.div>
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
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D88F73]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[#2F2A28] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#6F625C]">{desc}</p>
    </motion.div>
  );
}
