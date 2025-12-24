import React from "react";
import { Button } from "@/components/ui/button";

export default function CTAButton({ onOpenAssessment }) {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center py-12">
      <Button
        size="lg"
        onClick={onOpenAssessment}
        className="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />
        <span className="relative leading-tight">Start Healing Today</span>
      </Button>
    </div>
  );
}