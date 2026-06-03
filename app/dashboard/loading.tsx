export default function Loading() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white p-6 gap-4">
      {/* Sidebar skeleton */}
      <div className="w-64 h-screen bg-zinc-900 animate-pulse rounded-xl" />

      {/* Main skeleton */}
      <main className="flex-1 p-6 space-y-6">

        {/* Top grid (Hero + Activity) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Hero skeleton (lg:col-span-2) */}
          <div className="lg:col-span-2 h-65 bg-zinc-900 rounded-2xl animate-pulse" />

          {/* Activity skeleton */}
          <div className="h-65 bg-zinc-900 rounded-2xl animate-pulse" />
        </div>

        {/* Courses section title */}
        <div className="h-6 w-40 bg-zinc-800 rounded animate-pulse" />

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-40 bg-zinc-900 rounded-2xl animate-pulse" />
          <div className="h-40 bg-zinc-900 rounded-2xl animate-pulse" />
          <div className="h-40 bg-zinc-900 rounded-2xl animate-pulse" />
        </div>

      </main>
    </div>
  );
}