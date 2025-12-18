import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "What is IV Ketamine therapy?",
    answer: "IV Ketamine therapy is a treatment that uses low-dose ketamine administered intravenously to treat depression, anxiety, PTSD, and chronic pain. Unlike traditional antidepressants that can take weeks to work, many patients experience relief within hours to days."
  },
  {
    question: "How does IV Ketamine work?",
    answer: "Ketamine works differently than traditional antidepressants. Instead of targeting serotonin, it acts on glutamate receptors in the brain, promoting new neural connections and helping \"reset\" brain circuits involved in mood regulation. This process, called neuroplasticity, can provide rapid relief from depression symptoms."
  },
  {
    question: "Is IV Ketamine safe?",
    answer: "When administered in a medical setting by trained professionals, IV Ketamine is safe. The doses used for mental health treatment are much lower than those used for anesthesia. You'll be monitored throughout your session, and side effects are typically mild and temporary."
  },
  {
    question: "What conditions does IV Ketamine treat?",
    answer: "IV Ketamine has shown effectiveness for:\n• Treatment-resistant depression\n• Major depressive disorder\n• Anxiety disorders\n• PTSD\n• OCD\n• Chronic pain conditions\n• Suicidal ideation"
  },
  {
    question: "How is IV Ketamine different from Spravato?",
    answer: "Spravato (esketamine) is a nasal spray that's FDA-approved specifically for treatment-resistant depression. IV Ketamine uses the full ketamine molecule administered intravenously. Both work similarly, but IV Ketamine offers more flexible dosing and has been used off-label for longer. Spravato is more likely to be covered by insurance."
  },
  {
    question: "How quickly does IV Ketamine work?",
    answer: "Many patients notice improvements within 1-4 hours after their first infusion, though some may need 2-3 sessions before experiencing relief. This is significantly faster than traditional antidepressants, which can take 4-8 weeks."
  },
  {
    question: "How many treatments will I need?",
    answer: "A typical initial series consists of 6 infusions over 2-3 weeks. After that, some patients need maintenance infusions every 2-6 weeks, while others experience long-lasting relief without additional treatments. Your provider will create a personalized plan based on your response."
  },
  {
    question: "What does a treatment session look like?",
    answer: "You'll relax in a comfortable chair while ketamine is administered through an IV over 40-60 minutes. You'll remain awake but may feel relaxed, disconnected, or experience mild perceptual changes. A medical professional will monitor you throughout. Most patients can resume normal activities within 1-2 hours."
  },
  {
    question: "What are the side effects?",
    answer: "Common side effects during infusion include:\n• Mild dissociation or \"floaty\" feeling\n• Relaxation or drowsiness\n• Temporary changes in perception\n• Mild nausea (rare)\n\nThese effects typically resolve within 1-2 hours after treatment. Serious side effects are rare when administered properly."
  },
  {
    question: "Will I get addicted to ketamine?",
    answer: "When used in a controlled medical setting at therapeutic doses, the risk of addiction is extremely low. You'll receive treatment under medical supervision, and the dosing schedule is designed to minimize any potential for dependence."
  },
  {
    question: "Does insurance cover IV Ketamine?",
    answer: "Most insurance plans do not currently cover IV Ketamine for mental health treatment, as it's used off-label. However, some plans may cover portions of the visit. We can provide documentation for potential reimbursement. Spravato (nasal esketamine) is more likely to be covered by insurance."
  },
  {
    question: "How much does IV Ketamine cost?",
    answer: "Treatment costs vary by clinic but typically range from $400-$800 per infusion. Initial series of 6 treatments usually cost $2,400-$4,800. Many clinics offer package pricing or payment plans."
  },
  {
    question: "Can I drive after treatment?",
    answer: "No. You should not drive for at least 24 hours after treatment. You'll need someone to drive you home after your session."
  },
  {
    question: "Who is a good candidate for IV Ketamine?",
    answer: "You may be a good candidate if:\n• You've tried 2+ antidepressants without success\n• You have treatment-resistant depression, anxiety, or PTSD\n• You're looking for rapid relief from symptoms\n• You're medically stable and cleared by a provider"
  },
  {
    question: "Who should NOT get IV Ketamine?",
    answer: "IV Ketamine may not be appropriate if you have:\n• Uncontrolled high blood pressure\n• History of psychosis or schizophrenia\n• Active substance abuse disorder\n• Certain heart conditions\n• Pregnancy or breastfeeding\n\nYour provider will assess your medical history to determine if you're a candidate."
  },
  {
    question: "How long do the results last?",
    answer: "Results vary by individual. Some patients experience relief for weeks or months after a single series. Others benefit from maintenance infusions every 4-6 weeks. When combined with therapy or lifestyle changes, results tend to last longer."
  },
  {
    question: "Is IV Ketamine FDA-approved?",
    answer: "IV Ketamine is FDA-approved as an anesthetic but is used off-label for mental health treatment. This is common in medicine—many effective treatments are used off-label based on strong research evidence. Spravato (esketamine nasal spray) is FDA-approved specifically for treatment-resistant depression."
  },
  {
    question: "What should I do to prepare for treatment?",
    answer: "• Avoid eating 2-3 hours before your session\n• Wear comfortable clothing\n• Arrange transportation home\n• Bring headphones or music if desired\n• Stay hydrated\n• Take your regular medications unless instructed otherwise"
  },
  {
    question: "Can I combine IV Ketamine with other treatments?",
    answer: "Yes. Many patients continue their current antidepressants and therapy while receiving IV Ketamine. In fact, combining ketamine with psychotherapy often enhances results. Always inform your provider about all medications and treatments you're using."
  }
];

export default function IVKetamineFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            🧠 IV Ketamine <span className="text-purple-600">FAQ</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-purple-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-slate-900 text-base md:text-lg">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}