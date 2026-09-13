import { useEffect, useState } from "react";
import { SECTION_THEME, getSectionColor } from "../theme/sectionColors";

/**
 * Tracks which portfolio section currently owns the viewport, and paints the
 * matching accent onto the document (used by the header + right scrollbar).
 */
export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    function compute() {
      const vh = window.innerHeight;
      // Activate a section once its top crosses the upper-middle of the screen,
      // so Contact lights up while you're reading it — not only at the footer.
      const probe = vh * 0.4;
      let current = "home";
      let mostVisible = "home";
      let maxVisible = 0;

      for (const section of SECTION_THEME) {
        const el = document.querySelector(`section[name="${section.name}"]`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        if (rect.top <= probe) current = section.name;

        const visible =
          Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
        if (visible > maxVisible) {
          maxVisible = visible;
          mostVisible = section.name;
        }
      }

      // If one section clearly fills the screen, prefer it over the probe.
      if (maxVisible > vh * 0.45) current = mostVisible;

      setActive((prev) => (prev === current ? prev : current));
      document.documentElement.style.setProperty(
        "--section-accent",
        getSectionColor(current)
      );
    }

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    const settle = window.setTimeout(compute, 350);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      window.clearTimeout(settle);
    };
  }, []);

  return active;
}
