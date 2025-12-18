import React from "react";
import { Button } from "@/components/ui/button";

export default function CTAButton({ onOpenAssessment }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
      <Button
        size="lg"
        onClick={onOpenAssessment}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl md:text-2xl px-12 py-8 shadow-xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
      >
        See if you're a good candidate
      </Button>
    </div>
  );
}