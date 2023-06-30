"use client";
import { valueFormatter } from "@/utils";
import { EarningItem } from "@/utils/types";
import { Card, Title, DonutChart, Text } from "@tremor/react";

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
  const percentage = (balance[1].value / balance[0].value) * 100;
  const netEarnings = balance[0].value - balance[1].value;
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
        label={valueFormatter(netEarnings)}
      />
      <Text>{percentage.toFixed(0)} % of total in gas</Text>
    </Card>
  );
};

export default Donut;
