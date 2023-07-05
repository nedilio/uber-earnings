"use client";
import { EarningItem } from "@/utils/types";
import {
  Button,
  Card,
  Datepicker,
  Select,
  SelectItem,
  TextInput,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Data {
  id?: string;
  type: FormDataEntryValue | null;
  amount: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
}
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const Form = ({
  earning,
  baseURL,
}: {
  earning?: EarningItem;
  baseURL: string;
}) => {
  const router = useRouter();
  let url = `${baseURL}/api/earning/`;
  const [type, setType] = useState<string>(
    earning !== undefined ? earning.type : "earning"
  );
  const [fecha, setFecha] = useState<string>(formatDate(new Date()));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      type: data.get("type"),
      amount: data.get("amount"),
      date: fecha,
    });
    const method = earning ? "PUT" : "POST";
    const dbdata: Data = {
      type: data.get("type"),
      amount: data.get("amount"),
      date: fecha,
    };
    if (earning) {
      dbdata.id = earning.id;
      url = `${url}/${earning.id}`;
    }
    console.log(url);
    fetch(`${url}`, {
      method,
      body: JSON.stringify(dbdata),
      cache: "no-store",
    })
      .then((res) => res.json())
      .then(async () => {
        await router.refresh();
        router.push("/");
      });
    e.currentTarget.reset();
  };

  const changeDate = (date: Date | undefined) => {
    if (!date) return;
    setFecha(formatDate(date));
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

        <Datepicker defaultValue={new Date()} onValueChange={changeDate} />
        <Button>{earning ? "Update" : "Submit"}</Button>
      </Card>
    </form>
  );
};

export default Form;
