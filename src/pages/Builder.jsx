import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTemplate } from "../context/TemplateContext";
import ClassicTemplate from "../components/templates/ClassicTemplate";
import ElegantTemplate from "../components/templates/ElegantTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import html2pdf from "html2pdf.js";

const Builder = () => {
  const { selectedTemplate, setUserData } = useTemplate();

  const [form, setForm] = useState({
    name: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    skills: "",
    experience: [],
  });

  const resumeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const parsedSkills = form.skills.split(",").map((s) => s.trim()).filter(Boolean);
    setUserData({ ...form, skills: parsedSkills });
  }, [form, setUserData]);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      setForm((prev) => {
        const updatedExp = [...prev.experience];
        updatedExp[index][name] = value;
        return { ...prev, experience: updatedExp };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddExperience = () => {
    setForm((prev) => ({
      ...prev,
      experience: [...prev.experience, { title: "", company: "", duration: "", description: "" }],
    }));
  };

  const handleRemoveExperience = (index) => {
    setForm((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const isFormComplete = Object.entries(form).every(([key, val]) =>
    typeof val === "string" ? val.trim() !== "" : true
  );

  const handleDownload = () => {
    if (!resumeRef.current) return;
    html2pdf().from(resumeRef.current).set({
      margin: 0,
      filename: `${form.name || "resume"}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).save();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <ClassicTemplate />;
      case "elegant":
        return <ElegantTemplate />;
      case "modern":
        return <ModernTemplate />;
      default:
        return <p className="text-bistre-500">Select a template to preview your resume.</p>;
    }
  };

  const back = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-12 mt-10 bg-peach-100/40 text-black dark:bg-gradient-to-br dark:from-[#1a120c] dark:via-[#1e1410] dark:to-[#1a120c] dark:text-peach-100 px-6 lg:px-12 pb-20 flex flex-col lg:flex-row gap-10 items-start justify-center">

      <div className="mt-10 text-center">
        <button
          onClick={back}            className="px-6 py-3 text-sm font-semibold rounded-full bg-falu_red-600 hover:bg-falu_red-400 dark:bg-peach-300 dark:hover:bg-peach-200 text-white transition-all shadow-lg"

        >
          BACK
        </button>
      </div>

      {/* 🔧 Resume Form */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 p-6 bg-white/50 dark:bg-white/5 border border-lion-500/20 dark:border-peach-100/10 rounded-2xl shadow-lg backdrop-blur-xl"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-falu_red-700 tracking-tight">
          ✍️ Resume Details
        </h2>
        <form className="flex flex-col gap-4">
          {["name", "title", "email", "phone", "skills"].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-black dark:bg-[#1a1d25] dark:border-peach-200/30 dark:text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-peach-300 transition"
            />
          ))}

          <textarea
            name="summary"
            placeholder="Short Summary"
            rows="4"
            value={form.summary}
            onChange={handleChange}
            className="bg-white border border-gray-300 text-black dark:bg-[#1a1d25] dark:border-peach-200/30 dark:text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-peach-300 transition"
          />

          {/* Experience Section */}
          <div className="mt-6 border-t pt-4 border-lion-500/20 dark:border-peach-100/10">
            <h3 className="text-lg font-bold text-lion-700 dark:text-peach-400 mb-2">Experience</h3>
            {form.experience.map((exp, index) => (
              <div key={index} className="bg-peach-900 p-4 mb-4 rounded border border-peach-200/20 text-white">
                <input
                  name="title"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full mb-2 p-2 rounded bg-[#59503a] border border-peach-300/30 text-sm"
                />
                <input
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full mb-2 p-2 rounded bg-[#59503a] border border-peach-300/30 text-sm"
                />
                <input
                  name="duration"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full mb-2 p-2 rounded bg-[#59503a] border border-peach-300/30 text-sm"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full p-2 rounded bg-[#59503a] border border-peach-300/30 text-sm"
                  rows="3"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index)}
                  className="mt-2 text-red-400 hover:text-red-600 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddExperience}
              className="mt-2 text-lion-600 hover:text-lion-800 text-sm"
            >
              ➕ Add Experience
            </button>
          </div>
        </form>

        <motion.button
          whileHover={isFormComplete ? { scale: 1.05 } : {}}
          disabled={!isFormComplete}
          onClick={handleDownload}
          className={`mt-8 px-6 py-3 text-sm font-semibold rounded shadow transition-all duration-300 ${
            isFormComplete
              ? "bg-falu_red-500 hover:bg-falu_red-600 text-white shadow-[0_0_25px_#f4d6b440]"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          📥 Download Resume as PDF
        </motion.button>
      </motion.div>

      {/* 🪞 Live Template Preview */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-falu_red-600 dark:text-peach-300 tracking-tight">
          {selectedTemplate
            ? `🎨 ${selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)} Template Preview`
            : "🖼 Select a Template to Preview"}
        </h2>
        <div
          ref={resumeRef}
          className="bg-white text-black dark:bg-[#1a120c] dark:text-white scale-[0.75] lg:scale-[0.85] origin-top-left rounded-lg shadow-xl border border-gray-200 dark:border-peach-100/10 overflow-hidden transition-all duration-300"
        >
          {renderTemplate()}
        </div>
      </motion.div>
    </div>
  );
};

export default Builder;
