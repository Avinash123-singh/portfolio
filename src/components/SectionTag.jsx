import React from "react";
import { motion } from "framer-motion";

function SectionTag({ index, label, color = "#CDFC8A" }) {
  return (
    <div className="relative mb-8">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 -left-1 font-display font-bold text-cream/[0.05] text-[7rem] md:text-[9rem] leading-none"
      >
        {index}
      </span>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative inline-flex flex-col gap-3"
      >
        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
          <span style={{ color }}>{index}</span>
          <span className="text-cream/60">{label}</span>
        </span>

        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          style={{
            transformOrigin: "left",
            background: `linear-gradient(90deg, ${color}, transparent)`,
            boxShadow: `0 0 12px ${color}80`,
          }}
          className="h-[3px] w-24 rounded-full"
        ></motion.span>
      </motion.div>
    </div>
  );
}

export default SectionTag;
