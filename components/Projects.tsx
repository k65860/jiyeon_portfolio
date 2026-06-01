"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import { fadeUp } from "@/constants/animations";
import Image from "next/image";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  desc: string;
};

function SectionTitle({ eyebrow, title, desc }: SectionTitleProps) {
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

function ProblemBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-[#FFE8CD] bg-[#FFF8F4] p-5">
      <p className="text-sm font-black text-[#D88F73]">{title}</p>
      <p className="mt-2 leading-7 text-[#6F625C]">{text}</p>
    </div>
  );
}

export default function Projects() {
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
                      className="inline-flex items-center gap-2 rounded-full bg-white/75 px-5 py-3 text-sm font-bold text-[#2F2A28] transition hover:-translate-y-1"
                    >
                      GitHub <FiGithub />
                    </a>
                  </div>
                </div>

                {project.images && project.images.length > 0 && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {project.images.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden rounded-[1.5rem] border border-[#FFE8CD] bg-white/80 shadow-sm"
                      >
                        <div className="relative aspect-[16/9] bg-[#FFF8F4]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <figcaption className="px-4 py-3 text-sm font-bold text-[#6F625C]">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

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
