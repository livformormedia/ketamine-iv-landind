
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block mb-2">{treatmentConfig.HERO_HEADLINE_PART1}</span>
            <span className="block mb-2">{treatmentConfig.HERO_HEADLINE_PART2}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 block">
              {treatmentConfig.HERO_HEADLINE_PART3}
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-slate-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: treatmentConfig.HERO_SUBHEADLINE }} />
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">{treatmentConfig.HERO_TRUST_INDICATOR1_TEXT}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">{treatmentConfig.HERO_TRUST_INDICATOR2_TEXT}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">{treatmentConfig.HERO_TRUST_INDICATOR3_TEXT}</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="space-y-3 mb-8">
            <Link to={createPageUrl("assessment")}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-4 sm:py-5 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">{treatmentConfig.HERO_CTA_TEXT}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </span>
              </Button>
            </Link>
            
            <p className="text-xs text-slate-300 text-center">
              {treatmentConfig.HERO_CTA_SUBTEXT}
            </p>
          </div>

          {/* Testimonial */}
          <div className="mt-8">
            <img 
              src={treatmentConfig.HERO_TESTIMONIAL_IMAGE_URL}
              alt="Patient testimonial"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border-2 border-purple-500/30"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
