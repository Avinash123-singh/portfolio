import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

// Waypoints sampled along the SVG flight path below, expressed as percentages
// so the plane tracks the drawn arc at any card width.
const FLIGHT = {
  left: ["6%", "23%", "43%", "67%", "90%"],
  top: ["79%", "62%", "43%", "30%", "25%"],
  rotate: [-18, -26, -20, -12, -8],
};

const CONFETTI = [
  { color: "#CDFC8A", angle: -20, distance: 70, size: 7, delay: 0 },
  { color: "#E7B673", angle: 20, distance: 58, size: 5, delay: 0.04 },
  { color: "#3FD8A6", angle: 65, distance: 66, size: 6, delay: 0.02 },
  { color: "#E2557D", angle: 115, distance: 54, size: 5, delay: 0.07 },
  { color: "#CDFC8A", angle: 160, distance: 72, size: 6, delay: 0.05 },
  { color: "#F5EFE6", angle: 200, distance: 48, size: 4, delay: 0.09 },
  { color: "#3FD8A6", angle: 245, distance: 64, size: 6, delay: 0.03 },
  { color: "#E7B673", angle: 290, distance: 56, size: 5, delay: 0.08 },
  { color: "#CDFC8A", angle: 330, distance: 68, size: 7, delay: 0.06 },
  { color: "#F5EFE6", angle: 45, distance: 80, size: 4, delay: 0.11 },
  { color: "#E2557D", angle: 135, distance: 76, size: 5, delay: 0.1 },
  { color: "#3FD8A6", angle: 300, distance: 82, size: 4, delay: 0.12 },
];

function MessageSent({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-6">
      {/* Flight stage: the message physically leaves and gets stamped. */}
      <div className="relative w-full max-w-[320px] h-[130px] mb-2">
        <svg
          viewBox="0 0 300 120"
          fill="none"
          className="absolute inset-0 w-full h-full overflow-visible"
          aria-hidden="true"
        >
          <motion.path
            d="M20 95 C 90 95, 150 20, 272 30"
            stroke="#CDFC8A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 9"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.9, 0.35] }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
          />
        </svg>

        {/* Launch pad glow. */}
        <motion.span
          initial={{ scale: 0.4, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute left-[6%] top-[79%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-lime/50 blur-md"
        ></motion.span>

        <motion.div
          initial={{ left: FLIGHT.left[0], top: FLIGHT.top[0], opacity: 0 }}
          animate={{
            left: FLIGHT.left,
            top: FLIGHT.top,
            rotate: FLIGHT.rotate,
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{ duration: 1.35, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-lime text-2xl drop-shadow-[0_0_12px_rgba(205,252,138,0.8)]"
        >
          <FaPaperPlane />
        </motion.div>

        {/* Arrival: confetti burst then a rubber-stamp slam. */}
        <div className="absolute left-[90%] top-[25%]">
          {CONFETTI.map((piece, i) => {
            const radians = (piece.angle * Math.PI) / 180;
            return (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(radians) * piece.distance,
                  y: Math.sin(radians) * piece.distance,
                  scale: [0, 1, 0.4],
                  opacity: [0, 1, 0],
                  rotate: piece.angle * 2,
                }}
                transition={{
                  duration: 0.9,
                  delay: 1.2 + piece.delay,
                  ease: "easeOut",
                }}
                style={{
                  backgroundColor: piece.color,
                  width: piece.size,
                  height: piece.size,
                }}
                className="absolute rounded-[2px]"
              ></motion.span>
            );
          })}

          <motion.span
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 3.4, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-lime"
          ></motion.span>
        </div>

        <motion.div
          initial={{ scale: 2.6, opacity: 0, rotate: -24 }}
          animate={{ scale: 1, opacity: 1, rotate: -11 }}
          transition={{
            delay: 1.35,
            type: "spring",
            stiffness: 320,
            damping: 14,
          }}
          className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-[3px] border-lime px-4 py-1.5"
        >
          <span className="font-display text-lg md:text-xl font-bold tracking-[0.2em] text-lime">
            DELIVERED
          </span>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="font-display text-3xl md:text-4xl font-bold text-cream mb-3"
      >
        Thank You!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="text-cream/70 max-w-xs text-base"
      >
        Your message is on its way. I read everything and will reply as soon as
        I can.
      </motion.p>
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.95 }}
        onClick={onReset}
        className="mt-8 text-sm font-semibold uppercase tracking-widest text-lime hover:underline"
      >
        Send another message
      </motion.button>
    </div>
  );
}

export default MessageSent;
