// import { motion } from "framer-motion";
// import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

// const socialLinks = [
//   {
//     name: "Email",
//     icon: <FaEnvelope />,
//     href: "mailto:jhunjhunwalarinki@gmail.com",
//     color: "bg-gradient-to-r from-violet-500 to-blue-500",
//   },
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     href: "https://www.linkedin.com/in/rinki-jhunjhunwala-2b2a9320a/",
//     color: "bg-gradient-to-r from-blue-500 to-cyan-500",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     href: "https://github.com/RinkiJhunjhunwala",
//     color: "bg-gradient-to-r from-gray-700 to-gray-900",
//   },
//   {
//     name: "Phone",
//     icon: <FaPhoneAlt />,
//     href: "tel:+919836076669",
//     color: "bg-gradient-to-r from-green-500 to-teal-400",
//   },
// ];

// export default function Contact() {
//   return (
//     <section id="contact" className="px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-nebula mb-4 flex items-center gap-2"
//       >
//         <span role="img" aria-label="wave">👋</span> Contact Me
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2 }}
//         className="text-comet mb-10"
//       >
//         Interested in working together or just want to say hi? Drop me a message or connect via social links below!
//       </motion.p>

//       <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        
//         <motion.form
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="w-full max-w-md bg-[#181826]/80 rounded-2xl shadow-2xl border border-nebula/30 p-8 flex flex-col gap-5 backdrop-blur-md"
//           onSubmit={e => {
//             e.preventDefault();
//             alert("Form submission logic goes here!");
//           }}
//         >
//           <div className="flex items-center gap-3 mb-2">
//             <FaEnvelope className="text-nebula text-2xl" />
//             <span className="text-xl font-semibold text-nebula">Send a Message</span>
//           </div>
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             required
//             className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition resize-none"
//           />
//           <motion.button
//             whileHover={{ scale: 1.04, boxShadow: "0 0 18px 3px #5f6caf55" }}
//             whileTap={{ scale: 0.98 }}
//             className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold shadow-lg transition-all"
//             type="submit"
//           >
//             Send
//           </motion.button>
//         </motion.form>

        
//         <div className="flex flex-col gap-5">
//           <span className="text-xl font-semibold text-comet mb-2 flex items-center gap-2">
//             <span role="img" aria-label="connect">🔗</span> Connect with me:
//           </span>
//           <div className="flex flex-col gap-4">
//             {socialLinks.map(link => (
//               <motion.a
//                 key={link.name}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.08, x: 8 }}
//                 whileTap={{ scale: 0.97 }}
//                 className={`flex items-center gap-3 px-5 py-2 rounded-xl font-semibold text-white shadow-lg transition-all ${link.color}`}
//               >
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

const socialLinks = [
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:jhunjhunwalarinki@gmail.com",
    color: "bg-gradient-to-r from-violet-500 to-blue-500",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/rinki-jhunjhunwala-2b2a9320a/",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/RinkiJhunjhunwala",
    color: "bg-gradient-to-r from-gray-700 to-gray-900",
  },
  {
    name: "Phone",
    icon: <FaPhoneAlt />,
    href: "tel:+919836076669",
    color: "bg-gradient-to-r from-green-500 to-teal-400",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current.reset();
    setTimeout(() => setSubmitted(false), 2000); // Hide message after 2 seconds
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-gradient-to-b from-space/90 via-space/80 to-space">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-nebula mb-4 flex items-center gap-2"
      >
        <span role="img" aria-label="wave">👋</span> Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-comet mb-10"
      >
        Interested in working together or just want to say hi? Drop me a message or connect via social links below!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md bg-[#181826]/80 rounded-2xl shadow-2xl border border-nebula/30 p-8 flex flex-col gap-5 backdrop-blur-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-nebula text-2xl" />
            <span className="text-xl font-semibold text-nebula">Send a Message</span>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            className="rounded-lg px-4 py-2 bg-[#23234a] text-white border border-violet-800 focus:border-nebula focus:ring-2 focus:ring-nebula/30 outline-none transition resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 18px 3px #5f6caf55" }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold shadow-lg transition-all"
            type="submit"
          >
            Send
          </motion.button>
          {submitted && (
            <span className="text-green-400 font-semibold mt-2">Submitted!</span>
          )}
        </motion.form>

        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold text-comet mb-2 flex items-center gap-2">
            <span role="img" aria-label="connect">🔗</span> Connect with me:
          </span>
          <div className="flex flex-col gap-4">
            {socialLinks.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, x: 8 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-3 px-5 py-2 rounded-xl font-semibold text-white shadow-lg transition-all ${link.color}`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
