import { Home, BookOpen, Activity, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-4">
      <h2 className="text-white text-xl font-bold mb-8">
        Learning Hub
      </h2>

      <ul className="space-y-4 text-zinc-300">
        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
          <Home size={18} /> Home
        </li>

        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
          <BookOpen size={18} /> Courses
        </li>

        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
          <Activity size={18} /> Activity
        </li>

        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
          <Settings size={18} /> Settings
        </li>
      </ul>
    </nav>
  );
}