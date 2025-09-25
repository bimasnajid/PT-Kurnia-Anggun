"use client";

// bahasa
import { useTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProdukSection from "@/components/ProdukSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Contact from "../components/Contack";
import About from "../components/AboutSection";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main>
      <h1 className="text-3xl font-bold">{t("welcom")}</h1>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ProdukSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
