import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { EarningItem } from "@/utils/types";
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
    value: 100930,
  },
  {
    type: "expense",
    value: 115000,
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Donut earnings={earnings} />
      <TableComponent earnings={earnings} />
    </main>
  );
}
