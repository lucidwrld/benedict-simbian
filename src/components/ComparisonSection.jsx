 
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";

const comparisonPoints = [
  {
    id: 1,
    without: "Wasting valuable analyst time on false positives",
    with: "90% of alerts resolved automatically, 24/7",
    iconWithout: <FaTimes className="text-red-500" />,
    iconWith: <FaCheck className="text-green-500" />
  },
  {
    id: 2,
    without: "Processing one alert at a time, missing the big picture",
    with: "Correlates alerts to your environment",
    iconWithout: <FaTimes className="text-red-500" />,
    iconWith: <FaCheck className="text-green-500" />
  },
  {
    id: 3,
    without: "More time fixing SOAR automation, less time on real threats",
    with: "Investigate every alert—no SOAR needed",
    iconWithout: <FaTimes className="text-red-500" />,
    iconWith: <FaCheck className="text-green-500" />
  }, 
];

export default function ComparisonSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        viewport={{ once: true }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-red-400 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-green-400 blur-xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            >
              Transform Your Security Operations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Without Simbian Column */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center md:justify-start"
                >
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-red-600">Without Simbian</h3>
                </motion.div>
                
                <ul className="space-y-5">
                  <AnimatePresence>
                    {comparisonPoints.map((point, index) => (
                      <motion.li 
                        key={`without-${point.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ x: 5 }}
                        className="flex items-start bg-red-50/50 p-4 rounded-lg border border-red-100"
                      >
                        <span className="mt-1 mr-3">{point.iconWithout}</span>
                        <span className="text-gray-700">{point.without}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
              
              {/* Arrow animation */}
              <div className="hidden md:flex items-center justify-center relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      x: [-10, 10, -10],
                      transition: { repeat: Infinity, duration: 2 }
                    }}
                    className="text-5xl text-gray-600 bg-white p-4 rounded-full shadow-lg border border-gray-200"
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* With Simbian Column */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center md:justify-start"
                >
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-600">With Simbian</h3>
                </motion.div>
                
                <ul className="space-y-5">
                  <AnimatePresence>
                    {comparisonPoints.map((point, index) => (
                      <motion.li 
                        key={`with-${point.id}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ x: -5 }}
                        className="flex items-start bg-green-50/50 p-4 rounded-lg border border-green-100"
                      >
                        <span className="mt-1 mr-3">{point.iconWith}</span>
                        <span className="text-gray-700">{point.with}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            </div>
            
            {/* Mobile arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="md:hidden flex justify-center my-10"
            >
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  transition: { repeat: Infinity, duration: 2 }
                }}
                className="text-5xl text-gray-600 rotate-90 bg-white p-4 rounded-full shadow-lg border border-gray-200"
              >
                <FaArrowRight />
              </motion.div>
            </motion.div>
            
            {/* Summary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ready to transform your security operations?
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Get Started with Simbian
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}