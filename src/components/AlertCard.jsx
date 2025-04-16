 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { alertsData } from "../lib/alerts";

export default function AlertCard({type}) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAlert = alertsData[Math.floor(Math.random() * alertsData.length)];
      setAlerts(prev => [randomAlert, ...prev].slice(0, 10));
    }, type === 'without' ? 3000 : 10000); // Fewer alerts with Simbian

    return () => clearInterval(interval);
  }, [type]);

  return (
    <>
      {alerts.map((alert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`p-4 rounded-lg mb-2 ${
            type === 'without' 
              ? 'bg-red-100 border-l-4 border-red-500 text-red-500' 
              : 'bg-green-100 border-l-4 border-green-500 text-green-500'
          }`}
        >
          <div className="flex items-center">
            {type === 'without' ? (
              <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            <span className="font-medium">{alert}</span>
          </div>
        </motion.div>
      ))}
    </>
  );
}