"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type MenuItem = {
  label: string;
  href: string;
  subMenu?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Products",
    href: "#products",
    subMenu: [
      { label: "Keane", href: "#keane" },
      { label: "Basque", href: "#basque" },
      { label: "Milano", href: "#milano" },
      { label: "Blake", href: "#blake" },
      { label: "Dawson", href: "#dawson" },
      { label: "SH", href: "#sh" },
    ],
  },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-10 w-24">
            <Image
              src="/Image/KA.png"
              alt="Kurnia Anggun"
              fill
              sizes="96px"
              className="object-contain"
              priority
            />
          </div>
          <Link href="/" className="text-2xl font-bold text-black">
            PT KURNIA ANGGUN
          </Link>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-6 text-black font-medium">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() =>
                item.subMenu ? setOpenMenu(item.label) : setOpenMenu(null)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.subMenu && (
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-56"
                    >
                      {item.subMenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className="relative z-50 flex flex-col justify-between w-8 h-6 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-1 bg-black rounded origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-1 bg-black rounded"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-1 bg-black rounded origin-center"
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-200 shadow-md mobile-menu ${
            isOpen ? "open" : ""
          } md:hidden`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-black font-semibold text-xl">
            {menuItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                {!item.subMenu ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    {/* Parent */}
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      className="w-full py-2 hover:text-blue-600"
                    >
                      {item.label}
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {openMenu === item.label && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center bg-gray-100 rounded-md"
                        >
                          {item.subMenu.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 hover:text-blue-600"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
