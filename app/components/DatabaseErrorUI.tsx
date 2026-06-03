"use client";

import { AlertTriangle } from "lucide-react";

export default function DatabaseErrorUI() {
  return (
    <main className="flex-1 flex items-center justify-center bg-zinc-950">
      <section className="max-w-md w-full bg-zinc-900 border border-red-500/20 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle size={40} className="text-red-400" />
        </div>

        <h2 className="text-xl font-semibold text-white">
          Failed to load courses
        </h2>

        <p className="text-zinc-400 text-sm mt-3">
          We couldn't retrieve your learning data from the server.
        </p>

        <p className="text-zinc-500 text-xs mt-2">
          Please refresh the page or try again later.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 cursor-pointer px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
        >
          Retry
        </button>
      </section>
    </main>
  );
}