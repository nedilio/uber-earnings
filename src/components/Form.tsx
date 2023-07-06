"use client";
import { formatDate } from "@/utils";
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

interface FormProps {
  earning?: EarningItem;
  baseURL: string;
}

const Form = ({ earning, baseURL }: FormProps) => {
  const router = useRouter();
  let url = earning
    ? `${baseURL}/api/earning/${earning.id}`
    : `${baseURL}/api/earning/`;
  const [type, setType] = useState<"earning" | "expense">(
    earning !== undefined ? earning.type : "earning"
  );
  const initialDate = earning ? new Date(earning.date) : new Date();
  const [fecha, setFecha] = useState<string>(formatDate(initialDate));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const method = earning ? "PUT" : "POST";
    const data: EarningItem = {
      type: type,
      amount: Number(formData.get("amount")),
      date: fecha,
    };
    if (earning) {
      data.id = earning.id;
    }
    fetch(`${url}`, {
      method,
      body: JSON.stringify(data),
      cache: "no-store",
    })
      .then((res) => res.json())
      .then(() => {
        router.refresh();
        router.push("/");
      });
    e.currentTarget.reset();
  };

  const changeDate = (date: Date | undefined) => {
    if (!date) return;
    setFecha(formatDate(date));
  };

  const handleTypeChange = (type: string) => {
    console.log(type);
    setType(type as "earning" | "expense");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{JSON.stringify(earning)}</p>
      <Card>
        <Select
          defaultValue={type}
          onValueChange={(type) => {
            handleTypeChange(type);
          }}
        >
          <SelectItem value="earning">Earning</SelectItem>
          <SelectItem value="expense">Expense</SelectItem>
        </Select>
        <TextInput
          name="amount"
          placeholder="Amount (numbers)"
          typeof="numbers"
          defaultValue={earning?.amount.toString() || ""}
        />

        <Datepicker defaultValue={initialDate} onValueChange={changeDate} />
        <Button>{earning ? "Update" : "Submit"}</Button>
      </Card>
    </form>
  );
};

export default Form;
