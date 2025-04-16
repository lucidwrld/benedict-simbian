"use client" 
import WithoutSimbianSection from "@/components/WithoutSimbianSection";
import WithSimbianSection from "@/components/WithSimbianSection";
import ComparisonSection from "@/components/ComparisonSection"; 

export default function Home() { 

  return (
    <main>
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Security Operations Transformed
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            See the dramatic difference in security operations with and without Simbian
          </p>
        </div>
      </section>

      
      <WithoutSimbianSection />
      <ComparisonSection />
      <WithSimbianSection />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Security Operations?
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Get Started with Simbian
          </button>
        </div>
      </section>
    </main>
  );
}