import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
  title: "TaskNotes",
  description: "A mobile app empowering users to manage to-do tasks and notes, boosting productivity.",
  tech: ["Dart", "Flutter", "Firebase"],
  github: "https://github.com/RinkiJhunjhunwala/To-Do-List-And-Notes-App",
  demo: "https://www.indusappstore.com/apps/productivity/tasknotes/com.rinki.todo_notes/?page=details&id=com.rinki.todo_notes",
  tag: "Android",
}
,
  {
    title: "Civic Issue Reporter App",
    description: "A community app to report and upvote civic issues. Built for a hackathon.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/ankitapaul74/civicConnnect",
    demo: "",
    tag: "Android",
  },
  {
  title: "Mindease",
  description: "A calming web app for mood tracking and relaxing games, featuring animated UI and user authentication.",
  tech: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB", "JWT"],
  github: "https://github.com/RinkiJhunjhunwala/MindEase",
  demo: "",
  tag: "Web",
}

];

const filters = ["All", "Web", "ML", "Android"];

const filterColors = {
  All: "bg-gradient-to-r from-violet-500 to-blue-500",
  Web: "bg-gradient-to-r from-blue-500 to-cyan-500",
  ML: "bg-gradient-to-r from-pink-500 to-yellow-500",
  Android: "bg-gradient-to-r from-green-500 to-teal-400",
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.7 } },
  exit: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.tag === active);

  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-nebula mb-4 flex items-center gap-2"
      >
        <span role="img" aria-label="sparkles">✨</span> Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-comet mb-8"
      >
        A few selected works showcasing my skills and passion.
      </motion.p>

      {/* Filter Buttons */}
      <div className="flex gap-4 flex-wrap mb-12">
        {filters.map((f) => (
          <motion.button
            key={f}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full font-semibold shadow transition-all border-2 outline-none focus:ring-2 focus:ring-violet-400
              ${
                active === f
                  ? `${filterColors[f]} text-white border-transparent`
                  : "bg-[#181826] text-comet border-violet-800 hover:bg-violet-900"
              }
            `}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              whileHover={{
                scale: 1.025,
                boxShadow: "0 8px 32px 0 #5f6caf44",
                background:
                  "linear-gradient(135deg, rgba(95,108,175,0.12) 0%, rgba(26,26,46,0.92) 100%)",
              }}
              className="relative bg-[#181826] rounded-2xl p-7 shadow-xl border border-violet/30 transition-all overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #23234a 60%, #1a1a2e 100%)",
              }}
            >
              {/* Tag badge */}
              <span
                className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full shadow ${filterColors[project.tag] || "bg-violet-500"} text-white`}
              >
                {project.tag}
              </span>
              <h3 className="text-xl font-bold text-nebula mb-2">{project.title}</h3>
              <p className="text-comet mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#23234a] text-white px-3 py-1 rounded-full border border-violet/30 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-200 text-sm flex items-center gap-1 font-medium transition"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-200 text-sm flex items-center gap-1 font-medium transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
