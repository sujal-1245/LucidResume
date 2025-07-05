import Hero from "../components/Hero";
import Features from "../components/Features";
import TemplatePreviewSection from "../components/TemplatePreviewSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cta from "../components/cta";
import CompanyMarquee from "../components/CompanyMarquee";

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-white text-[#0f1117] dark:bg-[#4e301b] dark:text-peach-100">

      {/* 🔝 Hero Section */}
      <Hero />
            {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#fcd8b0" />
        </svg>
      </div>
      {/* 🧩 Features Section */}
      <section id="features" className="transition-colors duration-300 bg-gray-50 dark:bg-transparent dark:text-white">
                    {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#fcd8b0" />
        </svg>
      </div>
        <Features />
      </section>

      <CompanyMarquee />
      {/* 🚀 Call-To-Action Section */}
      <section id="cta" className="transition-colors duration-300 bg-white dark:bg-transparent dark:text-white">
                    {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#fcd8b0" />
        </svg>
      </div>
        <Cta />
      </section>

    </main>
  );
};

export default Home;
