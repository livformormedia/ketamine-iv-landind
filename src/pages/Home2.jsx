import React, { useEffect, useState } from "react";
import AuthorityLogos from "../components/landing-v2/AuthorityLogos";
import HeroSection from "../components/landing-v2/HeroSection";
import TestimonialsGallery from "../components/landing-v2/TestimonialsGallery";
import WhatToExpect from "../components/landing-v2/WhatToExpect";
import ProofSection from "../components/landing-v2/ProofSection";
import AboutDoctorSection from "../components/landing-v2/AboutDoctorSection";
import FinalInvitationSection from "../components/landing-v2/FinalInvitationSection";
import FloatingCTA from "../components/landing-v2/FloatingCTA";
import AssessmentModal from "../components/landing-v2/AssessmentModal";
import CTAButton from "../components/landing-v2/CTAButton";
import IVKetamineFAQ from "../components/landing-v2/IVKetamineFAQ";

export default function Home2() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  useEffect(() => {
    const initializeFbPixel = async () => {
      // Only load Facebook Pixel if NOT in base44 builder
      if (!window.location.hostname.includes('base44.run')) {
        // Facebook Pixel Code
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        try {
          // Dynamically import the configuration file
          const clinicConfig = await import('@/components/config/clinicConfig');
          window.fbq('init', clinicConfig.default.FACEBOOK_PIXEL_ID);
          window.fbq('track', 'PageView');
        } catch (error) {
          console.error("Failed to load clinicConfig or initialize Facebook Pixel:", error);
        }
      }
    };

    initializeFbPixel();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AuthorityLogos />
      <HeroSection onOpenAssessment={() => setIsAssessmentModalOpen(true)} />
      <TestimonialsGallery />
      <CTAButton onOpenAssessment={() => setIsAssessmentModalOpen(true)} />
      <WhatToExpect />
      <CTAButton onOpenAssessment={() => setIsAssessmentModalOpen(true)} />
      <ProofSection />
      <AboutDoctorSection />
      <CTAButton onOpenAssessment={() => setIsAssessmentModalOpen(true)} />
      <IVKetamineFAQ />
      <FinalInvitationSection />
      <FloatingCTA onOpenAssessment={() => setIsAssessmentModalOpen(true)} />
      <AssessmentModal isOpen={isAssessmentModalOpen} onClose={() => setIsAssessmentModalOpen(false)} />
    </div>
  );
}