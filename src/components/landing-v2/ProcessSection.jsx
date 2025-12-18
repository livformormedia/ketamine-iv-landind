import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function ProcessSection() {
  const scrollToAssessment = () => {
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {treatmentConfig.PROCESS_HEADLINE_PART1} <span className="text-purple-600">{treatmentConfig.PROCESS_HEADLINE_PART2}</span>
          </h2>
          <p className="text-xl text-slate-600">
            {treatmentConfig.PROCESS_SUBHEADLINE}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          {treatmentConfig.PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
              {index < treatmentConfig.PROCESS_STEPS.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-purple-200" />
              )}
            </div>
          ))}
        </div>
        
        {/* Happy Patient Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={treatmentConfig.PROCESS_IMAGE_URL}
              alt="Happy patient"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              {treatmentConfig.PROCESS_CTA_HEADLINE}
            </h3>
            <ul className="space-y-4 mb-8">
              {treatmentConfig.PROCESS_CTA_BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              onClick={scrollToAssessment}
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-xl px-8 py-6 w-full md:w-auto"
            >
              Take the Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}