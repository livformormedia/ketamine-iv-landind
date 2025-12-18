import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-purple-600">Ketamine Therapy?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ketamine therapy is an innovative treatment that has shown remarkable results in treating 
              treatment-resistant depression, anxiety, PTSD, and chronic pain conditions. Unlike traditional 
              antidepressants that can take weeks to work, ketamine often provides relief within hours.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">FDA-approved for treatment-resistant depression</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Rapid onset of action - often within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Safe administration in a medical setting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Personalized treatment plans for each patient</span>
              </li>
            </ul>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Learn More About Treatment
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" 
              alt="Medical Treatment" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}