 
import { motion } from "framer-motion";
import AlertCard from "./AlertCard";
import StatusCard from "./StatusCard";
import { withoutSimbianCards } from "../lib/constants";

export default function WithoutSimbianSection() {
  return (
    <section className="py-12 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Without Simbian
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {withoutSimbianCards.map((card, index) => (
            <StatusCard // Calling reusable component `Status Card`
              key={card.id}
              {...card}
              index={index} // Render each card with its content
            />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Real-time Alerts
          </h3>
          <div className="space-y-3 h-64 overflow-y-auto">
            <AlertCard // Calling reusable component `Alert Card` while passing type `without`
            type="without" /> 
          </div>
        </div>
      </div>
    </section>
  );
}