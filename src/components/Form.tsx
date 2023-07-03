"use client";
import { EarningItem } from "@/utils/types";
import { Button, Card, Select, SelectItem, TextInput } from "@tremor/react";
import { useState } from "react";

const Form = ({ earning }: { earning?: EarningItem }) => {
  const [type, setType] = useState<string>(
    earning !== undefined ? earning.type : "expense"
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      type: data.get("type"),
      amount: data.get("amount"),
    });
    fetch("/api/earning", {
      method: "POST",
      body: JSON.stringify({
        type: data.get("type"),
        amount: data.get("amount"),
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{JSON.stringify(earning)}</p>
      <Card>
        <select name="type" id="type" className="hidden" defaultValue={type}>
          <option value="earning">Earning</option>
          <option value="expense">Earning</option>
        </select>
        <Select defaultValue={type} onValueChange={setType}>
          <SelectItem
            value="earning"
            //  icon={CalculatorIcon}
          >
            Earning
          </SelectItem>
          <SelectItem value="expense">Expense</SelectItem>
        </Select>
        <TextInput
          name="amount"
          placeholder="Amount (numbers)"
          typeof="numbers"
          defaultValue={earning?.amount.toString() || ""}
        />
        <Button>{earning ? "Update" : "Submit"}</Button>
      </Card>
    </form>
  );
};

export default Form;
