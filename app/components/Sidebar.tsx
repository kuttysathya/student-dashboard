"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Activity",
    icon: Activity,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="
        hidden md:block
        min-h-screen
        bg-zinc-950
        border-r border-zinc-800
        p-4
        w-64
        md:w-20
        lg:w-64
        transition-all duration-300
      "
    >
      {/* Logo Section */}
      <div className="mb-8">
        <h2
          className="
            font-semibold tracking-wide
            bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400
            bg-clip-text text-transparent
            text-lg
            md:hidden
            lg:block
          "
        >
          Learning Hub
        </h2>

        <p className="text-xs text-zinc-500 mt-2 hidden lg:block">
          Student Dashboard
        </p>

        <h2
          className="
            hidden md:block lg:hidden
            text-lg font-semibold text-center
            bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400
            bg-clip-text text-transparent
          "
        >
          LH
        </h2>
      </div>

      {/* Navigation */}
      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <li key={item.name} className="relative">
              <button
                onClick={() => setActive(item.name)}
                aria-label={item.name}
                className="relative w-full cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}

                <div
                  className={`
                  relative z-10
                  flex items-center md:justify-center lg:justify-start gap-3
                  px-3 py-2
                  rounded-lg
                  transition-colors
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-zinc-300 hover:text-blue-400"
                  }
                `}
                >
                  <Icon size={18} />

                  <span className="hidden lg:inline">{item.name}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}