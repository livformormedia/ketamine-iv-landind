
import React from "react";
import { X, Check } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function ComparisonSection() {
  // The 'comparisons' array is now sourced from treatmentConfig.COMPARISON_ITEMS
  // const comparisons = [
  //   {
  //     other: "High-dose psychedelic trips",
  //     us: "Gentle microdose protocol"
  //   },
  //   {
  //     other: "$400–$600 per session",
  //     us: "$750 for full 3-month program"
  //   },
  //   {
  //     other: "Online-only support",
  //     us: "Local, responsive clinic"
  //   },
  //   {
  //     other: "One-size-fits-all approach",
  //     us: "Personalized treatment plan"
  //   },
  //   {
  //     other: "Limited availability",
  //     us: "Fast enrollment, 48hr turnaround"
  //   }
  // ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {treatmentConfig.COMPARISON_HEADLINE_PART1}<br />
            <span dangerouslySetInnerHTML={{ __html: treatmentConfig.COMPARISON_HEADLINE_PART2 }} />
          </h2>
          <p className="text-xl text-slate-300">
            {treatmentConfig.COMPARISON_SUBHEADLINE}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-500/30">
          {/* Header */}
          <div className="grid grid-cols-2 bg-gradient-to-r from-slate-900 to-purple-900 text-white border-b-2 border-purple-500/30">
            <div className="p-6 text-center border-r-2 border-purple-500/30">
              <h3 className="text-xl font-bold">Other Programs</h3>
            </div>
            <div className="p-6 text-center bg-gradient-to-r from-purple-600 to-purple-800">
              <h3 className="text-xl font-bold">Our Program ✓</h3>
            </div>
          </div>
          
          {/* Comparisons */}
          {treatmentConfig.COMPARISON_ITEMS.map((comparison, index) => (
            <div 
              key={index} 
              className="grid grid-cols-2 border-b border-purple-500/20 last:border-b-0"
            >
              <div className="p-6 border-r-2 border-purple-500/20 flex items-center gap-3 bg-red-950/20">
                <X className="w-6 h-6 text-red-400 flex-shrink-0" />
                <span className="text-slate-300">{comparison.other}</span>
              </div>
              <div className="p-6 flex items-center gap-3 bg-green-950/20">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-white">{comparison.us}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {treatmentConfig.COMPARISON_ADDITIONAL_BENEFITS.map((benefit, index) => {
            const gradients = [
              "from-amber-900/30 to-orange-900/30 border-amber-500/30 hover:border-amber-400/50",
              "from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:border-blue-400/50",
              "from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/50"
            ];
            
            return (
              <div key={index} className={`bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-sm rounded-2xl p-6 border-2 text-center shadow-xl transition-all`}>
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
