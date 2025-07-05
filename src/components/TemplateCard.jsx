// src/components/TemplateCard.jsx
import { motion } from 'framer-motion';

const TemplateCard = ({ title, previewImage, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`relative rounded-2xl border-2 ${
        isSelected
          ? 'border-cyan-400 shadow-[0_0_25px_#22d3ee]'
          : 'border-white/10 hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee55]'
      } overflow-hidden cursor-pointer bg-white/5 backdrop-blur-xl transition-all duration-300`}
      onClick={onSelect}
    >
      <img
        src={previewImage}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {isSelected && (
        <div className="absolute top-3 right-3 bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md">
          Selected
        </div>
      )}
    </motion.div>
  );
};

export default TemplateCard;
