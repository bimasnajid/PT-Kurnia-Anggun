"use client";

import Image from "next/image";
import Link from "next/link";
import MotionButton from "@/components/MotionButton";

export default function BasquePage() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Produk: Basque
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <Image
            src="/projectImages/Keane/EndTable.jpg"
            alt="Basque"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <div>
            <p className="text-lg mb-4">
              <span className="font-semibold">Harga:</span> Rp 1.500.000
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Company profile profesional dengan desain elegan, cocok untuk
              meningkatkan branding bisnis Anda.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/products">
            <MotionButton text="Kembali ke Produk" />
          </Link>
        </div>
      </div>
    </section>
  );
}
