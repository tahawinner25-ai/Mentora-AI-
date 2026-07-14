"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        hover:bg-white/10
      "
    >
      <div className="mb-6 text-violet-400">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}
