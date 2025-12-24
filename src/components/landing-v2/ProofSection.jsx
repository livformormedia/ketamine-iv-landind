import React from "react";
import { Star } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function ProofSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#ec9e21]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#352253]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FDA Image */}
        <div className="text-center mb-8 md:mb-12">
          <img 
            src={treatmentConfig.PROOF_FDA_IMAGE_URL} 
            alt="FDA Cleared"
            className="w-full max-w-xs md:max-w-md mx-auto"
          />
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2 text-[#352253]">
            {treatmentConfig.PROOF_HEADLINE_PART1} <span className="text-[#352253]">{treatmentConfig.PROOF_HEADLINE_PART2}</span>.<br />
            {treatmentConfig.PROOF_HEADLINE_PART3}
          </h2>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {treatmentConfig.PROOF_STATS.map((stat, index) => (
            <div key={index} className="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl md:text-5xl font-bold text-[#352253] mb-2">
                {stat.number}
              </div>
              <p className="text-sm md:text-lg text-[#352253]/80">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Research Institutions */}
        <div className="bg-white border-2 border-[#352253]/20 rounded-3xl p-6 md:p-8 mb-12 md:mb-16 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-[#352253]">Research Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16">
            {treatmentConfig.PROOF_RESEARCH_INSTITUTIONS.map((institution, index) => (
              <div key={index} className="text-base md:text-xl font-semibold text-[#352253]/80">{institution}</div>
            ))}
          </div>
        </div>
        
        {/* Media Mention */}
        <div className="bg-white border-2 border-red-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 md:gap-6 shadow-lg">
          <div className="text-4xl md:text-6xl font-bold text-red-500">{treatmentConfig.PROOF_MEDIA_OUTLET}</div>
          <div className="text-center sm:text-left">
            <p className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#352253]">"{treatmentConfig.PROOF_MEDIA_QUOTE}"</p>
            <p className="text-sm md:text-base text-[#352253]/70">{treatmentConfig.PROOF_MEDIA_SUBTEXT}</p>
          </div>
        </div>
      </div>
    </section>
  );
}