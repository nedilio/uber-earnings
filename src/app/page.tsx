import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { getData } from "@/services/supabase";
// import { earnings } from "@/utils/mockdata";

export default async function Home() {
  const earnings = await getData();
  console.log("debug: ", earnings);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-8">
      <Donut earnings={earnings} />
      <TableComponent
        earnings={[...earnings].sort((a, b) => b.date.localeCompare(a.date))}
      />
    </main>
  );
}
