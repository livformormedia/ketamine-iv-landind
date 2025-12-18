import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">
            {treatmentConfig.HERO_HEADLINE}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-purple-700 font-semibold">
            {treatmentConfig.HERO_SUBHEADLINE}
          </p>
          
          {/* Disclaimer */}
          <p className="text-sm md:text-base mb-8 md:mb-10 text-slate-600 max-w-3xl mx-auto">
            {treatmentConfig.HERO_DISCLAIMER}
          </p>
          
          {/* CTA Button */}
          <div className="space-y-3">
            <Link to={createPageUrl("assessment")}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">{treatmentConfig.HERO_CTA_TEXT}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </span>
              </Button>
            </Link>
            
            <p className="text-sm text-slate-600 text-center">
              {treatmentConfig.HERO_CTA_SUBTEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}