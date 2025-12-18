import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, AlertTriangle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { sendFacebookLeadEvent } from "@/functions/sendFacebookLeadEvent";
import clinicConfig from "@/components/config/clinicConfig";
import treatmentConfig from "@/components/config/ketaminePageConfig"; 

export default function ThankYou() {
  const location = useLocation();
  const assessmentData = location.state?.assessmentData;
  const firstName = assessmentData?.full_name?.split(' ')[0] || 'there';

  useEffect(() => {
    // Only run if NOT in base44 builder and we have assessment data
    if (!window.location.hostname.includes('base44.run') && assessmentData) {
      // Load Facebook Pixel
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', clinicConfig.FACEBOOK_PIXEL_ID);
      
      // Fire Lead event with contact info
      window.fbq('track', 'Lead', {
        content_name: 'Assessment Completed',
        status: assessmentData.status
      });

      // Also send via Conversion API
      sendFacebookLeadEvent({
        ...assessmentData,
        source_url: window.location.href,
        user_agent: navigator.userAgent
      }).catch(error => {
        console.error('Error sending to Conversion API:', error);
      });
    }
  }, [assessmentData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-4 md:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 mb-4 md:mb-6 text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 md:mb-3 px-2">
            Thank you, {firstName}.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-purple-700 font-semibold mb-4 md:mb-6 px-2 leading-relaxed">
            Based on your answers you'd be a good candidate for<br className="hidden sm:block" />
            {treatmentConfig.THANKYOU_CANDIDATE_TEXT}.
          </p>
          
          <div className="inline-flex items-start md:items-center gap-2 bg-amber-50 border-2 border-amber-400 px-4 md:px-6 py-2 md:py-3 rounded-xl max-w-full">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 md:mt-0" />
            <span className="font-bold text-amber-900 text-sm md:text-base text-left">Important Next Steps - Take 30 seconds to read this</span>
          </div>
        </div>

        {/* Team Photo */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 mb-4 md:mb-6">
          <img 
            src={clinicConfig.TEAM_PHOTO_URL}
            alt={`${clinicConfig.CLINIC_NAME} Care Team`}
            className="w-full rounded-xl md:rounded-2xl shadow-lg"
          />
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">So what's next?</h2>
          
          {/* Step 1 */}
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-200">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base md:text-lg">1</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  You will receive a <strong>message from our clinic in the next couple of minutes</strong>, please respond to it so we know you got it.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-200">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base md:text-lg">2</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                  In order to make the intake process easier for you, please book a time with us using this calendar below:
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full md:w-auto shadow-lg"
                >
                  📅 Book Your Evaluation
                </Button>
                <p className="text-xs md:text-sm text-slate-500 mt-2">Takes 30 seconds</p>
                
                <div className="mt-4 md:mt-6 bg-purple-50 border-2 border-purple-200 rounded-xl p-4 md:p-6">
                  <p className="text-sm md:text-base text-slate-700 mb-3">
                    You will also receive a <strong>phone call from our clinic</strong> during normal business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white rounded-lg p-4 border-2 border-purple-300">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900 text-sm md:text-base break-words">
                        Your Phone Will Ring from <span className="text-purple-700 whitespace-nowrap">{clinicConfig.CLINIC_PHONE_NUMBER}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600">Make sure to save this number 🙂</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-slate-700 mt-4 leading-relaxed">
                    Since your circumstances are unique, a <strong>Care Coordinator (C.C.)</strong> will take as much time as needed to answer all your questions with care and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base md:text-lg">3</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">We Do All The Legwork</h3>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                  {treatmentConfig.THANKYOU_STEP3_DESCRIPTION}
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4 md:p-6">
                  <p className="text-base md:text-lg text-slate-900 font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: treatmentConfig.THANKYOU_COMMITMENT_TEXT }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 text-center text-white mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 px-2">Want to talk to someone now?</h3>
          <a href={`tel:${clinicConfig.CLINIC_PHONE_NUMBER}`} className="inline-block w-full sm:w-auto">
            <Button 
              size="lg"
              className="bg-white text-purple-700 hover:bg-slate-100 text-lg md:text-xl px-8 md:px-10 py-6 md:py-7 shadow-xl font-bold w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              Call {clinicConfig.CLINIC_PHONE_NUMBER}
            </Button>
          </a>
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 text-center">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{clinicConfig.CLINIC_NAME}</h4>
          <p className="text-sm md:text-base text-slate-600 mb-1">{clinicConfig.CLINIC_ADDRESS_LINE1}</p>
          <p className="text-sm md:text-base text-slate-600 mb-4">{clinicConfig.CLINIC_ADDRESS_LINE2}</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-slate-500">
            <a href={`tel:${clinicConfig.CLINIC_PHONE_NUMBER}`} className="hover:text-purple-600 transition-colors break-words">
              📞 {clinicConfig.CLINIC_PHONE_NUMBER}
            </a>
            <a href={`mailto:${clinicConfig.CLINIC_EMAIL}`} className="hover:text-purple-600 transition-colors break-words">
              ✉️ {clinicConfig.CLINIC_EMAIL}
            </a>
          </div>
        </div>

        {/* Return Home Link */}
        <div className="text-center mt-6 md:mt-8">
          <Link to={createPageUrl("Home")} className="text-purple-600 hover:text-purple-700 font-semibold text-sm md:text-base">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}