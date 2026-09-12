import React from "react";
import { motion } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiSelenium,
  SiCucumber,
  SiApachejmeter,
  SiK6,
} from "react-icons/si";
import SectionTag from "./SectionTag";
import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";
import { getSectionColor } from "../theme/sectionColors";

// Grouped four-to-a-card so every row stays balanced instead of leaving a
// short, lopsided final row. Everything here is drawn from the stacks
// actually used across the projects below.
const GROUPS = [
  {
    title: "Languages",
    blurb: "The core I write in day to day",
    accent: "#F7DF1E",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces and the tooling around them",
    accent: "#61DAFB",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Vite", Icon: SiVite, color: "#B152FF" },
      { name: "Material UI", Icon: SiMui, color: "#3B8CFF" },
    ],
  },
  {
    title: "Backend",
    blurb: "Services, sockets and API surfaces",
    accent: "#83CD29",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#83CD29" },
      { name: "Express", Icon: SiExpress, color: "#DDDDDD" },
      { name: "Socket.IO", Icon: SiSocketdotio, color: "#8AD7FF" },
      { name: "REST / JWT", Icon: SiJsonwebtokens, color: "#D264FF" },
    ],
  },
  {
    title: "Databases",
    blurb: "Relational, document and embedded",
    accent: "#47A248",
    items: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#5A86F0" },
      { name: "SQLite", Icon: SiSqlite, color: "#3FA9E8" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Tools",
    blurb: "Shipping, containers and pipelines",
    accent: "#2496ED",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#4BA6F5" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#5CA8FF" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Testing & QA",
    blurb: "Automation, BDD and load profiling",
    accent: "#E2557D",
    items: [
      { name: "Selenium", Icon: SiSelenium, color: "#5BC93F" },
      { name: "Cucumber", Icon: SiCucumber, color: "#3FD86B" },
      { name: "JMeter", Icon: SiApachejmeter, color: "#EC5B63" },
      { name: "k6", Icon: SiK6, color: "#9A85FF" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Skills() {
  const color = getSectionColor("skills");

  return (
    <section name="skills" className="relative overflow-hidden">
      <SectionDivider color={color} />
      <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_50%_-10%,#5a6b1a_0%,#33401a_22%,#1C1714_60%)]"></div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-lime/25 rounded-full blur-[170px] animate-float-slow"></div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 md:py-28">
        <SectionTag index="03" label="Toolkit" color={color} />
        <Reveal>
          <h2 className="section-heading">
            The stack behind <span className="text-lime">the work</span>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-cream/65 leading-relaxed max-w-2xl -mt-2">
            Grouped by where each piece sits in a system, from the language in
            the editor down to the database and the pipeline that ships it.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10"
        >
          {GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={card}
              whileHover={{ y: -5 }}
              style={{ "--accent": group.accent }}
              className="group relative rounded-2xl bg-cream/[0.04] border border-cream/10 p-6 overflow-hidden transition-colors duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_20px_45px_-18px_var(--accent)]"
            >
              <div
                className="absolute -top-16 -right-10 w-40 h-40 rounded-full opacity-[0.12] blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                style={{ background: group.accent }}
              ></div>

              <div className="relative flex items-baseline justify-between gap-3 mb-1">
                <h3 className="font-display text-lg font-semibold text-cream">
                  {group.title}
                </h3>
                <span
                  className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: group.accent }}
                >
                  {group.items.length} tools
                </span>
              </div>
              <p className="relative text-xs text-cream/50 mb-5">
                {group.blurb}
              </p>

              <div className="relative grid grid-cols-2 gap-2.5">
                {group.items.map(({ name, Icon, color: itemColor }) => (
                  <div
                    key={name}
                    title={name}
                    style={{ "--brand": itemColor }}
                    className="flex items-center gap-2.5 rounded-xl bg-espresso/40 border border-cream/10 px-3 py-2.5 transition-colors duration-300 hover:border-[var(--brand)] hover:bg-[var(--brand)]/10"
                  >
                    <Icon className="text-lg shrink-0 text-[var(--brand)]" />
                    <span className="text-xs font-medium text-cream/80 truncate">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
