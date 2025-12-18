import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA({ onOpenAssessment }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto">
        <Button
          size="lg"
          onClick={onOpenAssessment}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-2xl px-8 py-8 md:py-10 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group"
        >
          {/* Gentle radial glow effect */}
          <div className="absolute inset-0 bg-orange-400/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />
          
          {/* Button content */}
          <span className="relative flex flex-col items-center justify-center gap-1">
            <span>Start Healing Today</span>
            <span className="text-sm md:text-base font-normal">Take the 30 second quiz</span>
          </span>
        </Button>
      </div>
    </div>
  );
}