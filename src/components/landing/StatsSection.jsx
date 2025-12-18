import React from "react";
import { Users, Award, Heart, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: Users, number: "2000+", label: "Patients Treated" },
    { icon: TrendingUp, number: "85%", label: "Success Rate" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Patient Satisfaction" }
  ];

  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-purple-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}