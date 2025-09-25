"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative flex items-center"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Input Search */}
      <motion.input
        type="text"
        placeholder="Search Product..."
        className={`rounded-full px-4 py-2 pr-10 w-64 transition-all duration-300
          ${isFocused ? "shadow-lg shadow-blue-400/50" : "shadow-md"}
          text-black focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileFocus={{ scale: 1.02 }}
      />

      {/* Icon Search */}
      <motion.div
        className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Search className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}
