export default function HeroTile() {
  return (
    <section className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      
      <p className="text-zinc-400 text-sm">
        Welcome back 👋
      </p>

      <h1 className="text-2xl md:text-3xl font-semibold mt-2">
        Continue your learning journey
      </h1>

      {/* Streak badge */}
      <div className="mt-4 inline-flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-300">
        🔥 7 day streak
      </div>

    </section>
  );
}