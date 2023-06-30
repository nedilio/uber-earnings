import Donut from "@/components/Donut";
import TableComponent from "@/components/TableComponent";
import { EarningItem } from "@/utils/types";
const earnings: EarningItem[] = [
  {
    type: "earning",
    value: 9875,
    date: "2023-06-07",
  },
  {
    type: "earning",
    value: 10686,
    date: "2023-06-08",
  },
  {
    type: "earning",
    value: 10016,
    date: "2023-06-11",
  },
  {
    type: "earning",
    value: 24618,
    date: "2023-06-12",
  },
  {
    type: "earning",
    value: 9637,
    date: "2023-06-14",
  },
  {
    type: "earning",
    value: 4421,
    date: "2023-06-15",
  },
  {
    type: "earning",
    value: 10479,
    date: "2023-06-19",
  },
  {
    type: "earning",
    value: 32215,
    date: "2023-06-20",
  },
  {
    type: "earning",
    value: 11921,
    date: "2023-06-21",
  },
  {
    type: "earning",
    value: 26745,
    date: "2023-06-22",
  },
  {
    type: "earning",
    value: 24938,
    date: "2023-06-23",
  },
  {
    type: "earning",
    value: 21254,
    date: "2023-06-25",
  },
  {
    type: "earning",
    value: 18591,
    date: "2023-06-26",
  },
  {
    type: "earning",
    value: 19094,
    date: "2023-06-27",
  },
  {
    type: "earning",
    value: 25962,
    date: "2023-06-28",
  },
  {
    type: "earning",
    value: 37283,
    date: "2023-06-29",
  },

  {
    type: "expense",
    value: 5000,
    date: "2023-06-08",
  },
  {
    type: "expense",
    value: 20000,
    date: "2023-06-11",
  },
  {
    type: "expense",
    value: 15000,
    date: "2023-06-15",
  },
  {
    type: "expense",
    value: 10000,
    date: "2023-06-21",
  },
  {
    type: "expense",
    value: 10000,
    date: "2023-06-22",
  },
  {
    type: "expense",
    value: 10000,
    date: "2023-06-23",
  },
  {
    type: "expense",
    value: 15000,
    date: "2023-06-26",
  },
  {
    type: "expense",
    value: 15000,
    date: "2023-06-28",
  },
  {
    type: "expense",
    value: 15000,
    date: "2023-06-29",
  },
];
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
