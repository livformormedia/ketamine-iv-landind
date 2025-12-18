import React from "react";
import { Check } from "lucide-react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {treatmentConfig.PRICING_HEADLINE_PART1}<br />
            <span className="text-amber-400">{treatmentConfig.PRICING_HEADLINE_PART2}</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold mb-6">
                {treatmentConfig.PRICING_PACKAGE_BADGE}
              </div>
              <h3 className="text-3xl font-bold mb-4">{treatmentConfig.PRICING_PACKAGE_NAME}</h3>
              <div className="flex items-end justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold text-purple-600">{treatmentConfig.PRICING_AMOUNT}</span>
              </div>
              <p className="text-xl text-slate-600 mt-4" dangerouslySetInnerHTML={{ __html: treatmentConfig.PRICING_PER_DAY }} />
              <p className="text-slate-500 mt-2">
                {treatmentConfig.PRICING_COMPARISON}
              </p>
            </div>
            
            <div className="border-t border-slate-200 pt-8 mb-8">
              <h4 className="font-bold text-xl mb-6 text-center">Everything Included:</h4>
              <ul className="space-y-4">
                {treatmentConfig.PRICING_INCLUDES.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-center text-sm text-slate-500 mt-4">
              {treatmentConfig.PRICING_FOOTER_NOTE}
            </p>
          </div>
          
          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">{treatmentConfig.PRICING_PAYMENT_PLANS_TITLE}</h4>
              <p className="text-slate-200">
                {treatmentConfig.PRICING_PAYMENT_PLANS_DESC}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">{treatmentConfig.PRICING_INSURANCE_TITLE}</h4>
              <p className="text-slate-200">
                {treatmentConfig.PRICING_INSURANCE_DESC}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}