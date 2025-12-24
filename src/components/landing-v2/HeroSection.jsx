import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function HeroSection({ onOpenAssessment }) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#352253]/5 via-white to-[#ec9e21]/5 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#352253] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ec9e21] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">
            {treatmentConfig.HERO_HEADLINE}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-[#352253] font-semibold">
            {treatmentConfig.HERO_SUBHEADLINE}
          </p>
          
          {/* Disclaimer */}
          <p className="text-sm md:text-base mb-8 md:mb-10 text-slate-600 max-w-3xl mx-auto">
            {treatmentConfig.HERO_DISCLAIMER}
          </p>
          
          {/* Video */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="relative w-full" style={{ padding: '56.25% 0 0 0' }}>
              <iframe 
                src="https://fast.wistia.net/embed/iframe/nc5ldg3nj9?seo=true&videoFoam=true"
                title="Ketamine Therapy Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-4xl mx-auto">
            <Button 
              size="lg"
              onClick={onOpenAssessment}
              className="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="leading-tight">Start Healing Today</span>
                <span className="text-xs md:text-sm font-normal opacity-90">Take the 30 second quiz</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}