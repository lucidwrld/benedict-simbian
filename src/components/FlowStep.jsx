 
import { motion } from "framer-motion";

export default function FlowStep({
  id,
  title,
  description,
  icon,
  index
} ) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.1 }}
      viewport={{ once: false }}

      className="flex flex-col items-center text-center"
    >
      <div className="bg-green-100 p-4 rounded-full text-green-600 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-green-700 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm max-w-xs">{description}</p>
      {index < 4 && (
        <div className="hidden md:block mt-4">
          <svg
            className="w-8 h-8 text-green-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}