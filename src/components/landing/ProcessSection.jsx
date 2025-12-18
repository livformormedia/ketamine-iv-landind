import React from "react";
import { Calendar, FileText, Stethoscope, Heart } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book your initial consultation to discuss your symptoms and medical history"
    },
    {
      icon: FileText,
      title: "Medical Evaluation",
      description: "Our team reviews your case to determine if ketamine therapy is right for you"
    },
    {
      icon: Stethoscope,
      title: "Begin Treatment",
      description: "Receive your personalized ketamine treatment in our comfortable clinic"
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Regular follow-ups to monitor progress and adjust treatment as needed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-purple-200">Your journey to wellness in 4 simple steps</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-amber-400 font-bold text-sm mb-2">STEP {index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-purple-200">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}