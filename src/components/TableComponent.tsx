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
} from "@tremor/react";

const TableComponent = ({ earnings }: { earnings: EarningItem[] }) => (
  <Card>
    <Title>List of Swiss Federal Councillours</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Fecha</TableHeaderCell>
          <TableHeaderCell>Cantidad</TableHeaderCell>
          <TableHeaderCell>Tipo</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {earnings.map((item) => (
          <TableRow key={item.value}>
            <TableCell>desde-hasta</TableCell>
            <TableCell>
              <Text>{item.value}</Text>
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
