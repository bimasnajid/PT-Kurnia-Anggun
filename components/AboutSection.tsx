"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MotionButton from "./MotionButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 text-center min-h-screen"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-6 lg:text-4xl text-yellow-300">Tentang Kami</h2>
        <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
          PT Kurnia Anggun adalah perusahaan yang bergerak di bidang Furniture
          dan Rattan dengan fokus pada kualitas, inovasi, dan keberlanjutan.
        </p>

        {/* Visi & Misi */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
            {/* Garis Tengah hanya di desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-300" />

            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:text-right text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
                VISI
              </h3>
              <p className="text-white leading-relaxed max-w-md lg:ml-auto mx-auto text-justify lg:text-right">
                Menjadi perusahaan mebel kayu dan rotan terkemuka dari Indonesia
                yang diakui secara internasional, menghadirkan produk berkelas
                dunia yang{" "}
                <span className="font-semibold">berkualitas tinggi</span>,
                <span className="font-semibold"> inovatif</span>, dan
                <span className="font-semibold"> ramah lingkungan</span>.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:text-left text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
                MISI
              </h3>
              <ul className="text-white leading-relaxed space-y-3 max-w-md lg:mr-auto mx-auto list-decimal list-inside text-left">
                <li>
                  Menghasilkan furniture kayu dan rotan berkualitas ekspor
                  dengan desain modern.
                </li>
                <li>
                  Meningkatkan kapasitas produksi sesuai standar internasional.
                </li>
                <li>
                  Memberdayakan SDM lokal melalui pelatihan dan pengembangan
                  keterampilan.
                </li>
                <li>
                  Memperluas pasar global dengan strategi pemasaran profesional.
                </li>
                <li>Berkomitmen pada keberlanjutan dan ramah lingkungan.</li>
              </ul>
            </motion.div>
          </div>


        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/about">
            <MotionButton text="View About" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
