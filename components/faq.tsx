"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full border-b border-white py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <p className="mt-2 text-white text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "Is my data private?",
      answer:
        "Yes, Thinkease ensures your conversations are encrypted and never shared with third parties.",
    },
    {
      question: "How is AI therapy different from real therapy?",
      answer:
        "AI therapy is a supportive tool available 24/7. It’s not a replacement for professional care but can help with everyday stress and mindfulness.",
    },
    {
      question: "Can I use Thinkease for free?",
      answer:
        "Yes, we offer a free tier with limited sessions. You can upgrade for unlimited access and advanced features.",
    },
  ];

  return (
    <section className=" text-white py-20    px-4 md:px-10">
      <h2 className="text-5xl [text-shadow:_1px_1px_0_rgb(0_0_0)] font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
