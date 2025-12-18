import React from "react";
import clinicConfig from "@/components/config/clinicConfig";

export default function AuthorityLogos() {
  return (
    <section className="bg-white py-6 md:py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs md:text-sm text-slate-500 mb-4 md:mb-6 uppercase tracking-wide">
          As Featured In
        </p>
        <div className="flex justify-center">
          <img 
            src={clinicConfig.AUTHORITY_LOGOS_IMAGE_URL}
            alt="Featured in major news outlets"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}