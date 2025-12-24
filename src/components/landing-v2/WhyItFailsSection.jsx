import React from "react";
import { AlertCircle } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function WhyItFailsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-950 via-slate-900 to-[#352253] text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pills with X Image */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-900 to-red-900 border-4 border-red-500 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="text-6xl md:text-8xl">💊</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 text-7xl md:text-9xl font-bold">✕</div>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 md:gap-3 bg-red-500/20 border-2 border-red-500/50 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 flex-shrink-0" />
          <span className="font-semibold text-red-300 text-sm md:text-base">Why Traditional Treatment Fails</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
          {treatmentConfig.WHY_IT_FAILS_HEADLINE}
        </h2>
        
        <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-6 md:p-12 mb-6 md:mb-8 shadow-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 mb-4 md:mb-6 leading-relaxed">
            "{treatmentConfig.WHY_IT_FAILS_QUOTE_PART1}<br />
            {treatmentConfig.WHY_IT_FAILS_QUOTE_PART2}"
          </p>
          
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6 md:my-8" />
          
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-6 md:mb-8">
            {treatmentConfig.WHY_IT_FAILS_ANALOGY_PART1}<br />
            {treatmentConfig.WHY_IT_FAILS_ANALOGY_PART2}
          </p>
          
          {/* Burning Image */}
          <div className="mt-6 md:mt-8">
            <img
              src={treatmentConfig.WHY_IT_FAILS_IMAGE_URL}
              alt="This is fine meme"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-2 border-amber-500/50"
            />
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed px-2" dangerouslySetInnerHTML={{ __html: treatmentConfig.WHY_IT_FAILS_CONCLUSION }} />
      </div>
    </section>
  );
}