
import React from "react";
import { Star } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function ProofSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            {treatmentConfig.PROOF_HEADLINE_PART1} <span className="text-amber-400">{treatmentConfig.PROOF_HEADLINE_PART2}</span>.<br />
            {treatmentConfig.PROOF_HEADLINE_PART3}
          </h2>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {treatmentConfig.PROOF_STATS.map((stat, index) => {
            const gradients = [
              "from-blue-900/50 to-purple-900/50 border-blue-500/30 hover:border-blue-400/50",
              "from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-purple-400/50",
              "from-pink-900/50 to-red-900/50 border-pink-500/30 hover:border-pink-400/50"
            ];
            const textGradients = [
              "from-amber-400 to-orange-400",
              "from-purple-400 to-pink-400",
              "from-pink-400 to-red-400"
            ];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${gradients[index]} backdrop-blur-lg border-2 rounded-3xl p-6 md:p-8 text-center shadow-2xl transition-all`}>
                <div className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${textGradients[index]} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-sm md:text-lg text-slate-200">{stat.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Research Institutions */}
        <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-lg border-2 border-purple-500/30 rounded-3xl p-6 md:p-8 mb-12 md:mb-16 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Research Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16">
            {treatmentConfig.PROOF_RESEARCH_INSTITUTIONS.map((institution, index) => (
              <div key={index} className="text-base md:text-xl font-semibold text-slate-300">{institution}</div>
            ))}
          </div>
        </div>
        
        {/* Media Mention */}
        <div className="bg-gradient-to-r from-red-900/50 to-transparent backdrop-blur-sm border-2 border-red-500/30 rounded-3xl p-6 md:p-8 mb-12 md:mb-16 flex flex-col sm:flex-row items-center gap-4 md:gap-6 shadow-2xl">
          <div className="text-4xl md:text-6xl font-bold text-red-500">{treatmentConfig.PROOF_MEDIA_OUTLET}</div>
          <div className="text-center sm:text-left">
            <p className="text-lg md:text-xl font-semibold mb-1 md:mb-2">"{treatmentConfig.PROOF_MEDIA_QUOTE}"</p>
            <p className="text-sm md:text-base text-slate-300">{treatmentConfig.PROOF_MEDIA_SUBTEXT}</p>
          </div>
        </div>
        
        {/* Patient Testimonials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Real Stories from Real Patients</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {treatmentConfig.PROOF_TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-lg border-2 border-purple-500/30 rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all hover:border-purple-400/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-slate-200 mb-4 md:mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-slate-400">{testimonial.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
