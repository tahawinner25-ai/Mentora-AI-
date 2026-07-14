"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="rounded-xl bg-violet-600 p-2">
            <BrainCircuit className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Mentora AI
            </h1>

            <p className="text-xs text-gray-400">
              Adaptive AI Education
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-white/10 px-5 py-2 font-medium transition hover:bg-white/5">
            Sign In
          </button>

          <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold transition hover:bg-violet-500">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#09090B] md:hidden"
        >
          <div className="flex flex-col gap-2 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-violet-400"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <button className="rounded-xl border border-white/10 py-3 transition hover:bg-white/5">
                Sign In
              </button>

              <button className="rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
