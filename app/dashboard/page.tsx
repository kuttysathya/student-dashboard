import Sidebar from "../components/Sidebar";
import BentoGrid from "../components/BentoGrid";
import { createClient } from "../lib/supabase-server";
import MobileNav from "../components/MobileNav";
import DatabaseErrorUI from "../components/DatabaseErrorUI";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("courses").select("*");

  if (error || !data) {
    return <DatabaseErrorUI />;
  }
  if (!supabase) {
  throw new Error("Supabase client failed");
}

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <BentoGrid courses={data ?? []} />
      </main>

      <MobileNav />
    </div>
  );
}