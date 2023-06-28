import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { EarningItem } from "@/utils/types";

export default function Home() {
  const earnings: EarningItem[] = [
    {
      type: "earning",
      value: 30577,
    },
    {
      type: "earning",
      value: 38676,
    },
    {
      type: "earning",
      value: 127552,
    },
    {
      type: "earning",
      value: 37685,
    },
    {
      type: "expense",
      value: 85000,
    },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Donut earnings={earnings} />
        <TableComponent earnings={earnings} />
      </main>
    </>
  );
}
