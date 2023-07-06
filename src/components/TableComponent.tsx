import { valueFormatter } from "@/utils";
import { EarningItem } from "@/utils/types";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Button,
} from "@tremor/react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const TableComponent = ({ earnings }: { earnings: EarningItem[] }) => (
  <Card>
    <Title>Ganancias - Gastos</Title>
    <Link href="/earning" className="text-cyan-500 underline">
      Add Item
    </Link>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Fechas</TableHeaderCell>
          <TableHeaderCell>Cantidad</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {earnings.map((item) => (
          <TableRow key={item.amount}>
            <TableCell>
              {new Date(`${item.date} 00:00:00`).toLocaleDateString("en-US", {
                // year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-start gap-x-4">
                <Badge color={item.type === "earning" ? "emerald" : "red"}>
                  {valueFormatter(item.amount)}{" "}
                </Badge>
                <Link
                  href={`/earning/${item.id}`}
                  className="text-xs text-cyan-500"
                >
                  edit
                </Link>
                {item.id && <DeleteButton id={item.id} />}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default TableComponent;
