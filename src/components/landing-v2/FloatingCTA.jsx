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
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg md:text-2xl px-8 py-8 md:py-10 shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group"
        >
          {/* Gentle radial glow effect */}
          <div className="absolute inset-0 bg-purple-400/30 rounded-2xl animate-ping-slow" style={{ animationDuration: '3s' }} />
          
          {/* Button content */}
          <span className="relative flex items-center justify-center gap-3">
            See if you're a good candidate
          </span>
        </Button>
      </div>
    </div>
  );
}