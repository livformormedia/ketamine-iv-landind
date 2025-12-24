import React from "react";
import { Sparkles, CheckCircle } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function BreakthroughSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-[#352253] to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#352253]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ec9e21]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gummy Image */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl" />
            <img 
              src={treatmentConfig.BREAKTHROUGH_IMAGE_PRODUCT_URL}
              alt="Ketamine therapy"
              className="relative rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto border-2 border-[#352253]/30"
            />
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 border-2 border-green-500/50 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="font-semibold text-sm md:text-base">A New Class of Treatment</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            {treatmentConfig.BREAKTHROUGH_HEADLINE_PART1}<br />
            {treatmentConfig.BREAKTHROUGH_HEADLINE_PART2 && (
              <span dangerouslySetInnerHTML={{ __html: treatmentConfig.BREAKTHROUGH_HEADLINE_PART2 }} />
            )}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: treatmentConfig.BREAKTHROUGH_INTRO }} />
            
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#352253] to-[#ec9e21]">
              {treatmentConfig.BREAKTHROUGH_TREATMENT_NAME}
            </p>
            
            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: treatmentConfig.BREAKTHROUGH_DESCRIPTION }} />
            
            <div className="bg-gradient-to-br from-[#352253]/50 to-[#ec9e21]/50 backdrop-blur-lg border-2 border-[#352253]/30 p-4 md:p-6 rounded-2xl shadow-xl">
              <p className="font-semibold text-white text-sm md:text-base">
                {treatmentConfig.BREAKTHROUGH_CALLOUT}
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src={treatmentConfig.BREAKTHROUGH_IMAGE_SECONDARY_URL}
              alt="At-home treatment"
              className="rounded-3xl shadow-2xl w-full border-2 border-[#352253]/30"
            />
          </div>
        </div>
        
        {/* Benefits Grid with Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {treatmentConfig.BREAKTHROUGH_BENEFITS.map((benefit, index) => (
            <div key={index}>
              <div className="bg-gradient-to-br from-[#352253]/50 to-slate-900/50 backdrop-blur-lg border-2 border-[#352253]/30 rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:border-[#352253]/50 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#352253] to-[#ec9e21] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-slate-300 text-sm md:text-base">{benefit.description}</p>
              </div>
              
              {/* Add testimonials below specific cards */}
              {index === 2 && (
                <img 
                  src={treatmentConfig.BREAKTHROUGH_TESTIMONIAL_IMAGE_URL}
                  alt="Patient testimonial"
                  className="w-full rounded-2xl shadow-xl border-2 border-[#352253]/30"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}