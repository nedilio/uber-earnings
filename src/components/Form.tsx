"use client";
import { formatDate } from "@/utils";
import { EarningItem } from "@/utils/types";
import {
  Badge,
  Button,
  Card,
  Datepicker,
  Select,
  SelectItem,
  TextInput,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";

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

  const initialDate = earning
    ? new Date(`${earning.date} 00:00:00`)
    : new Date();
  const [fecha, setFecha] = useState<string>(formatDate(initialDate));

  const [error, setError] = useState<boolean>(false);

  const [consulting, setConsulting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConsulting(true);
    const button = document.querySelector("button#send");
    if (button) {
      button.setAttribute("disabled", "true");
    }
    const formData = new FormData(e.currentTarget);

    const method = earning ? "PUT" : "POST";
    const data: EarningItem = {
      type: type,
      amount: Number(formData.get("amount")),
      date: fecha,
    };
    if (earning) {
      data.id = earning?.id;
    }
    fetch(`${url}`, {
      method,
      body: JSON.stringify(data),
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code) {
          setError(true);
          return;
        }
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
    <>
      <div className="relative">
        {consulting && <Loader />}
        <form onSubmit={handleSubmit}>
          <Card className="flex flex-col gap-2">
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
            <Button
              id="send"
              type="submit"
              variant="primary"
              className="disabled:opacity-50"
            >
              {earning ? "Update" : "Submit"}
            </Button>
          </Card>
        </form>
      </div>
      {error && (
        <Badge color="red" className="mt-4">
          Something went wrong{" "}
          <button className="text-xs rounded-full px-3 py-1 bg-red-500 text-slate-50">
            ✖️ close
          </button>
        </Badge>
      )}
    </>
  );
};

export default Form;
