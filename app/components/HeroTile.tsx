"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative min-h-63 bg-zinc-900 rounded-2xl px-8 py-12 border border-zinc-800 overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

      <div className="relative">
        <p className="text-zinc-400 text-sm">{getGreeting()}, 👋</p>

        <h1 className="text-2xl md:text-3xl font-semibold mt-2 text-white">
          Welcome back <span className="text-blue-400">Sathya</span>
        </h1>

        <p className="text-zinc-400 text-sm mt-2">
          Continue your learning journey and build momentum today.
        </p>

        {/* streak badge */}
        <div className="mt-10 inline-flex items-center gap-2 bg-zinc-800/70 px-3 py-1 rounded-full text-sm text-zinc-300 border border-zinc-700">
          <Flame size={14} className="text-orange-400" />7 day streak
        </div>
      </div>
    </motion.section>
  );
}