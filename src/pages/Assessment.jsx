
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { AssessmentResponse } from "@/entities/AssessmentResponse";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import clinicConfig from "@/components/config/clinicConfig";
import treatmentConfig from "@/components/config/ketaminePageConfig";

export default function Assessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lives_in_georgia: "",
    date_of_birth: "",
    insurance_acknowledgment: "",
    struggling_with: [],
    treatment_goals: [],
    medical_history: []
  });
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [disqualificationReason, setDisqualificationReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
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
      setDisqualificationReason(clinicConfig.ASSESSMENT_SERVICE_AREA_DISQUALIFICATION);
      submitDisqualified(`Not in ${clinicConfig.ASSESSMENT_SERVICE_AREA_NAME}`);
      return;
    }

    if (step === 2) {
      if (formData.date_of_birth && calculateAge(formData.date_of_birth) < treatmentConfig.ASSESSMENT_MIN_AGE) {
        setIsDisqualified(true);
        setDisqualificationReason(treatmentConfig.ASSESSMENT_DISQUALIFICATION_AGE);
        submitDisqualified(`Under ${treatmentConfig.ASSESSMENT_MIN_AGE} years old`);
        return;
      }
      if (!treatmentConfig.ASSESSMENT_INSURANCE_REQUIRED && formData.insurance_acknowledgment === "no") {
        setIsDisqualified(true);
        setDisqualificationReason(treatmentConfig.ASSESSMENT_DISQUALIFICATION_INSURANCE);
        submitDisqualified("Did not acknowledge insurance policy");
        return;
      }
    }

    if (step === 5) {
      const hasDisqualifyingCondition = formData.medical_history.some(condition => 
        treatmentConfig.ASSESSMENT_DISQUALIFYING_CONDITIONS.includes(condition)
      );

      if (hasDisqualifyingCondition) {
        setIsDisqualified(true);
        setDisqualificationReason(treatmentConfig.ASSESSMENT_DISQUALIFICATION_MEDICAL);
        submitDisqualified("Medical history contraindication");
        return;
      }

      // If passed all checks, submit as qualified
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
      await AssessmentResponse.create({
        ...formData,
        status: "disqualified",
        disqualification_reason: reason
      });
    } catch (error) {
      console.error("Error submitting:", error);
    }
    setIsSubmitting(false);
  };

  const submitQualified = async () => {
    setIsSubmitting(true);
    try {
      await AssessmentResponse.create({
        ...formData,
        status: "qualified"
      });
      setStep(6); // Success step
    } catch (error) {
      console.error("Error submitting:", error);
    }
    setIsSubmitting(false);
  };

  const toggleArrayItem = (array, item) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  if (isDisqualified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Thank You for Your Interest
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {disqualificationReason}
          </p>
          <Link to={createPageUrl("Home")}>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            You May Be a Candidate!
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for completing the assessment. Our medical team will review your responses and reach out within 24 hours to schedule your consultation.
          </p>
          <p className="text-slate-500 mb-8">
            Check your email for next steps and prepare any questions you'd like to discuss with our team.
          </p>
          <Link to={createPageUrl("Home")}>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.lives_in_georgia !== "";
      case 2:
        // Only require insurance_acknowledgment if ASSESSMENT_INSURANCE_REQUIRED is true
        if (treatmentConfig.ASSESSMENT_INSURANCE_REQUIRED) {
            return formData.date_of_birth !== "" && formData.insurance_acknowledgment !== "";
        }
        // If not required, only DOB is needed
        return formData.date_of_birth !== "";
      case 3:
        return formData.struggling_with.length > 0;
      case 4:
        return formData.treatment_goals.length > 0;
      case 5:
        return formData.medical_history.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm">Step {step} of 5</span>
            <span className="text-purple-300 text-sm">{Math.round((step / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Step 1: Service Area */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{clinicConfig.ASSESSMENT_SERVICE_AREA_QUESTION}</h2>
              <RadioGroup value={formData.lives_in_georgia} onValueChange={(value) => setFormData({...formData, lives_in_georgia: value})}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                    <RadioGroupItem value="yes" id="georgia-yes" />
                    <Label htmlFor="georgia-yes" className="text-lg cursor-pointer flex-1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
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
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Date of Birth</h2>
                <Input
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData({...formData, date_of_birth: e.target.value})}
                  className="text-lg p-6 mt-4"
                />
              </div>
              
              {treatmentConfig.ASSESSMENT_INSURANCE_REQUIRED && ( // This conditional renders the insurance section if it IS required. Outline logic was inverted, but this is the most logical interpretation.
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Ketamine Therapy is Not Covered by Insurance</h3>
                  <p className="text-slate-600 mb-6">
                    I understand that ketamine therapy is not covered by insurance and is an out-of-pocket investment in my health.
                  </p>
                  <RadioGroup value={formData.insurance_acknowledgment} onValueChange={(value) => setFormData({...formData, insurance_acknowledgment: value})}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                        <RadioGroupItem value="yes" id="insurance-yes" />
                        <Label htmlFor="insurance-yes" className="text-lg cursor-pointer flex-1">YES</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                        <RadioGroupItem value="no" id="insurance-no" />
                        <Label htmlFor="insurance-no" className="text-lg cursor-pointer flex-1">NO (exit survey)</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Struggling With */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Which, if any, of the following are you struggling with?</h2>
              <div className="space-y-3">
                {treatmentConfig.ASSESSMENT_STRUGGLING_WITH_OPTIONS.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What do you hope to get out of treatment?</h2>
              <div className="space-y-3">
                {treatmentConfig.ASSESSMENT_TREATMENT_GOALS_OPTIONS.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Medical History</h2>
              <p className="text-slate-600 mb-6">Ketamine therapy isn't right for everyone. Please tell us about your medical history.</p>
              <div className="space-y-3">
                {treatmentConfig.ASSESSMENT_MEDICAL_HISTORY_OPTIONS.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                    <Checkbox 
                      id={option.value}
                      checked={formData.medical_history.includes(option.value)}
                      onCheckedChange={() => setFormData({...formData, medical_history: toggleArrayItem(formData.medical_history, option.value)})}
                    />
                    <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">{option.label}</Label>
                  </div>
                ))}
                <div className="flex items-center space-x-3 p-4 border-2 border-slate-200 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                  <Checkbox 
                    id="none"
                    checked={formData.medical_history.includes("none")}
                    onCheckedChange={() => setFormData({...formData, medical_history: toggleArrayItem(formData.medical_history, "none")})}
                  />
                  <Label htmlFor="none" className="text-lg cursor-pointer flex-1 font-semibold">None of these apply to me</Label>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 italic">
                If none of these apply to you, click "Next" to continue.
              </p>
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
              className="ml-auto bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
            >
              {isSubmitting ? "Submitting..." : (step === 5 ? "Submit" : "Next")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
