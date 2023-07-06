import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
const baseURL = process.env.API_BASE_URL;

export default async function Home() {
  let response;
  let earnings;

  try {
    response = await fetch(`${baseURL}/api/earning`, {
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
    <main className="flex flex-col items-center justify-center min-h-screen gap-y-2">
      <Donut earnings={earnings} />
      <TableComponent
        earnings={[...earnings].sort((a, b) => b.date.localeCompare(a.date))}
      />
    </main>
  );
}
