import Sidebar from "./components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-xl font-semibold">
          Dashboard
        </h1>
      </main>
    </div>
  );
}