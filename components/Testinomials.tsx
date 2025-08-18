// components/Testimonials.tsx
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      text: "ThinkEase has been a life-changer. The AI understands me better than most people and helps me process my thoughts calmly.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "James Lee",
      role: "Student",
      text: "I never thought talking to AI could feel this human. It's like having a therapist available 24/7, without judgment.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Khan",
      role: "Entrepreneur",
      text: "The daily check-ins keep me grounded. I feel heard, understood, and more mindful every day.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="py-24   ">
      <div className="px-6 lg:px-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">What People Say</h2>
        <p className="text-white mb-12 dark:text-gray-300">
          Real experiences from our amazing users
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border hover:scale-105 ease-in-out  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-blue-400 text-2xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-black">{t.name}</h4>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
