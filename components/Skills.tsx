"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeUp } from "@/constants/animations";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D88F73]">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-black text-[#2F2A28] md:text-4xl">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2 rounded-full border border-[#FFE8CD] bg-white/75 px-4 py-3 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md"
              title={skill.desc}
            >
              <span
                className="text-xl transition group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>

              <span className="text-sm font-bold text-[#6F625C]">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
