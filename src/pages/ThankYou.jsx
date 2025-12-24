import React, { useEffect } from "react";
import { Check, Shield } from "lucide-react";
import clinicConfig from "@/components/config/clinicConfig";

export default function ThankYou() {
  useEffect(() => {
    // Facebook Pixel Tracking
    if (window.fbq && clinicConfig.FACEBOOK_PIXEL_ID) {
      window.fbq('track', 'Lead');
    }

    // Send to Facebook Conversion API
    const sendToFacebook = async () => {
      try {
        const assessmentData = JSON.parse(localStorage.getItem('assessmentData') || '{}');
        const response = await fetch('/api/functions/sendFacebookLeadEvent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(assessmentData)
        });
      } catch (error) {
        console.error('Error sending to Facebook:', error);
      }
    };

    sendToFacebook();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        
        * { font-family: 'Montserrat', sans-serif !important; }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 193, 7, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
        }
        
        .pulse-dot {
          animation: pulse 1.5s infinite;
        }
      `}</style>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f0fdfc 0%, #e0f2f1 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5">
            
            {/* Status Banner */}
            <div className="bg-[#FFF3CD] border-b-2 border-[#FFC107] px-6 py-6 text-center text-[#856404] font-bold flex items-center justify-center gap-3 text-lg">
              <div className="w-4 h-4 bg-[#FFC107] rounded-full pulse-dot" />
              APPLICATION PENDING: ACTION REQUIRED
            </div>

            {/* Header Section */}
            <div className="px-8 py-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#352253] mb-4 leading-tight">
                You Are One <span className="text-[#ec9e21] underline decoration-[#ec9e21]">Final Step</span> Away.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 font-medium">
                We have received your assessment, but we cannot process your application until you complete this step.
              </p>
              
              <p className="text-base font-bold text-[#ec9e21] mt-4 uppercase tracking-wider">
                👇 Select the time below for a 15-minute discovery call with Dr. Greenberg
              </p>
              
              <div className="max-w-2xl mx-auto mt-6 text-left">
                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ec9e21] font-bold flex-shrink-0">•</span>
                    <span>We'll assess your medical history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ec9e21] font-bold flex-shrink-0">•</span>
                    <span>We'll explain about the different options that you have</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ec9e21] font-bold flex-shrink-0">•</span>
                    <span>If you're a good fit, we're going to create a customized treatment plan for you based on your needs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Calendar Wrapper */}
            <div className="w-full bg-white border-t border-b border-gray-200" style={{ minHeight: '800px' }}>
              <iframe 
                src="https://api.leadconnectorhq.com/widget/bookings/kccg-calls-1tv4yjl"
                scrolling="yes" 
                id="booking-calendar" 
                title="Book Discovery Call"
                className="w-full border-0"
                style={{ minHeight: '800px', height: '100%' }}
              />
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 px-8 py-12">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="font-bold text-[#b45309] mb-2 uppercase tracking-wide">
                  Why wait another day to feel better?
                </p>
                <p className="text-lg text-gray-600">
                  Every day you wait is another day of struggling. This call is your bridge to clarity, coverage verification, and potential healing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="text-[#ec9e21] flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-[#352253] text-lg block mb-1">Instant Confirmation</strong>
                    <p className="text-sm text-gray-600">
                      Secure your spot in our program before we reach capacity for the month.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="text-[#ec9e21] flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-[#352253] text-lg block mb-1">Insurance Verification</strong>
                    <p className="text-sm text-gray-600">
                      We will verify your benefits during this call so you know exactly what is covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-8 text-center bg-white border-t border-gray-200">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dbc548dd6f65762349f6aa/66cec5b30_Untitled1920x200px.png" 
                alt={clinicConfig.CLINIC_NAME}
                className="h-12 mx-auto opacity-80"
              />
              <p className="text-sm text-gray-500 mt-4">
                Your journey to mental wellness begins here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}