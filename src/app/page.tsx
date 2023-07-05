import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
const baseURL = process.env.API_BASE_URL;

export default async function Home() {
  console.log("fetch data from: ", `${baseURL}/api/earning`);
  const earnings = [];

  try {
    const data = await fetch(`${baseURL}/api/earning`, {
      cache: "no-store",
    });
    earnings.push(...(await data.json()));
  } catch {
    const earnings = [];
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-8">
      <Donut earnings={earnings} />
      <TableComponent
        earnings={[...earnings].sort((a, b) => b.date.localeCompare(a.date))}
      />
    </main>
  );
}
