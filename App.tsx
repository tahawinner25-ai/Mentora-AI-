"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function MentoraAI() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#09090B] via-[#111827] to-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 bg-black/40 z-50">
        <div className="flex items-center gap-3">
          <BrainCircuit size={34} className="text-violet-400" />
          <h1 className="text-3xl font-black">Mentora AI</h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </div>

        <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold hover:bg-violet-500 transition">
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-6xl md:text-8xl font-black leading-tight"
        >
          The AI Tutor
          <br />
          That Learns
          <br />
          <span className="text-violet-400">How YOU Learn.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl text-xl text-gray-400"
        >
          Mentora AI builds a unique learning profile for every student,
          adapts lessons to their level, generates personalized exams,
          educational games and tracks progress automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-bold hover:bg-violet-500 transition">
            Start Learning
            <ArrowRight size={20} />
          </button>

          <button className="rounded-2xl border border-white/20 px-8 py-4 text-lg hover:bg-white/5 transition">
            Watch Demo
          </button>
        </motion.div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="grid gap-8 px-8 pb-24 md:grid-cols-3"
      >
        <FeatureCard
          icon={<BrainCircuit size={44} />}
          title="Adaptive AI"
          text="The platform continuously adapts lessons, explanations and exercises to the learner's real level."
        />

        <FeatureCard
          icon={<GraduationCap size={44} />}
          title="Personalized Exams"
          text="Every assessment is generated dynamically based on strengths, weaknesses and learning history."
        />

        <FeatureCard
          icon={<Sparkles size={44} />}
          title="Educational Games"
          text="Mini-games, challenges and rewards keep students motivated while reinforcing concepts."
        />
      </section>

      {/* CTA */}
      <section className="mx-8 mb-20 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 p-14 text-center">
        <h2 className="text-5xl font-black">
          Every Student Deserves
          <br />
          Their Own AI Mentor.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
          Join the next generation of adaptive education powered by artificial intelligence.
        </p>

        <button className="mt-10 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black hover:scale-105 transition">
          Get Started
        </button>
      </section>

    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
    >
      <div className="text-violet-400">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}
