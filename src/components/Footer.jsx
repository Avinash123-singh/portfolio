import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-cream/10 py-8">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-cream/50">
        <p>Avinash Singh · All rights reserved.</p>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-cream/40 hover:text-lime cursor-pointer transition-colors duration-300 tracking-wide"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
