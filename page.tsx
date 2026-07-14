"use client";

import {
  BrainCircuit,
  Flame,
  Trophy,
  BookOpen,
  Target
} from "lucide-react";

import { motion } from "framer-motion";

export default function DashboardPage() {

  const stats = [
    {
      icon: <BrainCircuit />,
      title: "AI Level",
      value: "Intermediate",
    },
    {
      icon: <Flame />,
      title: "Learning Streak",
      value: "12 days",
    },
    {
      icon: <Trophy />,
      title: "XP Earned",
      value: "2450 XP",
    },
    {
      icon: <Target />,
      title: "Progress",
      value: "78%",
    },
  ];


  return (
    <main className="
      min-h-screen
      bg-gradient-to-b
      from-black
      via-[#111827]
      to-black
      p-8
      text-white
    ">

      <h1 className="
        text-5xl
        font-black
      ">
        Welcome back 👋
      </h1>

      <p className="mt-3 text-gray-400">
        Your AI mentor is ready to continue your learning journey.
      </p>


      <section className="
        mt-12
        grid
        gap-6
        md:grid-cols-4
      ">

        {stats.map((item)=>(
          <motion.div
            key={item.title}
            whileHover={{
              y:-8
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
            "
          >

            <div className="
              text-violet-400
            ">
              {item.icon}
            </div>

            <p className="
              mt-5
              text-gray-400
            ">
              {item.title}
            </p>

            <h2 className="
              mt-2
              text-2xl
              font-bold
            ">
              {item.value}
            </h2>

          </motion.div>
        ))}

      </section>


      <section className="
        mt-12
        grid
        gap-8
        lg:grid-cols-2
      ">


        <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        ">

          <BookOpen className="text-violet-400"/>

          <h2 className="
            mt-5
            text-3xl
            font-bold
          ">
            Today's Lesson
          </h2>

          <p className="
            mt-3
            text-gray-400
          ">
            AI generated lesson:
            Introduction to Artificial Intelligence
          </p>

          <button className="
            mt-6
            rounded-xl
            bg-violet-600
            px-6
            py-3
            font-bold
          ">
            Continue
          </button>

        </div>


        <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        ">

          <Target className="text-green-400"/>

          <h2 className="
            mt-5
            text-3xl
            font-bold
          ">
            AI Recommendations
          </h2>

          <p className="
            mt-3
            text-gray-400
          ">
            Practice mathematics for 20 minutes.
            Your weak area detected by AI.
          </p>

        </div>


      </section>


    </main>
  );
}
