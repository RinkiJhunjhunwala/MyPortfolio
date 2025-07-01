import { motion } from "framer-motion";

const education = [
  {
    school: "National Institute of Technology, Agartala",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – 2027",
    points: [
      "🎓 CGPA: 9.15/10 (till 4th sem)",
      "💡 Core member of Developers & Coders Club",
      "🚀 Core member of Entrepreneurship Cell (E-Cell)"
    ],
  },
  {
    school: "Delhi Public School Ruby Park Kolkata",
    degree: "Class XII (CBSE), Science",
    period: "2021 – 2023",
    points: [
      "📚 95.4% ",
      "🏅 Scholar badge awardee",
    ],
  },
  {
    school: "South City International School",
    degree: "Class X (ICSE)",
    period: "2019 – 2021",
    points: [
      "📖 98.0%",
      "🏅 Highest marks in school in ICSE 2021",
      "📚 Awarded Prabhat Khabar Pratibha Samman Puraskar for remarkable success in ICSE 2021",
      "🏅 Won Gold medal at school level in SOF International Mathematics Olympiad 2019"
    ],
  },
];

const timelineVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.7, ease: "easeInOut" } },
};

const TimelineCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.65 }}
    transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
    className="relative pl-12 md:pl-16 pb-14"
  >
    
    <span
      className="absolute left-0 top-2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-lg flex items-center justify-center text-xl animate-pulse"
      aria-label="graduation cap"
    >
      🎓
    </span>
    <div className="bg-space/80 rounded-xl p-6 shadow-lg border border-emerald-500/40 hover:scale-[1.025] transition-transform duration-300">
      <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-1">{edu.school}</h3>
      <p className="text-sm md:text-base text-comet font-medium mb-2">
        <span className="font-semibold">{edu.degree}</span> • <span className="italic">{edu.period}</span>
      </p>
      <ul className="list-disc ml-5 mt-2 text-star space-y-1">
        {edu.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Education = () => (
  <section id="education" className="relative px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-emerald-400 mb-4 flex items-center gap-2"
    >
      <span role="img" aria-label="books">📚</span> Education
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-comet mb-10"
    >
      My academic journey, achievements, and extracurricular highlights.
    </motion.p>

    
    <div className="relative flex">
      <motion.div
        variants={timelineVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute left-2 md:left-4 top-0 w-2 h-full bg-emerald-500/60 rounded-full origin-top z-0 shadow-xl"
      />
      
      <div className="flex-1 z-10">
        {education.map((edu, index) => (
          <TimelineCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Education;
