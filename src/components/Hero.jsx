import React from 'react';
import Cta from './cta';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 lg:px-20 pt-24 bg-peach-900 text-bistre-600 dark:bg-bistre-600 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* 🌟 Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-lion-600 opacity-20 dark:opacity-40 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-peach-300 opacity-20 dark:opacity-30 blur-[100px] rounded-full -z-10" />

      {/* 👈 Left: Headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Build your{' '}
          <span className="text-falu_red-600 dark:text-peach-300">Resume</span>
          <br /> like a Pro.
        </h1>
        <p className="text-brown-500 dark:text-white text-lg sm:text-xl mb-8">
          LucidResume helps you create stunning, job-winning resumes in minutes. No design skills needed.
        </p>

        <div className="flex gap-4 flex-wrap">
          {/* 🧭 Get Started */}
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-falu_red-600 dark:bg-peach-300 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-[0_0_25px_#d34d4b] transition duration-300"
          >
            Get Started
          </motion.a>

          {/* 🧭 Explore Features */}
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-lion-500 text-brown-500 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-lion-100 dark:hover:bg-lion-300/10 transition duration-300 backdrop-blur-sm"
          >
            Explore Features
          </motion.a>
        </div>
      </motion.div>

      {/* 👉 Right: Resume Preview Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="hidden lg:block max-w-lg w-full z-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-bistre-500/10 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-white/5 p-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full h-auto border border-falu_red-600/30"
          >
            <source src="/resume-preview.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
