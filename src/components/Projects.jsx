import React from "react";
import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";
import { getSectionColor } from "../theme/sectionColors";

// Flat timeline. ChorKaun and Fake Answer Party sit right after Decision Pulse AI.
const projects = [
  {
    title: "Pulse QA",
    description:
      "A test automation platform that makes test creation approachable through record-and-playback, cutting out most manual scripting. It runs cases across multiple devices and platforms for broader coverage, and uses AI-driven stability so tests adapt to UI changes instead of turning flaky. Runs are monitored live, with failures surfaced the moment they happen alongside suggested fixes, and parallel execution keeps whole suites fast.",
    tech: ["React", "Vite", "Selenium", "Cucumber", "BrowserStack", "CI/CD"],
  },
  {
    title: "Load Testing",
    description:
      "Performance testing for Power BI reporting, using JMeter, k6 and Locust to simulate concurrent users and confirm the system held up under real demand. Custom load profiles reproduced spike, soak and stress patterns, while API monitoring tracked response times for DAX queries and filter applications. That combination pinpointed the bottlenecks — slow-loading visuals and expensive DAX — and made the optimisation work targeted rather than speculative.",
    tech: ["JMeter", "k6", "Locust", "React", "Power BI"],
  },
  {
    title: "Decision Pulse AI",
    description:
      "An analytics platform with natural-language querying, so users could generate charts and insights through a chat interface rather than a query builder. A drag-and-drop dashboarding layer removed the need for developer involvement entirely, and ML models ran underneath to surface trends, anomalies and outliers automatically. It also recommended KPIs based on dataset structure and business context, and embedded into other web apps through an iFrame or SDK.",
    tech: ["React", "Node.js", "NLP", "ML Models", "Embedded Analytics"],
  },
  {
    title: "ChorKaun",
    description:
      "A real-time, four-player web game built around the classic Raja · Mantri · Chor · Sipahi format. Players create a room, share a six-digit code and play live, with role reveals, a host-controlled round flow, an in-game leaderboard and a push-to-talk voice mode. React and Vite on the front, Express, Socket.IO and SQLite behind it, packaged as a single Docker image so the frontend, API and WebSockets all run behind one URL.",
    tech: ["TypeScript", "React", "Express", "Socket.IO", "SQLite", "Docker"],
  },
  {
    title: "Fake Answer Party",
    description:
      "An online bluffing party game in the spirit of Fibbage — players submit fake answers to fool each other, scoring points both for correct guesses and successful bluffs. Rooms and voting run in real time over Socket.IO, with a React and Vite frontend, a Node and Express backend, and PostgreSQL via Supabase storing questions and player history across game modes like Fake News, Logo Challenge and World Trivia.",
    tech: ["React", "Material UI", "Express", "Socket.IO", "PostgreSQL", "Supabase"],
  },
  {
    title: "Doctor Management System",
    description:
      "An appointment platform built on a centralised Express and Node.js server, written with modern ES6 throughout and documented in Postman so the API stayed usable by the rest of the team. The React front end handled booking flows for patients, while Twilio and Microsoft Teams integrations in the Node backend covered appointment notifications and clinician communication.",
    tech: ["Node.js", "Express", "React", "Twilio", "MS Teams", "Postman"],
  },
  {
    title: "Room Rental Website",
    description:
      "A rental marketplace where I built the APIs and the accompanying unit test suite, handling Firestore API development in Node.js and the React front end on top. Owners could list rooms with photographs, pricing and availability windows, while renters filtered by location and budget and sent booking requests without leaving the site. Firestore security rules and role-based access kept listing and enquiry data scoped to the right accounts, and the test suite covered the booking and availability paths so double-bookings could not slip through.",
    tech: ["React", "Node.js", "Firestore", "Unit Testing"],
  },
];

function Projects() {
  const color = getSectionColor("projects");

  return (
    <section name="projects" className="relative overflow-hidden">
      <SectionDivider color={color} />
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#3a2a1f_0%,#241a14_35%,#1C1714_65%)]"></div>
      <div className="absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-coffee/50 rounded-full blur-[160px]"></div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 md:py-28">
        <SectionTag index="04" label="What I've Built" color={color} />
        <Reveal>
          <h2 className="section-heading">Projects</h2>
        </Reveal>

        <div className="relative mt-12 pl-8 md:pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              background: `linear-gradient(to bottom, ${color}, transparent)`,
            }}
            className="absolute left-0 top-0 bottom-0 w-px"
          ></motion.div>

          <div className="space-y-10">
            {projects.map(({ title, description, tech }, idx) => (
              <Reveal key={title} delay={idx * 0.06} y={20}>
                <div className="relative">
                  <span
                    style={{
                      background: color,
                      boxShadow: `0 0 14px ${color}cc`,
                    }}
                    className="absolute -left-8 md:-left-10 top-2 w-3.5 h-3.5 rounded-full"
                  ></span>
                  <div
                    style={{ "--accent": color }}
                    className="glass-card p-6 md:p-8 hover:border-[var(--accent)]/50 transition-colors duration-300"
                  >
                    <h3 className="font-display text-2xl font-bold text-cream mb-3">
                      {title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed text-sm md:text-base">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-cream/15 bg-cream/[0.04] px-2.5 py-1 text-[0.7rem] font-medium text-cream/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
