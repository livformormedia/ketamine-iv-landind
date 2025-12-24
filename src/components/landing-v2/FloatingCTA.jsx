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
            className="w-full bg-[#ec9e21] hover:bg-[#ec9e21]/90 text-white text-base md:text-xl px-6 py-6 md:py-8 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group"
          >
            {/* Gentle radial glow effect */}
            <div className="absolute inset-0 bg-[#ec9e21]/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />

            {/* Button content */}
            <span className="relative leading-tight">Start Healing Today</span>
          </Button>
      </div>
    </div>
  );
}