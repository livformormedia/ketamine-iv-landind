import React from "react";
import { Brain, Zap, Shield, Heart, Smile, Clock } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Experience improved focus and cognitive function"
    },
    {
      icon: Zap,
      title: "Rapid Relief",
      description: "Feel better within hours, not weeks"
    },
    {
      icon: Shield,
      title: "Safe & Effective",
      description: "Proven treatment with medical supervision"
    },
    {
      icon: Heart,
      title: "Improved Mood",
      description: "Significant reduction in depression symptoms"
    },
    {
      icon: Smile,
      title: "Better Quality of Life",
      description: "Return to activities you love"
    },
    {
      icon: Clock,
      title: "Long-lasting Results",
      description: "Benefits can last weeks to months"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-purple-600">Ketamine Therapy</span>
          </h2>
          <p className="text-xl text-gray-600">Discover how ketamine can transform your life</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}