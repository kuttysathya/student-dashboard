"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "../types/course";


export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
    >
      {/* Mobile Brand */}
      <div className="md:hidden mb-2">
        <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          Learning Hub
        </h1>

        <p className="text-xs text-zinc-500 mt-1">Student Dashboard</p>
      </div>

      {/* HERO */}
      <motion.div
        className="md:col-span-2 lg:col-span-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <HeroTile />
      </motion.div>

      {/* ACTIVITY */}
      <motion.div
        className="md:col-span-2 lg:col-span-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
          delay: 0.05,
        }}
      >
        <ActivityTile />
      </motion.div>

      <div className="md:col-span-2 lg:col-span-3 mt-8">
        {/* SECTION TITLE */}
        <h2 className="text-xl text-zinc-300 font-semibold mb-5">
          Your Courses
        </h2>

        {/* COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
            >
              <CourseCard
                title={course.title}
                progress={course.progress}
                iconName={course.icon_name}
                created_at={course.created_at}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}