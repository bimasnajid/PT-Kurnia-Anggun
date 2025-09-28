"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pathname = usePathname();

  // fungsi untuk smooth scroll
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Company Info */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold text-white mb-4">
            PT Kurnia Anggun
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Perusahaan furnitur kayu asal Jepara, Jawa Timur. Fokus pada
            kualitas, inovasi, dan keberlanjutan untuk menghadirkan produk kelas
            dunia bagi konsumen lokal maupun internasional.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              Dusun Bangun Pungging, Mojosari, Mojokerto, Jawa Timur
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              +62 812 3456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              info@ptkurniaanggun.com
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold text-white mb-4">
            Tautan Cepat
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Tentang Kami
                </a>
              ) : (
                <Link href="/#about" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#products"
                  onClick={(e) => handleScroll(e, "products")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Produk
                </a>
              ) : (
                <Link href="/#products" className="hover:text-white transition">
                  Produk
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Kontak
                </a>
              ) : (
                <Link href="/#contact" className="hover:text-white transition">
                  Kontak
                </Link>
              )}
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        © {new Date().getFullYear()} PT Kurnia Anggun. Semua Hak Dilindungi.
      </motion.div>
    </footer>
  );
}

