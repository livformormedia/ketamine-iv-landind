import React from "react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#352253] mb-6">
            {treatmentConfig.HOW_IT_WORKS_HEADLINE_PART1}<br />
            <span className="text-[#352253]">{treatmentConfig.HOW_IT_WORKS_HEADLINE_PART2}</span>
          </h2>
          <p className="text-xl text-[#352253]/70">
            {treatmentConfig.HOW_IT_WORKS_SUBHEADLINE}
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#352253]/20 via-[#352253] to-[#352253]/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentConfig.HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#352253]/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#352253] to-[#352253]/80 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#352253] mb-3">{step.title}</h3>
                  <p className="text-[#352253]/70 leading-relaxed">{step.description}</p>
                </div>
                {index < treatmentConfig.HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-[#352253]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Representation */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#352253] mb-4">What to Expect</h3>
              <ul className="space-y-4 text-[#352253]/80">
                {treatmentConfig.HOW_IT_WORKS_WHAT_TO_EXPECT.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={treatmentConfig.HOW_IT_WORKS_IMAGE_URL}
                alt="Brain neuroplasticity"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}