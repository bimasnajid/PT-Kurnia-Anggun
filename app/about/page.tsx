"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MotionButton from "@/components/MotionButton";

export default function AboutPage() {
  const timeline = [
    {
      year: "2005",
      title: "Awal Berdiri",
      desc: "PT Kurnia Anggun lahir di Dusun Bangun, Desa Pungging, Kecamatan Mojosari, Kabupaten Mojokerto, Jawa Timur. Awalnya hanya berupa usaha keluarga yang memproduksi furnitur kayu jati secara tradisional.",
    },
    {
      year: "2010",
      title: "Ekspansi Nasional",
      desc: "Seiring meningkatnya permintaan, PT Kurnia Anggun memperluas pasar ke berbagai kota besar di Indonesia. Kapasitas produksi ditingkatkan dengan mesin modern dan tenaga kerja ahli.",
    },
    {
      year: "2015",
      title: "Go International",
      desc: "Produk PT Kurnia Anggun mulai menembus pasar Asia dan Eropa. Keindahan furnitur kayu Indonesia berhasil dikenal dan diminati buyer internasional.",
    },
    {
      year: "2020",
      title: "Digitalisasi & Inovasi",
      desc: "Transformasi digital dimulai dengan menghadirkan sistem pemasaran online, company profile digital, serta layanan pemesanan berbasis website untuk menjangkau lebih banyak konsumen global.",
    },
    {
      year: "2025",
      title: "Fokus Sustainability",
      desc: "Menggunakan kayu legal, ramah lingkungan, dan bersertifikat, serta mengembangkan desain furnitur premium yang berkelanjutan sesuai tren global.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Judul */}
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">
          Tentang PT Kurnia Anggun
        </h1>

        {/* Lokasi */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            PT Kurnia Anggun berlokasi di{" "}
            <span className="font-semibold">
              Dusun Bangun, Desa Pungging, Kecamatan Mojosari, Kabupaten
              Mojokerto, Jawa Timur
            </span>
            . Dengan akar lokal yang kuat, kami tumbuh menjadi perusahaan
            furnitur modern dengan visi global.
          </p>
        </div>

        {/* Sejarah */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Sejarah Perusahaan
          </h2>
          <div className="relative border-l-4 border-red-500 pl-8 space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-red-600">
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-700 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <Image
              src="/images/founder.jpg"
              alt="Pendiri PT Kurnia Anggun"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Pemilik & Founder</h2>
            <p className="text-lg leading-relaxed text-justify">
              PT Kurnia Anggun didirikan oleh{" "}
              <span className="font-bold">Bapak Ahmad Kurnia</span>, seorang
              visioner yang ingin mengangkat potensi kayu Indonesia ke panggung
              dunia. Dengan pengalaman lebih dari 20 tahun di industri furnitur,
              beliau membangun perusahaan ini dengan komitmen terhadap{" "}
              <span className="font-semibold">
                kualitas, keindahan, dan keberlanjutan
              </span>
              .
            </p>
          </div>
        </div>

        {/* Divisi */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Divisi Utama Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <Image
                src="/images/divisi-produksi.jpg"
                alt="Divisi Produksi"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">Produksi</h3>
              <p className="text-gray-600">
                Menghasilkan furnitur berkualitas tinggi dengan standar
                internasional, memadukan kearifan lokal dengan teknologi modern.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <Image
                src="/images/divisi-desain.jpg"
                alt="Divisi Desain"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">Desain</h3>
              <p className="text-gray-600">
                Tim kreatif menghadirkan desain kontemporer yang elegan,
                fungsional, dan sesuai tren global.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <Image
                src="/images/divisi-distribusi.jpg"
                alt="Divisi Distribusi"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">Distribusi</h3>
              <p className="text-gray-600">
                Menjangkau konsumen lokal & internasional dengan jaringan
                distribusi yang terpercaya.
              </p>
            </div>
          </div>
        </div>

        {/* Produk */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Produk Unggulan
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Keane", "Basque", "Milano", "Blake", "Dawson", "SH"].map(
              (product, i) => (
                <motion.div
                  key={i}
                  className="p-4 border rounded-lg hover:shadow-md transition"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/projectImages/${product}/CanopyKing.jpg`}
                    alt={product}
                    width={400}
                    height={300}
                    className="rounded-md mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg text-center">{product}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Kayu */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Jenis Kayu</h2>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            Kami menggunakan kayu pilihan yang telah melewati proses legal dan
            ramah lingkungan untuk memastikan furnitur kami kuat, tahan lama,
            serta memiliki nilai estetika tinggi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              Kayu Jati – tahan cuaca, mewah, sangat diminati pasar global.
            </li>
            <li>Kayu Mahoni – halus, ringan, bernilai seni tinggi.</li>
            <li>Kayu Trembesi – serat alami unik, artistik, eksklusif.</li>
            <li>Kayu Akasia – ramah lingkungan, fleksibel, modern.</li>
          </ul>
        </div>

        {/* Galeri */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Image
            src="/images/showroom.jpg"
            alt="Showroom PT Kurnia Anggun"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/images/workshop.jpg"
            alt="Workshop PT Kurnia Anggun"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Percayakan Furnitur Impian Anda pada Kami
          </h2>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
            Dari Mojokerto untuk dunia, PT Kurnia Anggun siap menjadi mitra
            terpercaya Anda dalam menciptakan furnitur berkualitas tinggi yang
            elegan, fungsional, dan bernilai investasi.
          </p>
          <Link href="/contact">
            <MotionButton text="Hubungi Kami" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
