import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 px-6 py-4 lg:px-12 flex justify-between items-center
      bg-apricot-100/80 text-bistre-800
      dark:bg-bistre-500/60 dark:text-peach-100
      border-b border-bistre-300/10 dark:border-peach-300/10
      backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(255,255,255,0.05)]
      transition-colors duration-300"
    >
      {/* 🏠 Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-tight text-peach-400 dark:text-falu_red-900"
      >
        LucidResume
      </Link>

      {/* 🌗 Theme Toggle */}
<motion.button
  onClick={toggleTheme}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="p-2 rounded-full border border-falu_red-400
  text-falu_red-900 dark:text-peach-300
  hover:bg-apricot-200/30 dark:hover:bg-salmon_pink-500/10
  shadow-sm hover:shadow-md transition-all duration-300 ease-in-out
  backdrop-blur-sm"
  title="Toggle Theme"
>
  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
</motion.button>

    </header>
  );
};

export default Header;
