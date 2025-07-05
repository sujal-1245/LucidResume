import { useEffect } from 'react';
import { useTemplate } from '../context/TemplateContext';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TemplatePreviewSection = () => {
  const { selectedTemplate, setSelectedTemplate } = useTemplate();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStartBuilding = () => {
    navigate('/builder');
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'classic':
        return <ClassicTemplate />;
      case 'modern':
        return <ModernTemplate />;
      case 'elegant':
        return <ElegantTemplate />;
      default:
        return <ClassicTemplate />; // fallback to classic
    }
  };

  return (
    <section className="w-full min-h-screen bg-peach-900 dark:bg-bistre-600 text-bistre-600 dark:text-white relative overflow-auto">
      {/* 🔮 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-lion-600 opacity-20 dark:opacity-40 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-peach-300 opacity-20 dark:opacity-30 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col items-center justify-start min-h-screen"
      >
        {/* Heading */}
        <h2 className="text-xl mt-10 sm:text-2xl md:text-3xl font-bold text-center text-peach-400 bg-clip-text mb-8">
          Select Template
        </h2>

        {/* Template Selector + Preview */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 w-full">
          {/* Selector */}
          <div className="flex flex-row lg:flex-col gap-4 flex-wrap justify-center">
            {['classic', 'modern', 'elegant'].map((template) => (
              <button
                key={template}
                onClick={() => setSelectedTemplate(template)}
                className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all
                  ${
                    selectedTemplate === template
                      ? 'bg-falu_red-600 dark:bg-peach-300 text-white'
                      : 'bg-white/20 dark:bg-white/5 text-black dark:text-white border-gray-300 dark:border-white/10 hover:border-cyan-400'
                  }`}
              >
                {template.charAt(0).toUpperCase() + template.slice(1)}
              </button>
            ))}

            {/* CTA Button */}
            <div className="mt-10">
              <button
                onClick={handleStartBuilding}
                className="px-6 py-3 text-sm font-semibold rounded-full bg-falu_red-600 hover:bg-falu_red-400 dark:bg-peach-300 dark:hover:bg-peach-200 text-white transition-all shadow-lg"
              >
                Use This Template
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] xl:max-w-[40%] aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-xl scale-[0.8] sm:scale-90 md:scale-100 transition-transform origin-top">
            {renderTemplate()}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TemplatePreviewSection;
