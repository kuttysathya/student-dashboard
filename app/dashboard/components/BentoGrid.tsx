import HeroTile from "./HeroTitle";
import CourseCard from "./CourseCard";

export default function BentoGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {/* Hero */}
      <div className="lg:col-span-2">
        <HeroTile />
      </div>

      {/* Activity */}
      <div className="bg-zinc-900 rounded-xl p-6">Activity</div>

      {/* Course cards area */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        <CourseCard title="Advanced React" progress={75} />
        <CourseCard title="Next.js Mastery" progress={40} />
        <CourseCard title="UI Animation" progress={60} />
      </div>
      
    </section>
  );
}