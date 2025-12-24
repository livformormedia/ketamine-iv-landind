import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig"; // Assuming this path is correct based on the outline

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // The local `faqs` array is replaced by `treatmentConfig.FAQ_ITEMS`
  // so we no longer need to define it here.

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-[#352253] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#352253]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#ec9e21]/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {treatmentConfig.FAQ_HEADLINE_PART1} <span dangerouslySetInnerHTML={{ __html: treatmentConfig.FAQ_HEADLINE_PART2 }} />
          </h2>
          <p className="text-base md:text-xl text-slate-300">{treatmentConfig.FAQ_SUBHEADLINE}</p>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          {treatmentConfig.FAQ_ITEMS.map((faq, index) => ( // Using FAQ_ITEMS from treatmentConfig
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-900/80 to-[#352253]/80 backdrop-blur-lg border-2 border-[#352253]/30 rounded-2xl overflow-hidden hover:border-[#352253]/50 transition-all duration-300 shadow-xl"
            >
              <button
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between hover:bg-[#352253]/30 transition-colors duration-300 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-sm md:text-lg text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#ec9e21] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 py-4 md:py-5 bg-slate-900/50 border-t-2 border-[#352253]/30">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}