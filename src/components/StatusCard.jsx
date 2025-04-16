 
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function StatusCard({
  id,
  title,
  initialCount, // Number to display (e.g. metric, stat, etc.) 
  icon,
  description,
  index, // Used for animation delay 
  color = "red"
}) { 
  const countControls = useAnimation(); // Controls animation for the number bounce effect

  useEffect(() => {
     // Function to trigger a scale bounce effect on the count
    const animate = async () => {
      if (initialCount > 0) {
        await countControls.start({
          scale: [1, 1.2, 1], // Slight scale-up and return
          transition: { duration: 0.5 }
        });
      }
    };


    // Repeats the animation every 3 seconds if count is greater than 0
    const interval = setInterval(() => {
      if (initialCount > 0) {
        animate();
      }
    }, 3000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [initialCount, countControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start faded and slightly pushed down
      whileInView={{ opacity: 1, y: 0 }} // Animate into view when visible
      transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered animation by index
      viewport={{ once: false }} // Animates again if scrolled into view again
 

      className={`bg-white rounded-lg shadow-md p-6 ${
        color === "red" ? "border-t-4 border-red-500" : "border-t-4 border-green-500"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`p-2 rounded-full ${
          color === "red" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
        }`}>
          {icon}
        </div>
      </div>
      <motion.div
        animate={countControls}
        viewport={{ once: true }}

        className={`text-4xl font-bold mb-2 ${
          color === "red" ? "text-red-600" : "text-green-600"
        }`}
      >
        {initialCount}
      </motion.div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}