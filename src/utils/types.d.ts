export type EarningItem = {
  id?: string;
  type: "earning" | "expense";
  amount: number;
  date: string;
};
