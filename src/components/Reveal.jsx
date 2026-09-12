import React from "react";
import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.25,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
