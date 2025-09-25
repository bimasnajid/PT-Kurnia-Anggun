"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 md:px-16"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-white mb-6"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-10"
      >
        Hubungi kami untuk pemesanan, kerja sama bisnis, atau pertanyaan lebih
        lanjut. Tim kami siap membantu Anda!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span>www.kurniaanggunfurniture.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>info@kurniaanggun.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+62 31 1234567</span>
            </li>
          </ul>
          <div className="mt-6 text-gray-400">
            <p>
              <strong>Alamat Pabrik I:</strong> Desa Ngrame, Mojosari, Mojokerto
            </p>
            <p>
              <strong>Alamat Pabrik II:</strong> Desa Mojorejo, Pungging,
              Mojokerto
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Kirim Pesan
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Tulis pesan Anda..."
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md"
            >
              Kirim Pesan
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 text-lg mb-4">
          Ingin produk furniture berkualitas? Hubungi kami sekarang dan dapatkan
          penawaran terbaik!
        </p>
        <motion.a
          href="mailto:info@kurniaanggun.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg"
        >
          Hubungi Kami
        </motion.a>
      </motion.div>
    </section>
  );
}
