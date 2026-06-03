"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type CourseCardProps = {
  title: string;
  progress: number;
  iconName?: string;
  created_at?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={18} />,
  Rocket: <Rocket size={18} />,
  Sparkles: <Sparkles size={18} />,
};

export default function CourseCard({
  title,
  progress,
  iconName,
  created_at,
}: CourseCardProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(progress), 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="relative overflow-hidden bg-zinc-900 border border-zinc-800 transition-colors hover:border-blue-500/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)] rounded-2xl p-4"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-zinc-400">
            {iconMap[iconName || "Code"]}
          </div>

          <span className="text-xs text-zinc-500">
            {progress}%
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-white font-medium">
          {title}
        </h3>

        {/* Progress bar */}
        <div className="mt-4 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500/60 rounded-full transition-all duration-700"
            style={{ width: `${width}%` }}
          />
        </div>

        {/* Timestamp */}
        {created_at && (
          <p className="mt-3 text-xs text-zinc-500">
            {new Date(created_at).toISOString().split("T")[0]}
          </p>
        )}
      </div>
    </motion.article>
  );
}