"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen  dark:bg-black py-20 px-6 "
    >
      <div className="max-w-5xl mx-auto  text-center">
        {/* Heading */}

        <p className="text-xl mt-12 text-white dark:text-gray-300 max-w-3xl mx-auto">
          At Thinkease, we believe mental well-being should be accessible,
          private, and stigma-free. That’s why we built an AI-powered therapist
          designed to help you reflect, grow, and find calm — anytime, anywhere.
        </p>
      </div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto"
      >
        {/* Card 1 */}
        <div className="  p-8 rounded-2xl dark:border-2 dark:border-white dark:bg-black bg-white border shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            AI-Powered Support
          </h3>
          <p className="text-gray-400 dark:text-gray-400">
            Our intelligent system listens and responds with empathy, offering
            personalized strategies and resources to help you manage stress and
            anxiety.
          </p>
        </div>

        {/* Card 2 */}
        <div className=" dark:border-2 dark:border-white dark:bg-black p-8 rounded-2xl border bg-white shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold  text-black dark:text-white mb-4">
            Privacy First
          </h3>
          <p className="text-gray-400 dark:text-gray-300">
            Conversations stay secure. Thinkease prioritizes your
            confidentiality with encrypted sessions and no data sharing.
          </p>
        </div>

        {/* Card 3 */}
        <div className=" dark:border-2 dark:border-white dark:bg-black p-8 rounded-2xl border bg-white shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            Accessible to All
          </h3>
          <p className="text-gray-400 dark:text-gray-300">
            Whether you’re at home, commuting, or taking a break, Thinkease is
            always here, ensuring mental health support is never out of reach.
          </p>
        </div>
      </motion.div>

      {/* Closing Statement */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
          Our Mission
        </h3>
        <p className="text-gray-300 dark:text-gray-300">
          We aim to break barriers in mental healthcare by combining technology
          with compassion. Thinkease isn’t here to replace therapists but to
          provide support whenever you need it most.
        </p>
      </div>
    </motion.section>
  );
}
