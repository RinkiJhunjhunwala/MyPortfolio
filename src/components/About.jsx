
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profilePic from '../assets/profile.jpg';


const buttonVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.13, y: -4, boxShadow: "0 4px 18px 0 #5f6caf44" },
};
const imageVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -16, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-space/90 via-space/80 to-space px-4 md:px-16 py-12">
      
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:pr-12">
        <h2 className="text-3xl md:text-4xl font-bold text-nebula mb-6 flex items-center gap-2">
          <span role="img" aria-label="sparkles">🌟</span> About Me
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-star text-lg md:text-xl mb-8 leading-relaxed"
        >
          <span role="img" aria-label="rocket">🚀</span> Hi! I'm <b>Rinki Jhunjhunwala</b>, an <span className="text-nebula">aspiring Software Developer</span> <span role="img" aria-label="laptop">💻</span> who loves building <span className="text-comet">beautiful web apps</span> and solving <span role="img" aria-label="puzzle">🧩</span> challenging problems. <br />
          I also create <span role="img" aria-label="mobile">📱</span> mobile apps, explore <span role="img" aria-label="robot">🤖</span> machine learning, and contribute to <span className="text-nebula">open source</span> <span role="img" aria-label="earth">🌏</span>. <br />
          Let's connect and build something amazing together! <span role="img" aria-label="star-struck">🤩</span>
        </motion.p>
        <div className="w-full mt-2">
          <span className="block text-xl font-semibold text-comet mb-4 flex items-center gap-2">
            <span role="img" aria-label="sparkles">✨</span> Connect with me
          </span>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://github.com/RinkiJhunjhunwala"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#23272e] text-white rounded-full shadow hover:bg-[#333c49] transition font-semibold"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
              <span role="img" aria-label="cat">🐱</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rinki-jhunjhunwala-2b2a9320a/"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#0a66c2] text-white rounded-full shadow hover:bg-[#084b91] transition font-semibold"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
              <span role="img" aria-label="handshake">🤝</span>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/rinki_2005/"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFA116] text-white rounded-full shadow hover:bg-[#cc8500] transition font-semibold"
            >
              <SiLeetcode className="w-5 h-5" />
              LeetCode
              <span role="img" aria-label="lightbulb">💡</span>
            </motion.a>
            <motion.a
              href="https://codeforces.com/profile/Rinki_Jhunjhunwala"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#1f8acb] text-white rounded-full shadow hover:bg-[#176599] transition font-semibold"
            >
              <FaCode className="w-5 h-5" />
              Codeforces
              <span role="img" aria-label="trophy">🏆</span>
            </motion.a>
          </div>
        </div>
      </div>

      
      <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-nebula bg-space flex items-center justify-center"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
