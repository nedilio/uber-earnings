import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { earnings } from "@/utils/mockdata";
const baseURL = process.env.API_BASE_URL;

export default async function Home() {
  let response;
  let earnings;

  try {
    response = await fetch(`${baseURL}/api/earninga`, {
      cache: "no-store",
    });
  } catch (error) {
    console.log("There was an error", error);
  }

  if (response?.ok) {
    earnings = await response.json();
  } else {
    earnings = [];
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
