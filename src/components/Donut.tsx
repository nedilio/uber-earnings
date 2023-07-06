"use client";
import { valueFormatter } from "@/utils";
import { EarningItem } from "@/utils/types";
import { Card, Title, DonutChart, Text } from "@tremor/react";
interface DonutProps {
  earnings: EarningItem[];
}

const Donut = ({ earnings }: DonutProps) => {
  const balance = [
    {
      type: "earning",
      amount: earnings.reduce(
        (accumulator: number, currentValue: EarningItem): number => {
          if (currentValue.type === "earning")
            return accumulator + currentValue.amount;
          else return accumulator;
        },
        0
      ),
    },
    {
      type: "expense",
      amount: earnings.reduce(
        (accumulator: number, currentValue: EarningItem): number => {
          if (currentValue.type === "expense")
            return accumulator + currentValue.amount;
          else return accumulator;
        },
        0
      ),
    },
  ];
  const percentage = (balance[1].amount / balance[0].amount) * 100;
  const netEarnings = balance[0].amount - balance[1].amount;
  return (
    <Card className="max-w-lg">
      <Title>Uber earnings</Title>
      <DonutChart
        className="my-4"
        data={balance}
        category="amount"
        index="type"
        valueFormatter={valueFormatter}
        colors={["teal", "red"]}
        label={valueFormatter(netEarnings)}
      />
      <Text>{percentage.toFixed(0)} % of total in gas</Text>
    </Card>
  );
};

export default Donut;
