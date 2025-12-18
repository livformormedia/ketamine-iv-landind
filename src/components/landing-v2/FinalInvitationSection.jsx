
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import clinicConfig from "@/components/config/clinicConfig";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function FinalInvitationSection() {
  return (
    <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Emotional Image */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl" />
            <img 
              src={treatmentConfig.FINAL_INVITATION_IMAGE_URL}
              alt="Hope and connection"
              className="relative rounded-full shadow-2xl w-full max-w-xs md:max-w-sm mx-auto border-4 border-purple-500/50"
            />
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            {treatmentConfig.FINAL_INVITATION_HEADLINE_PART1}<br />
            {treatmentConfig.FINAL_INVITATION_HEADLINE_PART2}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{treatmentConfig.FINAL_INVITATION_HEADLINE_PART3}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2">
            {treatmentConfig.FINAL_INVITATION_SUBHEADLINE_PART1}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold mt-4 md:mt-6 max-w-4xl mx-auto px-2">
            {treatmentConfig.FINAL_INVITATION_SUBHEADLINE_PART2}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Douglas Testimonial Card */}
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {treatmentConfig.FINAL_INVITATION_TESTIMONIAL_HEADLINE}
            </h3>
            <p className="text-lg text-slate-200 mb-8 text-center">
              {treatmentConfig.FINAL_INVITATION_TESTIMONIAL_SUBTEXT}
            </p>
            
            <img 
              src={treatmentConfig.FINAL_INVITATION_TESTIMONIAL_IMAGE_URL}
              alt="Patient testimonial"
              className="w-full rounded-2xl shadow-xl border-2 border-purple-500/30"
            />
            
            <p className="text-sm text-slate-400 text-center mt-6">
              {treatmentConfig.FINAL_INVITATION_FOOTER_NOTE}
            </p>
          </div>
          
          {/* Doctor & Location Info */}
          <div>
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-8 shadow-2xl border-2 border-purple-500/30">
              <div className="flex items-start gap-6 mb-8">
                <img 
                  src={clinicConfig.MEDICAL_DIRECTOR_PHOTO_URL}
                  alt="Medical Director"
                  className="w-32 h-32 rounded-full shadow-lg border-4 border-purple-500/50"
                />
                <div>
                  <h4 className="text-2xl font-bold mb-2">{clinicConfig.MEDICAL_DIRECTOR_NAME}</h4>
                  <p className="text-slate-300 mb-4">{clinicConfig.MEDICAL_DIRECTOR_TITLE}</p>
                  <p className="text-slate-200">
                    "{clinicConfig.MEDICAL_DIRECTOR_QUOTE}"
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-purple-500/30 pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-slate-300">{clinicConfig.CLINIC_ADDRESS_LINE1}<br />{clinicConfig.CLINIC_ADDRESS_LINE2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-300">{clinicConfig.CLINIC_PHONE_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-300">{clinicConfig.CLINIC_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-slate-300">{clinicConfig.CLINIC_HOURS_MON_FRI}<br />{clinicConfig.CLINIC_HOURS_SAT}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 border-2 border-purple-500/30">
              <iframe
                src={clinicConfig.GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
