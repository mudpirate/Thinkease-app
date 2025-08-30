"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Router, { useRouter } from "next/router";
import { X } from "lucide-react";
import { useSession } from "@/lib/context/session-context";

export default function Hero() {
 
  const {isAuthenticated} = useSession()
  return (
    <div className="">
      <section className="relative  h-[100vh] flex  flex-col  items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/11.png" // Replace with your own image in public/
            alt="Calm therapy background"
            fill
            priority
            className=""
          />
          {/* Inset Overlay */}

          <div className="absolute inset-0 dark:bg-black/50 backdrop-blur-sm" />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 text-center mt-15 px-6"
        >
          <h1 className="text-6xl sm:text-9xl font-bold text-white  ">
            Find Your{" "}
            <span className="text-sky-300 italic font-mono">Calm</span>
          </h1>

          <p className="mt-7 text-lg text-white font-semibold max-w-2xl mx-auto">
            Your AI-powered companion for calm, care, and clarity, whenever you
            need it. Always here to listen, guide, and uplift you through life’s
            challenges.
          </p>
          <Link
            href={isAuthenticated ? "/dashboard" : "/login"}
            className="inline-block mt-12 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg transition"
          >
            {"Start your journey "}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
