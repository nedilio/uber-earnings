export type EarningItem = {
  id: string;
  type: "earning" | "expense";
  value: number;
  date: string;
};
