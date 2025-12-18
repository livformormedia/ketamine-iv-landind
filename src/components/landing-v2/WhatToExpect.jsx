import React from "react";
import { CheckCircle } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function WhatToExpect() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 md:mb-16">
          {treatmentConfig.WHAT_TO_EXPECT_HEADLINE}
        </h2>
        
        <div className="space-y-6">
          {treatmentConfig.WHAT_TO_EXPECT_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}