"use client";
import { Card, Title, DonutChart } from "@tremor/react";

type EarningItem = {
  category: "earning" | "expense";
  value: number;
};

const earnings: EarningItem[] = [
  {
    category: "earning",
    value: 30577,
  },
  {
    category: "earning",
    value: 38676,
  },
  {
    category: "earning",
    value: 127552,
  },
  {
    category: "earning",
    value: 18591,
  },
  {
    category: "expense",
    value: -85000,
  },
];

const balance = [
  {
    category: "earning",
    value: earnings.reduce(
      (accumulator: number, currentValue: EarningItem): number => {
        if (currentValue.category === "earning")
          return accumulator + currentValue.value;
        else return accumulator;
      },
      0
    ),
  },
  {
    category: "expense",
    value: earnings.reduce(
      (accumulator: number, currentValue: EarningItem): number => {
        if (currentValue.category === "expense")
          return accumulator + currentValue.value;
        else return accumulator;
      },
      0
    ),
  },
];

console.log(balance);

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("es-CL").format(number).toString()}`;

const Donut = () => (
  <Card className="max-w-lg">
    <Title>Sales</Title>
    <DonutChart
      className="mt-6"
      data={balance}
      category="value"
      index="category"
      valueFormatter={valueFormatter}
      colors={["cyan", "fuchsia"]}
    />
  </Card>
);

export default Donut;
