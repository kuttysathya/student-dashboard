export default function ActivityTile() {
  const days = Array.from({ length: 28 });

  const intensityMap = [
    0.2, 0.8, 0.5, 0.1, 0.9, 0.3, 0.6,
    0.4, 0.7, 0.2, 0.8, 0.5, 0.1, 0.9,
    0.3, 0.6, 0.4, 0.7, 0.2, 0.8, 0.5,
    0.1, 0.9, 0.3, 0.6, 0.4, 0.7
  ];

  return (
    <section className="relative bg-zinc-900 rounded-2xl px-8 py-9.5 min-h-63 border border-zinc-800 overflow-hidden">
      <h3 className="text-sm text-zinc-400 mb-4">Activity</h3>

      <div className="grid grid-cols-7 gap-1.5 justify-items-center place-content-center">
        {days.map((_, i) => {
          const intensity = intensityMap[i];

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