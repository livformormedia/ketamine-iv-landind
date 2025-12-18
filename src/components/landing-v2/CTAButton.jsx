import React from "react";
import { Button } from "@/components/ui/button";

export default function CTAButton({ onOpenAssessment }) {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center py-12">
      <Button
        size="lg"
        onClick={onOpenAssessment}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-2xl px-8 py-8 md:py-10 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl flex flex-col items-center gap-1 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-orange-400/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />
        <span className="relative">Start Healing Today</span>
        <span className="relative text-sm md:text-base font-normal">Take the 30 second quiz</span>
      </Button>
    </div>
  );
}