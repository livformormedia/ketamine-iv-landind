import React from "react";
import { CheckCircle, CreditCard, FileText } from "lucide-react";

export default function InsuranceSection() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insurance & <span className="text-purple-600">Payment Options</span>
          </h2>
          <p className="text-xl text-gray-600">We work with most major insurance providers</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Accepted</h3>
            <p className="text-gray-600">We accept most major insurance plans. Contact us to verify your coverage.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payment</h3>
            <p className="text-gray-600">We offer payment plans and financing options to make treatment accessible.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">Clear, upfront pricing with no hidden fees. We'll help you understand costs.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Insurance Providers We Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
            <div className="py-2">Blue Cross Blue Shield</div>
            <div className="py-2">Aetna</div>
            <div className="py-2">UnitedHealthcare</div>
            <div className="py-2">Cigna</div>
            <div className="py-2">Humana</div>
            <div className="py-2">Medicare</div>
            <div className="py-2">Medicaid</div>
            <div className="py-2">And more...</div>
          </div>
        </div>
      </div>
    </section>
  );
}