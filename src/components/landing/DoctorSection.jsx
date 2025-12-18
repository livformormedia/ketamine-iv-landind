import React from "react";
import { Award, GraduationCap, Heart } from "lucide-react";

export default function DoctorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop" 
              alt="Dr. Medical Professional" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Meet Your <span className="text-amber-400">Care Team</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Our board-certified medical professionals are dedicated to providing personalized, 
              compassionate care using the latest advances in ketamine therapy.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Board Certified</h3>
                  <p className="text-purple-200">Extensively trained in ketamine therapy and mental health treatment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
                  <p className="text-purple-200">Helping thousands of patients find relief and recovery</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                  <p className="text-purple-200">We treat every patient with dignity, respect, and individualized attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}