"use client";
import { EarningItem } from "@/utils/types";
import { Card, Title, DonutChart } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("es-CL").format(number).toString()}`;

const Donut = ({ earnings }: { earnings: EarningItem[] }) => {
  const balance = [
    {
      type: "earning",
      value: earnings.reduce(
        (accumulator: number, currentValue: EarningItem): number => {
          if (currentValue.type === "earning")
            return accumulator + currentValue.value;
          else return accumulator;
        },
        0
      ),
    },
    {
      type: "expense",
      value: earnings.reduce(
        (accumulator: number, currentValue: EarningItem): number => {
          if (currentValue.type === "expense")
            return accumulator + currentValue.value;
          else return accumulator;
        },
        0
      ),
    },
  ];
  return (
    <Card className="max-w-lg">
      <Title>Uber earnings</Title>
      <DonutChart
        className="mt-6"
        data={balance}
        category="value"
        index="type"
        valueFormatter={valueFormatter}
        colors={["green", "red"]}
        label={valueFormatter(balance[0].value - balance[1].value)}
      />
    </Card>
  );
};

export default Donut;
