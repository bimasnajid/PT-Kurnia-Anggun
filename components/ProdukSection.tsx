"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number; // 0-5
  orderPercentage: number; // 0-100
  href: string; // link ke halaman detail produk
};

const products: Product[] = [
  {
    name: "Keane",
    price: "Rp 1.000.000",
    image: "/projectImages/Keane/CanopyKing.jpg",
    description: "Landing page modern dan responsif untuk bisnis Anda.",
    rating: 4.5,
    orderPercentage: 75,
    href: "keane", // cukup pakai slug
  },
  {
    name: "Basque",
    price: "Rp 1.500.000",
    image: "/projectImages/Keane/EndTable.jpg",
    description: "Company profile profesional dengan desain elegan.",
    rating: 4.7,
    orderPercentage: 80,
    href: "basque",
  },
  {
    name: "Milano",
    price: "Rp 2.000.000",
    image: "/projectImages/Keane/CanopyKing.jpg",
    description: "E-commerce lengkap dengan fitur pembayaran online.",
    rating: 4.8,
    orderPercentage: 85,
    href: "milano",
  },
  {
    name: "Blake",
    price: "Rp 1.200.000",
    image: "/projectImages/Keane/CanopyKing.jpg",
    description: "Website portfolio kreatif untuk personal dan bisnis.",
    rating: 4.3,
    orderPercentage: 70,
    href: "blake",
  },
  {
    name: "Dawson",
    price: "Rp 1.800.000",
    image: "/projectImages/Keane/CanopyKing.jpg",
    description: "Website event dan promosi dengan desain interaktif.",
    rating: 4.6,
    orderPercentage: 78,
    href: "dawson",
  },
  {
    name: "SH",
    price: "Rp 2.500.000",
    image: "/projectImages/Keane/CanopyKing.jpg",
    description: "Sistem manajemen website lengkap dan mudah digunakan.",
    rating: 4.9,
    orderPercentage: 90,
    href: "sh",
  },
];

// Animasi framer motion
const productVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <>
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f-${i}`}
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 
      1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 
      0 1.371 1.24.588 1.81l-3.39 2.462a1 1 
      0 00-.364 1.118l1.287 3.974c.3.922-.755 
      1.688-1.54 1.118l-3.39-2.462a1 1 
      0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-
      1.54-1.118l1.287-3.974a1 1 0 
      00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-
      1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      ))}
      {half && (
        <svg
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 
      1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 
      0 1.371 1.24.588 1.81l-3.39 2.462a1 1 
      0 00-.364 1.118l1.287 3.974c.3.922-.755 
      1.688-1.54 1.118l-3.39-2.462a1 1 
      0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-
      1.54-1.118l1.287-3.974a1 1 0 
      00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-
      1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      )}
    </>
  );
}

export default function ProdukSection() {
  const { locale } = useParams(); // ambil locale aktif, misalnya "id" atau "en"

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Produk Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition"
              variants={productVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
            >
              {/* Gambar produk */}
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-black text-sm mb-2">{product.description}</p>

              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <span className="ml-2 text-black font-medium">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              <p className="text-blue-600 font-semibold mb-4">
                {product.orderPercentage}% orders
              </p>

              {/* 🔗 tombol menuju halaman detail produk sesuai locale */}
              <Link
                href={`/${locale}/products/${product.href}`}
                className="mt-auto"
              >
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
