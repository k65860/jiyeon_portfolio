"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiExternalLink, FiGithub, FiMail } from "react-icons/fi";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fadeUp } from "@/constants/animations";

function Header() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-[#FFF2EB]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="text-xl font-black text-[#2F2A28]">
          김지연의 포트폴리오
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-[#6F625C] transition hover:text-[#D88F73]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-[#FFDCDC] blur-3xl" />
        <div className="absolute right-[-10%] top-[25%] h-96 w-96 rounded-full bg-[#FFD6BA] blur-3xl" />
        <div className="absolute bottom-[5%] left-[30%] h-72 w-72 rounded-full bg-[#FFF8D6] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D88F73]">
            Frontend Developer
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-[#2F2A28] md:text-7xl">
            사용자 흐름을
            <br />
            구현하는 개발자
            <br />
            김지연입니다.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6F625C]">
            React와 TypeScript를 기반으로 사용자가 자연스럽게 서비스를 이해하고
            사용할 수 있는 화면 흐름을 구현합니다. 학습한 내용을 기록하고,
            프로젝트에서 직접 부딪힌 문제를 해결하며 성장하고 있습니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F2A28] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              프로젝트 보기 <FiArrowDown />
            </a>

            <a
              href="https://github.com/k65860"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/75 px-6 py-4 text-sm font-bold text-[#2F2A28] shadow-sm transition hover:-translate-y-1"
            >
              GitHub <FiGithub />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-[2.5rem] border border-[#FFE8CD] bg-white/65 p-8 shadow-[0_24px_80px_rgba(123,83,60,0.12)] backdrop-blur-md"
        >
          <div className="rounded-[2rem] bg-gradient-to-br from-[#FFDCDC] via-[#FFF2EB] to-[#FFD6BA] p-7">
            <p className="text-sm font-black text-[#9A6A54]">PORTFOLIO</p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#2F2A28]">
              꾸준함,
              <br />
              성실함,
              <br />
              책임감
            </h2>

            <p className="mt-6 leading-7 text-[#6F625C]">
              블로그에 React, TypeScript, API 연동, 프로젝트 회고 등 70개 이상의
              글을 기록하며 배운 내용을 제 것으로 만들고 있습니다.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="https://velog.io/@k65860"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-white/70 px-5 py-4 text-sm font-bold text-[#2F2A28]"
              >
                Velog <FiExternalLink />
              </a>

              <a
                href="mailto:jiyeon020327@gmail.com"
                className="flex items-center justify-between rounded-2xl bg-white/70 px-5 py-4 text-sm font-bold text-[#2F2A28]"
              >
                Email <FiMail />
              </a>
            </div>
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

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="배운 것을 기록하고, 구현으로 연결합니다."
          desc="프론트엔드 개발자로서 화면을 예쁘게 만드는 것뿐만 아니라 사용자가 어떤 순서로 서비스를 이해하고 행동하는지 고민합니다."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "사용자 흐름 구현",
              desc: "로그인, 마이페이지, 캘린더, 모달, 추천 흐름처럼 사용자의 행동이 이어지는 화면을 구현했습니다.",
            },
            {
              title: "API 연동 경험",
              desc: "GET, POST, PUT, DELETE 요청을 실제 프로젝트에 적용하고 응답 데이터 기준으로 화면 상태를 갱신했습니다.",
            },
            {
              title: "기록하는 학습 습관",
              desc: "React, TypeScript, API 연동, 프로젝트 회고 등을 블로그에 꾸준히 기록하며 학습 내용을 정리했습니다.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[1.7rem] border border-[#FFE8CD] bg-white/65 p-7 shadow-sm backdrop-blur-md"
            >
              <h3 className="text-xl font-black text-[#2F2A28]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[#6F625C]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "삼육대학교 멋쟁이사자처럼 부원 및 운영진",
      period: "2021.03 - 2023.03",
      desc: "HTML, CSS, JavaScript, Python 등 웹 개발 기초를 학습하고 운영진으로 활동했습니다.",
    },
    {
      title: "멋쟁이사자처럼 해커톤 참가",
      period: "2022.08.19 - 2022.08.20",
      desc: "무박 2일 해커톤에 참여하며 짧은 시간 안에 아이디어를 서비스 형태로 구현하는 경험을 했습니다.",
    },
    {
      title: "SW 중심대학 해커톤 참가",
      period: "2023.06.28 - 2023.06.30",
      desc: "2박 3일간 팀 프로젝트를 진행하며 협업, 기능 분담, 발표 흐름을 경험했습니다.",
    },
    {
      title: "엘리스트랙 부트캠프 수료",
      period: "2023.12.25 - 2024.04.19",
      desc: "React, TypeScript 기반 프론트엔드 개발과 팀 프로젝트를 수행했습니다.",
    },
    {
      title: "SQLD 취득",
      period: "2026.03.27",
      desc: "데이터 모델링과 SQL 기본 개념을 학습하고 SQL 개발자 자격을 취득했습니다.",
    },
  ];

  return (
    <section id="experience" className="bg-white/45 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="학습과 협업 경험"
          desc="동아리, 해커톤, 부트캠프, 자격증 취득 경험을 통해 프론트엔드 개발자로 성장하기 위한 기반을 쌓았습니다."
        />

        <div className="mt-12 space-y-4">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="rounded-[1.7rem] border border-[#FFE8CD] bg-white/75 p-6 shadow-sm backdrop-blur-md md:flex md:items-start md:justify-between md:gap-8"
            >
              <div>
                <h3 className="text-xl font-black text-[#2F2A28]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6F625C]">{item.desc}</p>
              </div>

              <p className="mt-4 shrink-0 text-sm font-black text-[#D88F73] md:mt-0">
                {item.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#2F2A28] p-8 text-white md:p-12"
      >
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#FFD6BA]">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          함께 성장하는 프론트엔드 개발자가 되겠습니다.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
          사용자의 흐름을 이해하고, 팀과 소통하며, 배운 내용을 꾸준히 기록하는
          개발자가 되고 싶습니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:jiyeon020327@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
          >
            Email <FiMail />
          </a>

          <a
            href="https://github.com/k65860"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
          >
            GitHub <FiGithub />
          </a>

          <a
            href="https://velog.io/@k65860"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
          >
            Velog <FiExternalLink />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

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
