"use client";
import { EarningItem } from "@/utils/types";
import { Button, Card, Select, SelectItem, TextInput } from "@tremor/react";
import { useState } from "react";

interface Data {
  id?: string;
  type: FormDataEntryValue | null;
  amount: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
}

//conditional or opearator is
const Form = ({ earning }: { earning?: EarningItem }) => {
  const [type, setType] = useState<string>(
    earning !== undefined ? earning.type : "earning"
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      type: data.get("type"),
      amount: data.get("amount"),
      date: data.get("date"),
    });
    const method = earning ? "PUT" : "POST";
    const dbdata: Data = {
      type: data.get("type"),
      amount: data.get("amount"),
      date: data.get("date"),
    };
    if (earning) {
      dbdata.id = earning.id;
    }
    fetch("/api/earning", {
      method,
      body: JSON.stringify(dbdata),
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
          <option value="expense">Expense</option>
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
        <TextInput
          name="date"
          placeholder="YYYY-MM-DD"
          defaultValue={earning?.date || "2023-07-01"}
        />
        <Button>{earning ? "Update" : "Submit"}</Button>
      </Card>
    </form>
  );
};

export default Form;
