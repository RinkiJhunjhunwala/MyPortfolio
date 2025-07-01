import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaDocker,FaCode, FaAws, FaFigma, FaRegObjectGroup,FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiRedux, SiNextdotjs, SiAngular, SiHtml5, SiCss3, SiJavascript, SiBootstrap,
  SiFlutter, SiExpress, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiJupyter, SiLinux, SiVercel, SiNetlify, SiAndroidstudio, SiCanva
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    list: [
      { name: "React Js", icon: <FaReact className="text-cyan-400" />, emoji: "⚛️" },
      // { name: "Redux", icon: <SiRedux className="text-purple-400" />, emoji: "🔄" },
      // { name: "Next Js", icon: <SiNextdotjs className="text-black dark:text-white" />, emoji: "⏭️" },
      // { name: "Angular Js", icon: <SiAngular className="text-red-500" />, emoji: "🅰️" },
      { name: "HTML", icon: <SiHtml5 className="text-orange-400" />, emoji: "🌐" },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" />, emoji: "🎨" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, emoji: "✨" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, emoji: "👢" },
      // { name: "Material UI", icon: <FaRegObjectGroup className="text-blue-300" />, emoji: "📦" },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" />, emoji: "📱" },
    ],
  },
  {
    title: "Backend",
    list: [
      { name: "Node Js", icon: <FaNodeJs className="text-green-400" />, emoji: "🌳" },
      { name: "Express Js", icon: <SiExpress className="text-gray-200" />, emoji: "🚂" },
      // { name: "Graph Ql", icon: <SiGraphql className="text-pink-400" />, emoji: "🔗" },
      { name: "Python", icon: <FaPython className="text-yellow-400" />, emoji: "🐍" },
      // { name: "Flask", icon: <FaPython className="text-gray-200" />, emoji: "🍶" },
      // { name: "Django", icon: <FaPython className="text-green-700" />, emoji: "🌱" },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" />, emoji: "🗄️" },
      // { name: "Postgresql", icon: <SiPostgresql className="text-blue-400" />, emoji: "🐘" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, emoji: "🍃" },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, emoji: "🔥" },
    ],
  },
  {
    title: "Tools & Platforms",
    list: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, emoji: "🔧" },
      // { name: "Docker", icon: <FaDocker className="text-blue-400" />, emoji: "🐳" },
      // { name: "AWS", icon: <FaAws className="text-yellow-500" />, emoji: "☁️" },
      // { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, emoji: "▲" },
      // { name: "Netlify", icon: <SiNetlify className="text-green-400" />, emoji: "🌐" },
      // { name: "Linux", icon: <SiLinux className="text-yellow-400" />, emoji: "🐧" },
      // { name: "Jupyter", icon: <SiJupyter className="text-orange-400" />, emoji: "📒" },
      { name: "Figma", icon: <FaFigma className="text-pink-400" />, emoji: "🎨" },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" />, emoji: "🐙" },
      { name: "VS Code", icon: <FaCode className="text-blue-500" />, emoji: "📝" },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" />, emoji: "🤖" },
      { name: "Canva", icon: <SiCanva className="text-blue-400" />, emoji: "🖼️" },
    ],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.8 } },
  whileHover: { scale: 1.035, boxShadow: "0 8px 32px 0 #5f6caf33" },
  whileTap: { scale: 0.97 },
};

const badgeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, type: "spring", stiffness: 300, damping: 20 },
  }),
};

const Card = ({ title, list }) => (
  <motion.div
    variants={cardVariants}
    initial="initial"
    whileInView="animate"
    whileHover="whileHover"
    whileTap="whileTap"
    viewport={{ once: true }}
    className="bg-[#181826] rounded-2xl p-7 shadow-xl w-full border border-nebula/30 transition"
    style={{
      background: "linear-gradient(135deg, #23234a 60%, #1a1a2e 100%)",
    }}
  >
    <h3 className="text-2xl font-bold text-nebula mb-4 flex items-center gap-2">
      {title === "Frontend" && "🎨"}
      {title === "Backend" && "🛠️"}
      {title === "Tools & Platforms" && "🚀"}
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {list.map((skill, i) => (
        <motion.span
          key={skill.name}
          custom={i}
          variants={badgeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1 text-base rounded-full bg-[#23234a] text-white border border-nebula/30 shadow-sm hover:scale-105 hover:bg-nebula/20 transition-all font-medium"
        >
          <span className="text-lg">{skill.icon}</span>
          <span>{skill.name}</span>
          <span className="ml-1">{skill.emoji}</span>
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-nebula mb-4 flex items-center gap-2"
      >
        <span role="img" aria-label="rocket">🚀</span> Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-comet mb-10"
      >
        Here are some of my core skills and tools I love to work with.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((cat, idx) => (
          <Card key={cat.title} title={cat.title} list={cat.list} />
        ))}
      </div>
    </section>
  );
}
