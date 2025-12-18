import React from "react";

export default function AboutDoctorSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Image - Centered at top */}
        <div className="text-center mb-8 md:mb-12">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/898bd64d4_image.png"
            alt="Dr. Judah Greenberg"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl mx-auto object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
          About Dr. Judah Greenberg
        </h2>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Doctor Bio */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-center md:text-left">
            <p>
              Dr. Judah Greenberg earned his medical degree from the University of Pennsylvania and completed his residency at Emory. He's board-certified in Internal Medicine and Dermatology, with experience ranging from the ICU to the ER. After witnessing the transformative power of ketamine therapy, he brought this breakthrough treatment to Middle Georgia. He lives in Macon with his wife and 6 children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}