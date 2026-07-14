"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  Trophy,
  Sparkles,
  BookOpen,
  Gamepad2,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[150px]" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2"
        >
          <Sparkles className="h-4 w-4 text-violet-400" />

          <span className="text-sm font-medium">
            Powered by GPT-5.6
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-6xl text-5xl font-black leading-tight md:text-7xl xl:text-8xl"
        >
          The AI Tutor
          <br />

          That Truly

          <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Learns How You Learn
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          Mentora AI analyses every student's strengths,
          weaknesses and learning style to generate
          personalized lessons, adaptive quizzes,
          AI tutoring sessions, educational games and
          real-time progress tracking.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-violet-500">
            Start Learning

            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold transition hover:bg-white/5">
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">

          <Stat
            icon={<BrainCircuit />}
            number="100%"
            label="Adaptive AI"
          />

          <Stat
            icon={<GraduationCap />}
            number="24/7"
            label="AI Tutor"
          />

          <Stat
            icon={<Gamepad2 />}
            number="Unlimited"
            label="Mini Games"
          />

          <Stat
            icon={<Trophy />}
            number="∞"
            label="Achievements"
          />

        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="grid gap-6 lg:grid-cols-3">

            <Card
              icon={<BrainCircuit />}
              title="AI Diagnosis"
              value="Advanced"
              color="text-violet-400"
            />

            <Card
              icon={<BookOpen />}
              title="Today's Lesson"
              value="Linear Algebra"
              color="text-blue-400"
            />

            <Card
              icon={<BarChart3 />}
              title="Progress"
              value="87%"
              color="text-green-400"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Stat({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="mb-4 text-violet-400">
        {icon}
      </div>

      <h2 className="text-3xl font-black">
        {number}
      </h2>

      <p className="mt-2 text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}

function Card({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6"
    >
      <div className={color}>
        {icon}
      </div>

      <p className="mt-5 text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>
    </motion.div>
  );
}
