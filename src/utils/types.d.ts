﻿export type EarningItem = {
  type: "earning" | "expense";
  value: number;
  date: string;
};