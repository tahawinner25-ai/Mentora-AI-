"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Gamepad2,
  GraduationCap,
  MessageCircle,
  Puzzle,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8" />,
    title: "Adaptive AI Tutor",
    text: "Mentora builds a learning profile for every student and continuously adjusts explanations, pace, difficulty, practice, and revision sessions.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "AI Diagnostic Assessment",
    text: "Before each journey starts, Mentora checks knowledge level, strengths, weaknesses, and learning preferences to create a personal roadmap.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "AI Generated Lessons",
    text: "The same concept can become a simple beginner story, an applied intermediate lesson, or a deep advanced explanation.",
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "AI Tutor Chat",
    text: "Students can ask questions any time and receive patient, teacher-like guidance that remembers how they prefer to learn.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Adaptive Exams & Quizzes",
    text: "Assessments change automatically based on answers, mistakes, confidence, and improvement speed.",
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: "Educational Mini Games",
    text: "Challenges, rewards, achievements, and interactive exercises keep practice friendly and motivating.",
  },
];

const learningLevels = [
  {
    level: "Beginner",
    approach: "Simple words, small steps, friendly examples, and confidence-building practice.",
  },
  {
    level: "Intermediate",
    approach: "Guided problem solving, applied exercises, hints, and targeted revision.",
  },
  {
    level: "Advanced",
    approach: "Deep technical explanations, edge cases, challenge tasks, and mastery checks.",
  },
];

const accessibilityModes = [
  {
    title: "Dyslexic Window",
    icon: <Puzzle className="h-7 w-7" />,
    text: "A calmer reading mode with larger spacing, shorter paragraphs, clear typography, highlighted key words, and step-by-step lesson cards.",
    previewClass: "font-semibold tracking-wide leading-8",
  },
  {
    title: "Autism-Friendly Window",
    icon: <BadgeCheck className="h-7 w-7" />,
    text: "A predictable interface with reduced motion, direct instructions, sensory-friendly contrast, routine checklists, and clear next actions.",
    previewClass: "leading-7",
  },
];

