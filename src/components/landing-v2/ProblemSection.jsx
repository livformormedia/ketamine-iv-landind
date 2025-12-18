import React from "react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Image */}
        <div className="mb-16">
          <img 
            src={treatmentConfig.PROBLEM_IMAGE_URL}
            alt="Depression statistics"
            className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto border-2 border-purple-500/30"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              {treatmentConfig.PROBLEM_HEADLINE_PART1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{treatmentConfig.PROBLEM_HEADLINE_PART2}</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-slate-700">{treatmentConfig.PROBLEM_INTRO}</p>
              
              <ul className="space-y-3 ml-6">
                {treatmentConfig.PROBLEM_LIST.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-2xl">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-2xl font-bold text-slate-900 pt-6">
                {treatmentConfig.PROBLEM_CONCLUSION_PART1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{treatmentConfig.PROBLEM_CONCLUSION_PART2}</span>
              </p>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 p-6 rounded-2xl shadow-lg mt-8">
                <p className="text-xl font-medium text-slate-900 mb-2">
                  {treatmentConfig.PROBLEM_CALLOUT_TEXT}
                </p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {treatmentConfig.PROBLEM_CALLOUT_HIGHLIGHT}
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-purple-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-3">
                "{treatmentConfig.PROBLEM_TESTIMONIAL_QUOTE}"
              </p>
              <p className="text-sm font-semibold text-slate-900">— {treatmentConfig.PROBLEM_TESTIMONIAL_AUTHOR}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}