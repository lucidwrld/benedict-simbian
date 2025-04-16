 
import { motion } from "framer-motion";
import FlowStep from "./FlowStep";
import StatusCard from "./StatusCard";
import { withSimbianCards, flowSteps } from "../lib/constants";

export default function WithSimbianSection() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          With Simbian
        </h2>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {flowSteps.map((step, index) => (
              <FlowStep  // Calling reusable component `Flow step`
              key={step.id} 
              {...step} 
              index={index} /> // Render each step with data
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {withSimbianCards.map((card, index) => (
            <StatusCard // Calling reusable component `Status Card` 
              key={card.id}
              {...card}
              index={index} // Render each card with its content

            />
          ))}
        </div>
      </div>
    </section>
  );
}