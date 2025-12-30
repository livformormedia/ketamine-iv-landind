import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, X, CheckCircle, XCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { sendAssessmentToMake } from "@/functions/sendAssessmentToMake";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AssessmentModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lives_in_georgia: "",
    date_of_birth: "",
    insurance_acknowledgment: "",
    struggling_with: [],
    treatment_goals: [],
    medical_history: [],
    full_name: "",
    email: "",
    phone: "",
    sms_consent: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [disqualificationReason, setDisqualificationReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Capture UTM parameters on mount
  useEffect(() => {
    if (isOpen) {
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || ''
      };
      
      setFormData(prev => ({ ...prev, ...utmData }));
    }
  }, [isOpen]);

  // Fire custom event when modal opens
  useEffect(() => {
    if (isOpen && typeof window.fbq !== 'undefined') {
      window.fbq('trackCustom', 'opened-assessment');
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const calculateAge = (birthDate) => {
    // Parse MM/DD/YYYY format
    const parts = birthDate.split('/');
    if (parts.length !== 3) return 0;
    
    const month = parseInt(parts[0], 10) - 1; // JS months are 0-indexed
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    
    const today = new Date();
    const birth = new Date(year, month, day);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleNext = () => {
    // Check disqualification conditions
    if (step === 1 && formData.lives_in_georgia === "no") {
      setIsDisqualified(true);
      setDisqualificationReason("Unfortunately, we currently only serve patients in Georgia.");
      submitDisqualified("Not in Georgia");
      return;
    }

    if (step === 2) {
      if (formData.date_of_birth && calculateAge(formData.date_of_birth) < 18) {
        setIsDisqualified(true);
        setDisqualificationReason("You must be 18 years or older to qualify for ketamine therapy.");
        submitDisqualified("Under 18 years old");
        return;
      }
      if (formData.insurance_acknowledgment === "no") {
        setIsDisqualified(true);
        setDisqualificationReason("Understanding the out-of-pocket investment is required to proceed.");
        submitDisqualified("Did not acknowledge insurance policy");
        return;
      }
    }

    if (step === 5) {
      const disqualifyingConditions = [
        "pregnant_or_planning",
        "schizophrenia_psychosis",
        "family_schizophrenia",
        "uncontrolled_hypertension",
        "liver_problems",
        "heart_failure",
        "aneurysm_stroke"
      ];
      
      const hasDisqualifyingCondition = formData.medical_history.some(condition => 
        disqualifyingConditions.includes(condition)
      );

      if (hasDisqualifyingCondition) {
        setIsDisqualified(true);
        setDisqualificationReason("Based on your medical history, ketamine therapy may not be safe for you at this time. Please consult with your primary care physician.");
        submitDisqualified("Medical history contraindication");
        return;
      }
    }

    // If on step 6 (contact info), submit the form
    if (step === 6) {
      submitQualified();
      return;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const submitDisqualified = async (reason) => {
    setIsSubmitting(true);
    try {
      const response = await base44.entities.AssessmentResponse.create({
        ...formData,
        status: "disqualified",
        disqualification_reason: reason
      });
      
      await sendAssessmentToMake({
        ...formData,
        status: "disqualified",
        disqualification_reason: reason,
        assessment_id: response.id
      });
    } catch (error) {
      console.error("ERROR in submitDisqualified:", error);
    }
    setIsSubmitting(false);
  };

  const submitQualified = async () => {
    setIsSubmitting(true);
    try {
      const response = await base44.entities.AssessmentResponse.create({
        ...formData,
        status: "qualified"
      });
      
      await sendAssessmentToMake({
        ...formData,
        status: "qualified",
        assessment_id: response.id
      });
      
      // Close modal and redirect to thank you page
      onClose();
      navigate(createPageUrl("ThankYou"), { 
        state: { 
          assessmentData: {
            ...formData,
            assessment_id: response.id,
            status: "qualified"
          }
        }
      });
    } catch (error) {
      console.error("ERROR in submitQualified:", error);
      alert(`Error submitting assessment: ${error.message}`);
    }
    setIsSubmitting(false);
  };

  const toggleArrayItem = (array, item) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.lives_in_georgia !== "";
      case 2:
        return formData.date_of_birth !== "" && formData.insurance_acknowledgment !== "";
      case 3:
        return formData.struggling_with.length > 0;
      case 4:
        return formData.treatment_goals.length > 0;
      case 5:
        return formData.medical_history.length > 0;
      case 6:
        return formData.full_name !== "" && formData.email !== "" && formData.phone !== "";
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {isDisqualified ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You for Your Interest
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {disqualificationReason}
            </p>
            <Button onClick={onClose} className="bg-[#352253] hover:bg-[#352253]/90">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm">Step {step} of 6</span>
                <span className="text-purple-300 text-sm">{Math.round((step / 6) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#352253] to-[#ec9e21] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl max-h-[70vh] overflow-y-auto">
              {/* Step 1: Georgia Resident */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Do you live in Georgia?</h2>
                  <RadioGroup value={formData.lives_in_georgia} onValueChange={(value) => setFormData({...formData, lives_in_georgia: value})}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                        <RadioGroupItem value="yes" id="georgia-yes" />
                        <Label htmlFor="georgia-yes" className="text-lg cursor-pointer flex-1">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                        <RadioGroupItem value="no" id="georgia-no" />
                        <Label htmlFor="georgia-no" className="text-lg cursor-pointer flex-1">No</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 2: DOB and Insurance */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Date of Birth</h2>
                    <p className="text-slate-600 text-sm mb-4">Format: MM/DD/YYYY</p>
                    <Input
                      type="text"
                      value={formData.date_of_birth}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2);
                        if (value.length >= 5) value = value.slice(0, 5) + '/' + value.slice(5, 9);
                        setFormData({...formData, date_of_birth: value});
                      }}
                      placeholder="MM/DD/YYYY"
                      maxLength={10}
                      className="text-lg p-6 mt-4"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Ketamine Therapy is Not Covered by Insurance</h3>
                    <p className="text-slate-600 mb-6">
                      I understand that ketamine therapy is not covered by insurance and is an out-of-pocket investment in my mental health and future success.
                    </p>
                    <RadioGroup value={formData.insurance_acknowledgment} onValueChange={(value) => setFormData({...formData, insurance_acknowledgment: value})}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                          <RadioGroupItem value="yes" id="insurance-yes" />
                          <Label htmlFor="insurance-yes" className="text-lg cursor-pointer flex-1">YES</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                          <RadioGroupItem value="no" id="insurance-no" />
                          <Label htmlFor="insurance-no" className="text-lg cursor-pointer flex-1">NO (exit survey)</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 3: Struggling With */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Which, if any, of the following are you struggling with?</h2>
                  <div className="space-y-3">
                    {[
                      { value: "anxiety", label: "Anxiety" },
                      { value: "depression", label: "Depression" },
                      { value: "ptsd", label: "PTSD" },
                      { value: "eating_disorder", label: "Eating Disorder" },
                      { value: "autism", label: "Autism" },
                      { value: "migraines", label: "Migraines" },
                      { value: "chronic_nerve_pain", label: "Chronic Nerve Pain" },
                      { value: "other", label: "Other" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                        <Checkbox 
                          id={option.value}
                          checked={formData.struggling_with.includes(option.value)}
                          onCheckedChange={() => setFormData({...formData, struggling_with: toggleArrayItem(formData.struggling_with, option.value)})}
                        />
                        <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Treatment Goals */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What do you hope to get out of treatment?</h2>
                  <div className="space-y-3">
                    {[
                      { value: "improve_mood", label: "Improve my mood and overall outlook" },
                      { value: "lower_anxiety", label: "Lower my anxiety levels" },
                      { value: "mental_clarity", label: "Achieve greater mental clarity" },
                      { value: "break_negative_patterns", label: "Get 'unstuck' or break free from negative thought patterns" },
                      { value: "increase_motivation", label: "Increase motivation and drive" },
                      { value: "process_trauma", label: "Process past trauma" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                        <Checkbox 
                          id={option.value}
                          checked={formData.treatment_goals.includes(option.value)}
                          onCheckedChange={() => setFormData({...formData, treatment_goals: toggleArrayItem(formData.treatment_goals, option.value)})}
                        />
                        <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Medical History */}
              {step === 5 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Medical History</h2>
                  <p className="text-slate-600 mb-6">Ketamine therapy isn't right for everyone. Please tell us about your medical history.</p>
                  <div className="space-y-3">
                    {[
                      { value: "pregnant_or_planning", label: "I am pregnant, or plan to become pregnant" },
                      { value: "schizophrenia_psychosis", label: "I have a history of schizophrenia or psychosis" },
                      { value: "family_schizophrenia", label: "My family has a history of schizophrenia or psychosis" },
                      { value: "uncontrolled_hypertension", label: "I have uncontrolled hypertension" },
                      { value: "liver_problems", label: "I have a history of liver problems or cirrhosis" },
                      { value: "heart_failure", label: "I have had congestive heart failure" },
                      { value: "aneurysm_stroke", label: "I have had an aneurysm or hemorrhagic stroke" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                        <Checkbox 
                          id={option.value}
                          checked={formData.medical_history.includes(option.value)}
                          onCheckedChange={() => setFormData({...formData, medical_history: toggleArrayItem(formData.medical_history, option.value)})}
                        />
                        <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">{option.label}</Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-[#352253] transition-colors cursor-pointer">
                      <Checkbox 
                        id="none"
                        checked={formData.medical_history.includes("none")}
                        onCheckedChange={() => setFormData({...formData, medical_history: toggleArrayItem(formData.medical_history, "none")})}
                      />
                      <Label htmlFor="none" className="text-lg cursor-pointer flex-1 font-semibold">None of these apply to me</Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Contact Information */}
              {step === 6 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">How Can We Contact You?</h2>
                  <p className="text-slate-600 mb-6">We'll use this information to reach out about your consultation.</p>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="full_name" className="text-lg font-semibold mb-2 block">Full Name *</Label>
                      <Input
                        id="full_name"
                        type="text"
                        value={formData.full_name}
                        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                        placeholder="John Smith"
                        className="text-lg p-6"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-lg font-semibold mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="text-lg p-6"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-lg font-semibold mb-2 block">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(478) 123-4567"
                        className="text-lg p-6"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 border-2 border-slate-200 rounded-xl">
                      <Checkbox 
                        id="sms_consent"
                        checked={formData.sms_consent}
                        onCheckedChange={(checked) => setFormData({...formData, sms_consent: checked})}
                      />
                      <Label htmlFor="sms_consent" className="text-sm cursor-pointer leading-relaxed">
                        I Consent to Receive SMS Notifications from Ketamine Center Of Central Georgia. You can reply STOP to unsubscribe at any time.
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                {step > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handleBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="ml-auto bg-[#ec9e21] hover:bg-[#ec9e21]/90 flex items-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : (step === 6 ? "Submit" : "Next")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}