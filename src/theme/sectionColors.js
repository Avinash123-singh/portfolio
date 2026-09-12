// Shared premium color-per-section theme used by SectionTag, ScrollRail,
// and the section divider glow so the whole site reads as one coherent system.
export const SECTION_THEME = [
  { name: "home", index: "01", label: "Introduction", color: "#CDFC8A" },
  { name: "about", index: "02", label: "Background", color: "#E7B673" },
  { name: "skills", index: "03", label: "Toolkit", color: "#3FD8A6" },
  { name: "projects", index: "04", label: "What I've Built", color: "#E2557D" },
  { name: "contact", index: "05", label: "Contact", color: "#CDFC8A" },
];

export function getSectionColor(name) {
  const found = SECTION_THEME.find((s) => s.name === name);
  return found ? found.color : "#CDFC8A";
}