export default function MentoraLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#07070b] via-[#111827] to-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-600 p-2.5 shadow-lg shadow-violet-600/30">
              <BrainCircuit className="h-7 w-7" />
            </div>
            <div>
              <p className="text-2xl font-black">Mentora AI</p>
              <p className="text-xs text-violet-200/80">The AI Tutor That Learns How YOU Learn</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#features" className="transition hover:text-violet-300">Features</a>
            <a href="#levels" className="transition hover:text-violet-300">Adaptation</a>
            <a href="#accessibility" className="transition hover:text-violet-300">Accessibility</a>
            <a href="#progress" className="transition hover:text-violet-300">Progress</a>
          </div>

          <button className="rounded-2xl bg-white px-5 py-3 font-bold text-black transition hover:scale-105">
            Start Free
          </button>
        </div>
      </nav>

      <section id="home" className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="absolute left-1/2 top-12 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-100"
          >
            <Sparkles className="h-4 w-4" /> Powered by the OpenAI Responses API and GPT-5.6
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-5xl font-black leading-tight md:text-7xl xl:text-8xl"
          >
            Your own AI mentor,
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
              adapted to you.
            </span>
          </motion.h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Mentora AI analyzes each student's level, detects weaknesses, understands learning preferences, and creates a personalized journey with friendly teacher-like explanations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-bold shadow-xl shadow-violet-600/25 transition hover:bg-violet-500">
              Build My Roadmap <ArrowRight className="h-5 w-5" />
            </button>
            <button className="rounded-2xl border border-white/15 px-8 py-4 text-lg font-semibold transition hover:bg-white/10">
              Try Tutor Chat
            </button>
          </div>
        </div>

        <MentorPreview />
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="✨ Features" title="Everything a personal AI teacher needs" text="From diagnosis to exams, every tool adapts to the student's current level and next best step." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </section>

      <section id="levels" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="🧠 Adaptive learning" title="One concept, three different teaching styles" text="Mentora never gives everyone the same content. It changes examples, depth, exercises, and speed for each learner." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {learningLevels.map((item) => (
            <motion.div key={item.level} whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
              <p className="text-sm font-bold uppercase tracking-[.25em] text-violet-300">{item.level}</p>
              <h3 className="mt-4 text-2xl font-black">How Mentora teaches</h3>
              <p className="mt-4 leading-7 text-gray-300">{item.approach}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="accessibility" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Friendly for every mind" title="Dyslexic and autism-friendly learning windows" text="Students can switch to focused learning windows designed for clarity, predictability, and less cognitive overload." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {accessibilityModes.map((mode) => <AccessibilityWindow key={mode.title} {...mode} />)}
        </div>
      </section>

      <section id="progress" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-700/80 to-indigo-700/70 p-8 shadow-2xl shadow-violet-900/30 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-bold text-violet-100">📈 Progress Tracking</p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">Every student sees what to improve next.</h2>
              <p className="mt-6 text-lg leading-8 text-white/80">Mentora tracks XP, streaks, completed lessons, weak areas, improvements, achievements, and personalized recommendations.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ProgressTile icon={<Trophy />} label="XP" value="2,450" />
              <ProgressTile icon={<BarChart3 />} label="Mastery" value="78%" />
              <ProgressTile icon={<Target />} label="Weak area" value="Fractions" />
              <ProgressTile icon={<Sparkles />} label="Next step" value="Mini quiz" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="font-bold text-violet-300">{eyebrow}</p><h2 className="mt-3 text-4xl font-black md:text-6xl">{title}</h2><p className="mt-5 text-lg leading-8 text-gray-300">{text}</p></div>;
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <motion.article whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"><div className="text-violet-300">{icon}</div><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-gray-300">{text}</p></motion.article>;
}

function MentorPreview() {
  return <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2 }} className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-violet-950/50 backdrop-blur-xl"><div className="rounded-[1.5rem] bg-black/50 p-6"><div className="flex items-center gap-3"><BrainCircuit className="text-violet-300" /><div><p className="font-black">Mentora AI Tutor</p><p className="text-sm text-gray-400">Adapting answer for: Intermediate + visual learner</p></div></div><div className="mt-6 space-y-4"><Bubble role="Mentora" text="Let's solve this together. First, I will show the idea visually, then we will practice one step at a time." /><Bubble role="Student" text="I get confused when explanations are too fast." right /><Bubble role="Mentora" text="No problem. I slowed the lesson down, added a reminder card, and scheduled a 5-minute revision tomorrow." /></div></div></motion.div>;
}

function Bubble({ role, text, right = false }: { role: string; text: string; right?: boolean }) {
  return <div className={`rounded-2xl p-4 ${right ? "ml-10 bg-violet-600" : "mr-10 bg-white/10"}`}><p className="text-xs font-bold uppercase tracking-widest text-white/60">{role}</p><p className="mt-2 leading-7">{text}</p></div>;
}

function AccessibilityWindow({ title, icon, text, previewClass }: { title: string; icon: ReactNode; text: string; previewClass: string }) {
  return <motion.article whileHover={{ y: -8 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"><div className="flex items-center gap-3 text-violet-300">{icon}<h3 className="text-3xl font-black text-white">{title}</h3></div><p className="mt-5 leading-8 text-gray-300">{text}</p><div className={`mt-7 rounded-3xl border border-white/10 bg-black/40 p-6 text-gray-100 ${previewClass}`}><p>1. Read one idea.</p><p>2. See one example.</p><p>3. Try one guided question.</p><p>4. Choose: repeat, slower, or next.</p></div></motion.article>;
}

function ProgressTile({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-3xl bg-white/15 p-6 backdrop-blur"><div className="text-white/80">{icon}</div><p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>;
}
