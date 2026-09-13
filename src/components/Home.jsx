import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaNode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import photo from "../assets/panda-cutout.png";
import Resume from "../assets/Avinash-Singh-Resume.pdf";
import SectionTag from "./SectionTag";
import SectionDivider from "./SectionDivider";
import { getSectionColor } from "../theme/sectionColors";

const stack = [
  { Icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: FaNode, name: "Node", color: "#83CD29" },
  { Icon: SiExpress, name: "Express", color: "#E8E8E8" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  return (
    <section name="home" className="relative overflow-hidden">
      <SectionDivider color={getSectionColor("home")} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_-10%,#0b4a38_0%,#022E21_28%,#16241c_55%,#1C1714_78%)]"></div>
      <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-teal/60 rounded-full blur-[150px] animate-float-slow"></div>
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-lime/20 rounded-full blur-[160px] animate-float"></div>
      <div className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] bg-burgundy/70 rounded-full blur-[150px]"></div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:w-1/2 order-2 md:order-1 min-w-0 w-full"
          >
            <motion.div variants={item}>
              <SectionTag index="01" label="Introduction" color={getSectionColor("home")} />
            </motion.div>
            <motion.span variants={item} className="section-label">
              Software Engineer
            </motion.span>
            <motion.h1
              variants={item}
              className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight"
            >
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="shrink-0">I build</span>
                {/* Invisible longest phrase reserves width so typing never
                    expands the column and shoves the panda sideways. */}
                <span className="relative inline-grid align-baseline text-lime">
                  <span
                    className="invisible col-start-1 row-start-1 whitespace-nowrap"
                    aria-hidden="true"
                  >
                    real-time systems
                  </span>
                  <span className="col-start-1 row-start-1 whitespace-nowrap">
                    <ReactTyped
                      strings={[
                        "real-time systems",
                        "production APIs",
                        "polished UIs",
                      ]}
                      typeSpeed={45}
                      backSpeed={35}
                      backDelay={1600}
                      loop={true}
                    />
                  </span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-cream/70 leading-relaxed max-w-xl"
            >
              I work across the whole stack — React and TypeScript on the
              front, Node, Express and WebSockets behind it, and MongoDB,
              PostgreSQL or SQLite underneath. My work spans real-time
              multiplayer platforms, AI-assisted analytics tooling, and QA and
              performance automation built to hold up under load. I care as
              much about what happens when traffic spikes as I do about how the
              interface feels on a good day.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-10 mt-10">
              <div>
                <h2 className="text-xs tracking-[0.25em] uppercase text-sand mb-3">
                  Find Me On
                </h2>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Avinash123-singh"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cream/[0.08] to-cream/0 border border-cream/15 text-cream text-2xl shadow-inner hover:bg-cream hover:text-espresso hover:border-cream hover:shadow-[0_12px_30px_-8px_rgba(245,239,230,0.5)] transition-colors duration-300"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/avinash-singh-b67b5116b/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 text-[#4DA3FF] text-2xl hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_12px_30px_-8px_rgba(10,102,194,0.7)] transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.25em] uppercase text-sand mb-3">
                  Current Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {stack.map(({ Icon, name, color }) => (
                    <motion.span
                      key={name}
                      title={name}
                      whileHover={{ y: -4, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        "--brand": color,
                        boxShadow: `0 8px 22px -8px ${color}80`,
                      }}
                      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cream/[0.06] backdrop-blur-sm border border-cream/10 text-[var(--brand)] text-2xl hover:bg-[var(--brand)] hover:text-espresso hover:border-[var(--brand)] transition-colors duration-300"
                    >
                      <Icon />
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-12">
              <a href={Resume} download="Avinash-Singh-Resume.pdf">
                <button type="button" className="btn-primary">
                  Download Resume
                </button>
              </a>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <button className="btn-outline cursor-pointer">
                  Let&apos;s Talk
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:w-1/2 order-1 md:order-2 flex justify-center shrink-0"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <div className="absolute -inset-10 rounded-[3.5rem] bg-[conic-gradient(from_0deg,#CDFC8A,#022E21,#1A0A0F,#7B5A48,#CDFC8A)] blur-3xl opacity-70 animate-spin-slow"></div>
              <div className="absolute -inset-3 rounded-[3.2rem] bg-[conic-gradient(from_180deg,#7B5A48,#CDFC8A,#022E21,#1A0A0F,#7B5A48)] opacity-90 blur-md animate-spin-slow"></div>

              <div className="relative w-full h-full rounded-[3rem] bg-gradient-to-br from-[#3a2a1f] via-coffee to-[#241a14] p-3 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.7)] border border-lime/25">
                <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-[radial-gradient(120%_120%_at_25%_15%,#7B5A48_0%,#3a2416_35%,#022E21_68%,#1A0A0F_100%)] flex items-center justify-center">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime/25 rounded-full blur-[70px]"></div>
                  <div className="absolute -bottom-10 -right-6 w-44 h-44 bg-burgundy/60 rounded-full blur-[80px]"></div>
                  {/* Bright spotlight halo so the panda's black linework pops against the dark frame */}
                  <div className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,#F5EFE6_0%,#E7B673_38%,#CDFC8A_60%,transparent_75%)] opacity-[0.55] blur-2xl"></div>
                  <div className="absolute w-[62%] h-[62%] rounded-full bg-cream/70 blur-xl"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_100%,transparent_55%,rgba(0,0,0,0.4)_100%)]"></div>
                  <img
                    src={photo}
                    alt="Avinash Singh"
                    className="relative w-[82%] h-[82%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
