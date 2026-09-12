import React from "react";
import SectionTag from "./SectionTag";
import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";
import { getSectionColor } from "../theme/sectionColors";

function About() {
  return (
    <section name="about" className="relative overflow-hidden">
      <SectionDivider color={getSectionColor("about")} />
      <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_85%_0%,#4a1420_0%,#2a0f14_30%,#1C1714_65%)]"></div>
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-burgundy rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-teal/30 rounded-full blur-[150px]"></div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 md:py-28">
        <SectionTag index="02" label="Background" color={getSectionColor("about")} />
        <Reveal>
          <h2 className="section-heading">
            Engineering that holds up{" "}
            <span className="text-lime">in production</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="font-display text-xl font-semibold text-lime mb-4">
                The Short Version
              </h3>
              <p className="text-cream/75 leading-relaxed">
                My work sits on both sides of the API boundary. On the server
                that means Node and Express services, WebSocket layers for
                anything real-time, and data modelled in MongoDB, PostgreSQL or
                SQLite depending on what the problem actually needs. On the
                client it means React and TypeScript, built to stay readable
                once a feature has been through three rounds of changes.
              </p>
              <p className="text-cream/75 leading-relaxed mt-4">
                Recent work has run from real-time multiplayer game backends
                and AI-assisted analytics tooling to QA automation and
                load-testing platforms — the kind of systems where a bug shows
                up as a stack trace at 2am rather than a misaligned button.
                That has made me fairly opinionated about logging, error paths
                and testing the unhappy cases.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card p-8 bg-teal/20 h-full">
              <h3 className="font-display text-xl font-semibold text-lime mb-4">
                What I Bring
              </h3>
              <ul className="space-y-3 text-cream/75 text-sm">
                <li>▸ End-to-end ownership, from schema to UI</li>
                <li>▸ Real-time architecture with Socket.IO</li>
                <li>▸ API design, documentation &amp; versioning</li>
                <li>▸ Automated testing and load profiling</li>
                <li>▸ Containerised deploys with Docker &amp; CI</li>
                <li>▸ Plain-language updates, no surprises</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="glass-card p-8 border-l-2 border-lime bg-burgundy/30">
            <h3 className="font-display text-xl font-semibold text-lime mb-3">
              How I Work
            </h3>
            <p className="text-cream/80 leading-relaxed">
              I would rather ship something small that works every time than
              something large that mostly does. In practice that means starting
              from the failure cases, keeping the code obvious enough that the
              next person can change it safely, and being honest about
              trade-offs and timelines early rather than late. Good software is
              mostly a long series of unglamorous decisions made carefully.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
