import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { earnings } from "@/utils/mockdata";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-8">
      <Donut earnings={earnings} />
      <TableComponent
        earnings={[...earnings].sort((a, b) => a.date.localeCompare(b.date))}
      />
    </main>
  );
}
