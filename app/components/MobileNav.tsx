"use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Activity", icon: Activity },
  { name: "Settings", icon: Settings },
];

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-950 border-t border-zinc-800">
      <ul className="flex justify-around py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <li
              key={item.name}
              aria-label={item.name}
              onClick={() => setActive(item.name)}
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-lg
                cursor-pointer transition-all
                ${
                  isActive
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-zinc-400"
                }
              `}
            >
              <Icon size={20} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}