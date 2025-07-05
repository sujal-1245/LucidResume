import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section
      id="cta"
      className="w-full px-6 py-20 flex justify-center relative bg-peach-50 dark:bg-[#1a120c] transition-colors duration-300"
    >
      {/* ✨ Subtle Glow Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-peach-100 via-lion-100 to-peach-200 
        dark:from-[#4e301b]/20 dark:via-[#ffedd5]/10 dark:to-[#ffbe98]/20 blur-3xl opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/50 dark:bg-white/5 border border-peach-200/60 dark:border-peach-100/10 
          rounded-3xl shadow-lg dark:shadow-[0_0_40px_#ffe6a710] p-10 backdrop-blur-2xl text-center transition-all duration-300"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-falu_red-600 to-lion-500 
          text-transparent bg-clip-text mb-6 tracking-tight">
          Build Resumes that Truly Shine ✨
        </h1>

        <p className="text-bistre-700 dark:text-peach-200 text-lg leading-relaxed mb-10">
          Welcome to <span className="font-semibold text-lion-500 dark:text-peach-300">LucidResume</span> — the fastest, cleanest, and most elegant way to craft stunning resumes with live previews and 1-click PDF downloads.
        </p>

        <Link to="/templates-preview">
          <button className="px-8 py-3 rounded-full bg-gradient-to-br from-falu_red-500 to-lion-400 
            text-white font-semibold text-lg shadow-md transition-all duration-300 hover:scale-105 
            hover:shadow-[0_0_30px_#f4d6b440] dark:hover:shadow-[0_0_25px_#ffe6a720]">
            Start Building
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Cta;
