"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    company: "Wooden Living UK",
    text: "PT Kurnia Anggun consistently delivers high-quality wooden furniture. Their craftsmanship and attention to detail are exceptional.",
    image: "/image/client1.jpg",
  },
  {
    name: "Maria Gonzalez",
    company: "Casa Deco Spain",
    text: "We are very satisfied with the durability and design of the rattan furniture. Perfect balance of tradition and modern style.",
    image: "/image/client2.jpg",
  },
  {
    name: "David Lee",
    company: "HomeStyle USA",
    text: "Professional service, timely delivery, and top-notch quality. A trusted partner for our long-term projects.",
    image: "/image/client3.jpg",
  },
];

const clientLogos = [
  {
    src: "/Client/ARHS_BIG.png",
    alt: "ARHS",
    width: 120,
    height: 60,
  },
  {
    src: "/Client/Create&Barrel.png",
    alt: "IKEA",
    width: 140,
    height: 50,
  },
  {
    src: "/Client/ARHS_BIG.png",
    alt: "ARHS",
    width: 120,
    height: 60,
  },
  {
    src: "/Client/Create&Barrel.png",
    alt: "IKEA",
    width: 140,
    height: 50,
  },
  {
    src: "/Client/ARHS_BIG.png",
    alt: "ARHS",
    width: 120,
    height: 60,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="relative bg-gray-50 py-20 px-6 md:px-12 lg:px-20 h-[100vh]"
    >
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600">
          Trusted by international buyers in the furniture industry.
        </p>
      </motion.div>

      {/* Testimonial Slider */}
      <div className="relative flex justify-center items-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center"
        >
          <div className="w-20 h-20 relative mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/Client/buyyer.png"
              alt={testimonials[index].name}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 italic mb-4">
            “{testimonials[index].text}”
          </p>
          <h4 className="font-semibold text-lg text-gray-800">
            {testimonials[index].name}
          </h4>
          <span className="text-sm text-gray-500">
            {testimonials[index].company}
          </span>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 md:-left-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 md:-right-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          ▶
        </button>
      </div>

      {/* Client Logos */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {clientLogos.map((logo, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
