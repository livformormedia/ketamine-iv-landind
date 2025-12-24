import React from "react";
import { Button } from "@/components/ui/button";

export default function CTAButton({ onOpenAssessment }) {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center py-12">
      <Button
        size="lg"
        onClick={onOpenAssessment}
        className="w-full bg-gradient-to-r from-[#ec9e21] to-[#ec9e21]/90 hover:from-[#ec9e21]/90 hover:to-[#ec9e21]/80 text-white text-lg md:text-2xl px-8 py-8 md:py-10 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />
        <span className="relative">Take the First Step Toward Healing Today</span>
      </Button>
    </div>
  );
}