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

const TableComponent = ({ earnings }: { earnings: EarningItem[] }) => (
  <Card>
    <Title>Ganancias - Gastos</Title>
    <Button>Add</Button>
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
          <TableRow key={item.value}>
            <TableCell>
              {new Date(`${item.date} 00:00:00`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </TableCell>
            <TableCell>
              <Text>{valueFormatter(item.value)}</Text>
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
