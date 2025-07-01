
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Cursor() {
  return (
    <motion.span
      aria-hidden="true"
      className="inline-block w-[3px] h-7 bg-nebula ml-2 rounded-sm"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    />
  );
}

const roles = [
  "💻 Apsiring Software Developer",
  "📱 App & Web Dev",
  "🤖 ML Enthusiast",
  "🌏 Open Source Contributor",
];

const getLongestRole = (arr) => arr.reduce((a, b) => (a.length > b.length ? a : b), "");
const longestRole = getLongestRole(roles);

export default function Hero() {
  const roleIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const role = useTransform(roleIndex, (idx) => roles[Math.floor(idx) % roles.length]);
  const text = useTransform(count, (latest) => (role.get() || "").slice(0, Math.round(latest)));

  // Adjust width based on longest role, slightly increased for bigger font
  const roleWidth = `${longestRole.length * 0.75}em`;

  useEffect(() => {
    let isCancelled = false;
    let idx = 0;

    function loop() {
      const currentRole = roles[idx % roles.length];
      animate(count, currentRole.length, {
        type: "tween",
        duration: 1.6,
        ease: "easeInOut",
        onUpdate: () => roleIndex.set(idx),
        onComplete: () => {
          setTimeout(() => {
            animate(count, 0, {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              onComplete: () => {
                idx++;
                if (!isCancelled) setTimeout(loop, 400);
              },
            });
          }, 900);
        },
      });
    }
    loop();
    return () => {
      isCancelled = true;
    };
  }, [count, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] mt-20 px-6 md:px-14 bg-gradient-to-b from-space/90 via-space/80 to-space flex items-center justify-center"
    >
      {/* Starry background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-16">
        {/* Left: Name */}
        <div className="md:flex-1 max-w-lg text-left">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight drop-shadow-md select-none">
            👋 Hi, I'm <span className="text-nebula tracking-wide">Rinki Jhunjhunwala</span>
          </h1>
        </div>

        {/* Right: Roles (single line) + Resume button below */}
        <div className="flex flex-col items-start md:items-start md:flex-1 max-w-md w-full">
          {/* Animated roles, fixed width */}
          <div
            className="flex items-center mb-6"
            style={{
              width: roleWidth,
              minWidth: roleWidth,
              maxWidth: roleWidth,
            }}
          >
            <span className="text-xl md:text-2xl font-mono text-star tracking-wide text-left">
              <motion.span style={{ display: "inline-block" }}>{text}</motion.span>
              <Cursor />
            </span>
          </div>
          {/* Resume button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 20px 6px #5f6caf",
              backgroundColor: "#5f6caf",
              color: "#0a0a23",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center bg-nebula text-space font-semibold px-10 py-4 rounded-full shadow-md cursor-pointer select-none text-lg tracking-wide ring-2 ring-nebula ring-offset-2 ring-offset-space hover:ring-comet transition-all duration-300"
          >
            <svg
              className="w-6 h-6 mr-2 text-comet"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
            <span>Check My Resume</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative glowing orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.13, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-24 right-12 w-32 h-32 bg-gradient-to-tr from-nebula to-comet rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
