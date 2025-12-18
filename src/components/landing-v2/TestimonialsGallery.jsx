import React from "react";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function TestimonialsGallery() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 md:mb-16">
          {treatmentConfig.TESTIMONIALS_HEADLINE}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatmentConfig.TESTIMONIAL_IMAGES.map((imageUrl, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100"
            >
              <img 
                src={imageUrl}
                alt={`Patient testimonial ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}