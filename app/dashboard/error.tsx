"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white flex-col gap-4 px-4 text-center">
      
      <h2 className="text-red-400 text-xl font-semibold">
        Something went wrong
      </h2>

      <p className="text-zinc-400 text-sm max-w-md">
        An unexpected error occurred while loading this page.
      </p>

      {/* optional debug (helpful in dev) */}
      {process.env.NODE_ENV === "development" && (
        <pre className="text-xs text-zinc-500 bg-zinc-900 p-3 rounded max-w-md overflow-auto">
          {error.message}
        </pre>
      )}

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-white text-black rounded hover:opacity-80 transition"
      >
        Try again
      </button>
    </main>
  );
}