"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import MotionButton from "./MotionButton";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/wood1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl w-full px-4 sm:px-6 text-white font-bold text-center">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* // button swip Up */}
          <Link
            href="#home"
            className="fixed bottom-6 right-6 z-50 bg-yellow-300 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Swip Up
          </Link>

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              x: [0, -8, 8, 0], // sedikit slide kiri-kanan
            }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              y: { duration: 1.2, ease: "easeOut" },
              x: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            THE MANUFACTURER / EXPORTER OF RATTAN
            <br />
            METAL & WOODEN FURNITURE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-10 text-g-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              x: [0, 5, -5, 0], // slide halus ke kanan-kiri
            }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut", delay: 0.4 },
              y: { duration: 1.4, ease: "easeOut", delay: 0.4 },
              x: {
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            Created using durable materials from{" "}
            <span className="font-semibold text-whote">
              sustainable resources
            </span>
            .
          </motion.p>

          {/* Search box */}
          <motion.div
            className="w-full max-w-md relative mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative bg-white rounded-full shadow-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari sesuatu..."
                className="w-full py-2 sm:py-3 pl-10 pr-4 rounded-full text- text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {query && (
              <motion.div
                className="absolute w-full mt-2 bg-white rounded-lg shadow-lg text-black p-3 text-sm sm:text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                🔍 Hasil pencarian untuk:{" "}
                <span className="font-bold">{query}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Button */}
          <Link href="#contact">
            <MotionButton text="View Contact" />
          </Link>
        </div>
      </div>
    </section>
  );
}
