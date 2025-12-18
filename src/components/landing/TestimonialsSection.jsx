import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Treatment-Resistant Depression",
      text: "After years of trying different medications, ketamine therapy finally gave me my life back. I felt relief within the first treatment.",
      rating: 5
    },
    {
      name: "John D.",
      condition: "PTSD",
      text: "The team here is incredibly professional and caring. I finally feel like myself again after struggling for so long.",
      rating: 5
    },
    {
      name: "Emily R.",
      condition: "Chronic Pain & Anxiety",
      text: "I was skeptical at first, but the results speak for themselves. My pain levels have decreased significantly and my anxiety is manageable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-purple-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600">Real stories from real people</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.condition}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}