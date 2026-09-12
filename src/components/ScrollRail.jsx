import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SECTION_THEME } from "../theme/sectionColors";

// A stop only counts as "reached" slightly before the line physically hits it,
// so the dot pops in exactly as the fill arrives rather than a beat late.
const REACH_TOLERANCE = 0.005;

function ScrollRail() {
  const [marks, setMarks] = useState([]);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Invisible while the page is at the very top; fades in as soon as the
  // user starts scrolling, so it never sits there doing nothing.
  const railOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.015, 1], [0, 1, 1]),
    { stiffness: 120, damping: 26 }
  );

  // Height grows with scroll — no full-height track drawn underneath.
  const fillHeight = useTransform(smooth, (v) => `${Math.max(v, 0) * 100}%`);
  const runnerTop = useTransform(smooth, (v) => `${v * 100}%`);

  useEffect(() => {
    function measure() {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const items = SECTION_THEME.map((s) => {
        const el = document.getElementsByName(s.name)[0];
        const top = el ? el.offsetTop : 0;
        const percent = total > 0 ? Math.min(Math.max(top / total, 0), 1) : 0;
        return { ...s, percent };
      });
      setMarks(items);
    }
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 800);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => smooth.on("change", setProgress), [smooth]);

  const gradient = `linear-gradient(to bottom, ${SECTION_THEME.map(
    (s) => s.color
  ).join(", ")})`;

  const reached = marks.filter((m) => progress >= m.percent - REACH_TOLERANCE);
  const currentColor = reached.length
    ? reached[reached.length - 1].color
    : SECTION_THEME[0].color;
  const atEnd = progress >= 0.995;

  return (
    <motion.div
      style={{ opacity: railOpacity }}
      className="hidden lg:flex fixed left-7 top-28 bottom-12 z-40 items-stretch pointer-events-none"
    >
      <div className="relative w-[4px] h-full overflow-visible">
        {/* Only the scrolled portion exists — nothing is pre-drawn ahead of it. */}
        <motion.div
          style={{ height: fillHeight, background: gradient }}
          className="absolute top-0 left-0 w-full rounded-full opacity-95 shadow-[0_0_10px_rgba(205,252,138,0.35)]"
        ></motion.div>

        {/* Stops are created the moment the scroll line arrives at them. */}
        {marks.map((m, i) => {
          const isReached = progress >= m.percent - REACH_TOLERANCE;
          if (!isReached) return null;
          const isCurrent = i === reached.length - 1;
          return (
            <motion.span
              key={m.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isCurrent ? 1.15 : 0.85, opacity: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              style={{
                top: `${m.percent * 100}%`,
                marginTop: "-9px",
                backgroundColor: m.color,
                boxShadow: isCurrent
                  ? `0 0 20px ${m.color}, 0 0 6px ${m.color}`
                  : `0 0 8px ${m.color}66`,
              }}
              className="absolute -left-[7px] w-[18px] h-[18px] rounded-full border-2 border-cream/50"
            ></motion.span>
          );
        })}

        <motion.div
          style={{ top: runnerTop, marginTop: "-9px" }}
          className="absolute -left-[7px] w-[18px] h-[18px] flex items-center justify-center"
        >
          <motion.span
            animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ backgroundColor: currentColor }}
            className="absolute w-[18px] h-[18px] rounded-full"
          ></motion.span>
          <motion.span
            animate={{ scale: atEnd ? 1.3 : 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 16 }}
            style={{
              backgroundColor: currentColor,
              boxShadow: `0 0 18px 3px ${currentColor}`,
            }}
            className="relative w-[14px] h-[14px] rounded-full border-2 border-cream/80"
          ></motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ScrollRail;
