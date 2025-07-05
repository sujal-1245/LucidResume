import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const companyLogos = [
  { src: "/assets/images/Amazon logo.jpg", alt: "Amazon" },
  { src: "/assets/images/Atlassian-Logo.png", alt: "Atlassian" },
  { src: "/assets/images/Google-Logo.png", alt: "Google" },
  { src: "/assets/images/Apple-logo-1.jpg", alt: "Apple" },
  { src: "/assets/images/Meta-Logo.png", alt: "Meta" },
  { src: "/assets/images/Microsoft Logo.webp", alt: "Microsoft" },
  { src: "/assets/images/netflix-logo.jpg", alt: "Netflix" },
  { src: "/assets/images/Tesla-Logo.png", alt: "Tesla" },
];

const CompanyMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-20 w-[90vw] max-w-7xl mx-auto px-6 py-14 rounded-3xl
        bg-peach-400/40 dark:bg-[#3b2517]/40 backdrop-blur-xl
        border border-peach-200/40 dark:border-peach-100/10
        shadow-[inset_0_0_1px_rgba(255,255,255,0.5),_0_20px_50px_rgba(0,0,0,0.1)]
        dark:shadow-[inset_0_0_1px_rgba(255,255,255,0.2),_0_20px_50px_rgba(255,255,255,0.05)]
        transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 
        text-bistre-700 dark:text-bistre-900 tracking-wide">
        🎓Get Hired by Top Companies💻
      </h2>

      <Marquee pauseOnHover gradient={false} speed={50}>
        {companyLogos.map((company, index) => (
          <div
            key={index}
            className="mx-8 my-6 px-6 py-8 min-w-fit h-[100px]
              bg-white/40 dark:bg-white/10 backdrop-blur-lg
              border border-white/30 dark:border-peach-100/10 rounded-2xl
              shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1),_0_12px_24px_rgba(0,0,0,0.08)]
              dark:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.08),_0_12px_24px_rgba(255,255,255,0.04)]
              flex items-center justify-center transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_35px_#fff9f9] dark:hover:shadow-[0_0_35px_#ffe6a720]"
          >
            <img
              src={company.src}
              alt={company.alt}
              className="h-[75px] rounded-2xl max-w-full object-contain brightness-110 contrast-105 transition"
            />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default CompanyMarquee;
