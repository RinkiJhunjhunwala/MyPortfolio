
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];


function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    function onScroll() {
      let found = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) found = id;
        }
      }
      setActive(found);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

export default function Navbar() {
  const sectionIds = navLinks.map(link => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navRefs = useRef([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = hoveredIdx !== null ? hoveredIdx : navLinks.findIndex(l => l.href.replace("#", "") === activeSection);
    if (navRefs.current[idx]) {
      const { offsetLeft: left, offsetWidth: width } = navRefs.current[idx];
      setUnderline({ left, width });
    }
  }, [hoveredIdx, activeSection]);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-violet-900/60 border-b border-violet-700 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4 relative">
        
        <a
          href="#home"
          aria-label="Go to Home"
          className="group cursor-pointer select-none"
        >
          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 12px #c7d2fe, 0 0 24px #a78bfa",
              color: "#a78bfa",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl font-extrabold tracking-wide flex items-center"
            style={{
              fontFamily: "'Fira Mono', monospace",
              letterSpacing: "0.1em",
            }}
          >
            <span className="text-violet-400">&lt;</span>
            <span className="mx-2 text-white">Rinki Jhunjhunwala</span>
            <span className="text-violet-400">/&gt;</span>
          </motion.span>
        </a>

        
        <div className="hidden md:flex space-x-6 relative">
          {navLinks.map((link, i) => {
            const isActive = link.href.replace("#", "") === activeSection;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                ref={el => (navRefs.current[i] = el)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative px-4 py-2 rounded-md font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "text-violet-300"
                      : "text-violet-200 hover:text-violet-400"
                  }
                `}
                style={{
                  zIndex: isActive ? 10 : 1,
                }}
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            );
          })}

          
          <motion.div
            className="absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400 shadow-md"
            animate={{
              left: underline.left,
              width: underline.width,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </motion.nav>
  );
}

