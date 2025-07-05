import { motion } from "framer-motion";
import { FaMagic, FaFileAlt, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaMagic className="text-3xl text-lion-900 dark:text-peach-300" />,
    title: "AI-Powered Suggestions",
    description: "Get smart keyword-based guidance to improve your resume instantly.",
  },
  {
    icon: <FaFileAlt className="text-3xl text-lion-900 dark:text-peach-300" />,
    title: "Professional Templates",
    description: "Choose from a library of pixel-perfect templates that recruiters love.",
  },
  {
    icon: <FaBolt className="text-3xl text-lion-900 dark:text-peach-300" />,
    title: "1-Click PDF Export",
    description: "Download beautiful, ATS-friendly resumes instantly in high quality.",
  },
];

const shimmer = {
  backgroundImage:
    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.1) 100%)",
  backgroundSize: "200% 200%",
};

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 px-6 lg:px-20 bg-peach-700 text-bistre-800 dark:bg-[#4e301b] dark:text-peach-100 transition-colors duration-300"
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#fcd8b0" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-falu_red-700 to-lion-400 text-transparent bg-clip-text">
          Powerful Features
        </h2>
        <p className="text-bistre-700 dark:text-peach-300 text-lg">
          Everything you need to craft a perfect resume and stand out in job applications.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="group relative backdrop-blur-2xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-peach-100/10 p-6 rounded-3xl 
              shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),_0_20px_40px_rgba(0,0,0,0.1)]
              dark:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1),_0_20px_40px_rgba(255,255,255,0.05)]
              hover:shadow-[0_0_50px_#ffffff40] dark:hover:shadow-[0_0_40px_#ffe6a730] transition-all duration-500"
            style={shimmer}
          >
            <motion.div
              whileHover={{ y: -4, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 flex items-center justify-center bg-lion-100 dark:bg-peach-300/10 rounded-full mb-4 shadow-inner transition-all"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-bistre-100 dark:text-peach-500 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-bistre-100 dark:text-peach-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#fcd8b0" />
        </svg>
      </div>
    </section>
  );
};

export default Features;
