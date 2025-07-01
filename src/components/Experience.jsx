import { motion } from "framer-motion";

const experiences = [
  {
  company: "Social Summer of Code (SSOC)",
  role: "Open Source Contributor",
  period: "June 2025 - Present",
  points: [
    "🛠️ Raised several issues to improve project functionality and documentation",
    "🔗 Submitted 3 pull requests, with 2 successfully merged",
    "🌱 Enhanced code quality and contributed to collaborative open-source development"
  ],
}
,
  {
  company: "Google Student Upskill Launchpad Program",
  role: "Selected Participant",
  period: "April 2025 - May 2025",
  points: [
    "🎓 Selected for Google's invite-only upskilling program",
    "💡 Explored programming fundamentals and coding interview basics through curated workshops and resources",
    "🛠️ Strengthened problem-solving skills and technical foundations"
  ],
}
,
  {
  company: "Developers & Coders Club",
  role: "Mobile Development Team Member",
  period: "August 2024 - Present",
  points: [
    "👨‍💻 Organized coding workshops, hackathons, and tech events, boosting member skills",
    "📱 Promoted and guided app development initiatives, increasing app development culture."
  ],
}
,
  {
  company: "E-Cell NITA",
  role: "Technical Team Member",
  period: "August 2024 - Present",
  points: [
    "🚗 Pioneered the front end of the Ride Pool App, streamlining ride booking and sharing for the students",
    "📲 Led UI/UX development to enhance accessibility and user engagement",
    "🤝 Organized and managed entrepreneurial events, increasing networking and knowledge sharing."
    ],
  }
];

const timelineVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.7, ease: "easeInOut" } },
};

const TimelineCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
    className={`relative pl-12 md:pl-16 pb-14`}
  >
    {/* Timeline dot */}
    <span className="absolute left-0 top-2 w-6 h-6 rounded-full bg-violet border-4 border-white shadow-lg flex items-center justify-center text-xl animate-pulse">
      {index === 0 ? "👨‍💻" : "🧑‍💻"}
    </span>
    <div className="bg-space/80 rounded-xl p-6 shadow-lg border border-violet/40 hover:scale-[1.025] transition-transform duration-300">
      <h3 className="text-lg md:text-xl font-bold text-nebula mb-1">{exp.company}</h3>
      <p className="text-sm md:text-base text-comet font-medium mb-2">
        <span className="font-semibold">{exp.role}</span> • <span className="italic">{exp.period}</span>
      </p>
      <ul className="list-disc ml-5 mt-2 text-star space-y-1">
        {exp.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="relative px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-nebula mb-4 flex items-center gap-2"
    >
      <span role="img" aria-label="briefcase">💼</span> Experience
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-comet mb-10"
    >
      Here is a summary of my work experience and contributions.
    </motion.p>

    {/* Timeline vertical bar */}
    <div className="relative flex">
      <motion.div
        variants={timelineVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute left-2 md:left-4 top-0 w-2 h-full bg-violet/60 rounded-full origin-top z-0 shadow-xl"
      />
      {/* Timeline cards */}
      <div className="flex-1 z-10">
        {experiences.map((exp, index) => (
          <TimelineCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
