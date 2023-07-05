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
          <TableHeaderCell>Tipo</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {earnings.map((item) => (
          <TableRow key={item.amount}>
            <TableCell>
              {new Date(`${item.date} 00:00:00`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </TableCell>
            <TableCell>
              <Text>
                {valueFormatter(item.amount)}{" "}
                <Link
                  href={`/earning/${item.id}`}
                  className="text-xs text-cyan-500"
                >
                  edit
                </Link>
                <DeleteButton id={item.id} />
              </Text>
            </TableCell>

            <TableCell>
              <Badge color={item.type === "earning" ? "emerald" : "red"}>
                {item.type}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default TableComponent;
