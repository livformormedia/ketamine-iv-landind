import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function FloatingCTA() {
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
        <Link to={createPageUrl("assessment")}>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-lg md:text-2xl px-8 py-8 md:py-10 shadow-2xl animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300 font-bold rounded-2xl relative overflow-hidden group">

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity" />
            
            {/* Button content */}
            <span className="text-2xl text-base relative flex items-center justify-center gap-3">Take the Free 2-Minute Assessment


            </span>
          </Button>
        </Link>
      </div>
    </div>);

}