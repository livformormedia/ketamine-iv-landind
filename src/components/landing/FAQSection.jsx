import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is ketamine therapy safe?",
      answer: "Yes, when administered by trained medical professionals in a controlled setting. Ketamine has been used safely in medicine for over 50 years and is FDA-approved for certain conditions."
    },
    {
      question: "How long does a treatment session take?",
      answer: "A typical ketamine infusion session lasts 40-60 minutes, with additional time for pre-treatment evaluation and post-treatment monitoring."
    },
    {
      question: "How many treatments will I need?",
      answer: "Most patients start with a series of 6 infusions over 2-3 weeks. Your provider will create a personalized treatment plan based on your response."
    },
    {
      question: "Does insurance cover ketamine therapy?",
      answer: "Coverage varies by insurance provider and plan. We work with many insurance companies and can help verify your benefits. We also offer flexible payment options."
    },
    {
      question: "What conditions can ketamine therapy treat?",
      answer: "Ketamine therapy has shown effectiveness for treatment-resistant depression, anxiety, PTSD, OCD, bipolar disorder, and chronic pain conditions."
    },
    {
      question: "Are there any side effects?",
      answer: "Common side effects are mild and temporary, including slight nausea, dizziness, or dreamlike sensations during treatment. These typically resolve shortly after the infusion ends."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Get answers to common questions about ketamine therapy</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-purple-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-lg text-gray-900 text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-purple-50 border-t-2 border-purple-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}