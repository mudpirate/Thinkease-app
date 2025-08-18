"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Shield,
  Fingerprint,
  Activity,
  Bot,
  LineChart,
  Wifi,
  Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-black" />,
    title: "AI-Powered Therapy",
    description:
      "24/7 access to empathetic AI agents trained in various therapeutic approaches, providing personalized mental health support.",
  },
  {
    icon: <Shield className="w-10 h-10 text-black" />,
    title: "Blockchain Security",
    description:
      "Your therapy sessions are secured by blockchain technology, ensuring complete privacy and transparent record-keeping.",
  },
  {
    icon: <Brain className="w-10 h-10 text-black" />,
    title: "Smart Analysis",
    description:
      "Advanced NLP and emotion detection helps understand your mental state and provide appropriate interventions.",
  },
  {
    icon: <Activity className="w-10 h-10 text-black" />,
    title: "Crisis Detection",
    description:
      "Real-time monitoring and emergency response protocols to ensure your safety during critical situations.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-black" />,
    title: "IoT Integration",
    description:
      "Connect with smart home devices to create an ambient therapeutic environment that adapts to your needs.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-black" />,
    title: "Progress Tracking",
    description:
      "Detailed analytics and insights about your mental health journey, with blockchain-verified session records.",
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-black" />,
    title: "Privacy First",
    description:
      "End-to-end encryption and zero-knowledge proofs ensure your data remains completely confidential.",
  },
  {
    icon: <Heart className="w-10 h-10 text-black" />,
    title: "Holistic Care",
    description:
      "Integration with wearables and health providers for comprehensive mental wellness monitoring.",
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-white text-7xl font-bold ">Features</span>

          <p className="text-xl text-gray-200 mt-3 max-w-2xl mx-auto">
            Discover how our AI-powered platform revolutionizes mental health
            support with cutting-edge technology and unwavering privacy
            protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white backdrop-blur-md ">
                <div className="mb-4 ">
                  <h1 className="">{feature.icon}</h1>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className=" text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl text-white font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of users benefiting from AI-powered mental health
            support.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Your Journey
            <Heart className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
