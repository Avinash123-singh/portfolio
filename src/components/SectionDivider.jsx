import React from "react";
import { motion } from "framer-motion";

// A full-width glowing seam that draws itself in right as a new section
// scrolls into place, so the switch from one section to the next is
// unmistakable even when the backgrounds are similar in tone.
function SectionDivider({ color = "#CDFC8A" }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-px overflow-visible z-20 pointer-events-none">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 24px 3px ${color}99`,
        }}
        className="h-[2px] w-full origin-center"
      ></motion.div>
    </div>
  );
}

export default SectionDivider;
