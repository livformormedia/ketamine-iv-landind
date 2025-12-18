import React from "react";
import { Button } from "@/components/ui/button";

export default function CTAButton({ onOpenAssessment }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
      <Button
        size="lg"
        onClick={onOpenAssessment}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 shadow-xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl flex flex-col items-center gap-1"
      >
        <span>Start healing today</span>
        <span className="text-sm md:text-base font-normal">Take the 30 second quiz</span>
      </Button>
    </div>
  );
}