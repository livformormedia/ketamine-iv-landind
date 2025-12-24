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

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#352253] mb-8 md:mb-12">
          About Dr. Judah Greenberg
        </h2>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Doctor Bio */}
          <div className="space-y-4 text-[#352253]/80 leading-relaxed text-center md:text-left">
            <p>
              Dr. Judah Greenberg grew up in Dallas, Texas, and earned both his undergraduate and medical degrees from the University of Pennsylvania. After eight Philadelphia winters, he headed back South and completed his internal medicine residency at Emory University in Atlanta (with his new wife happily on board).
            </p>

            <p>
              He went on to practice in the emergency department at the Atlanta VA Medical Center and later trained in dermatology and skin surgery. During his internal medicine training, he developed a deep appreciation for how closely mental health is tied to overall well-being—an outlook that continues to shape his whole-person approach to care.
            </p>

            <p>
              While practicing dermatology and skin cancer surgery in Middle Georgia, Dr. Greenberg maintained a strong interest in psychopharmacology and closely followed the growing medical research on ketamine therapy. After seeing firsthand how powerfully ketamine can help people struggling with mental health conditions and chronic pain, he made it his mission to bring this treatment to the Middle Georgia community.
            </p>

            <p>
              Dr. Greenberg is triple board-certified in Internal Medicine, Dermatology, and Micrographic Dermatologic Surgery. He lives in Macon with his wife and six energetic children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}