"use client";

import Image from "next/image";
import Link from "next/link";

export default function DawsonPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar Produk */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/projectImages/Keane/CanopyKing.jpg"
            alt="Dawson"
            fill
            className="object-cover"
          />
        </div>

        {/* Info Produk */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Dawson</h1>
          <p className="text-gray-700 mb-6">
            Website event dan promosi dengan desain interaktif.
          </p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            Rp 1.500.000
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Pesan Sekarang
            </button>
            <Link
              href="/products"
              className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            >
              Kembali ke Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
