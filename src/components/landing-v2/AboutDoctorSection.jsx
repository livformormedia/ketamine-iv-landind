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
              Dr. Judah Greenberg grew up in Dallas, TX and earned his undergraduate and medical degrees from the University of Pennsylvania. After spending 8 long, cold winters in Philadelphia, Dr. Greenberg decided that it was time to make his way back down south (fortunately, his new wife agreed), and completed his residency in internal medicine at Emory in Atlanta.
            </p>
            
            <p>
              Dr. Greenberg then spent time working as a physician in the emergency department of the Atlanta VA Medical Center, and later went on to train in dermatology and skin surgery, but it was during his internal medicine training that Dr. Greenberg began to appreciate how vital the health of the mind is to patients' overall health and well-being.
            </p>
            
            <p>
              Throughout his extensive medical experience—from the ICU to the ER to the office—Dr. Greenberg has thus sought to cultivate a holistic approach to caring for patients, body and mind.
            </p>
            
            <p>
              While he spent the last several years practicing dermatology and skin surgery in Middle Georgia, Dr. Greenberg kept up an active interest in psychopharmacology (the study of the effects of medications on the mind and behavior) and closely followed the development of ketamine therapy in the medical literature.
            </p>
            
            <p>
              After observing firsthand the enormous benefits ketamine therapy can provide to people suffering from an array of mental health conditions (as well as chronic pain), Dr. Greenberg made it his mission to bring this revolutionary and potentially life-changing treatment to the Middle Georgia community.
            </p>
            
            <p className="font-semibold">
              Dr. Greenberg is board-certified in Internal Medicine, as well as Dermatology and Micrographic Dermatologic Surgery.
            </p>
            
            <p>
              He is proud to live in Macon with his lovely wife and 6 energetic children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}