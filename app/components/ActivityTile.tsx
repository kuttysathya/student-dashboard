export default function ActivityTile() {
  const days = Array.from({ length: 28 });

  return (
    <section className="relative bg-zinc-900 rounded-2xl px-8 py-9.5 min-h-63 border border-zinc-800 overflow-hidden">
      <h3 className="text-sm text-zinc-400 mb-4">Activity</h3>

      <div className="grid grid-cols-7 gap-1.5">
        {days.map((_, i) => {
          const intensity = Math.random();

          return (
            <div
              key={i}
              className={`aspect-square max-w-8 max-h-8 w-full rounded-sm ${
                intensity > 0.7
                  ? "bg-emerald-500/80"
                  : intensity > 0.4
                    ? "bg-emerald-700/60"
                    : "bg-zinc-800"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}