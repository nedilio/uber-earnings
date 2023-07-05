import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
const baseURL = process.env.API_BASE_URL;

export default async function Home() {
  const data = await fetch(`${baseURL}/api/earning`, {
    cache: "no-store",
  });
  console.log("mounted");
  const earnings = await data.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-8">
      <Donut earnings={earnings} />
      <TableComponent
        earnings={[...earnings].sort((a, b) => b.date.localeCompare(a.date))}
      />
    </main>
  );
}
