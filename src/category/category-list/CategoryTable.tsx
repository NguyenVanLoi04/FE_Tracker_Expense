import {
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import useTable from "src/common/hooks/useTable";
import { TableHeadCustom } from "src/common/components/table";
import { TableBody } from "@mui/material";
import { Box } from "@mui/material";
import { TABLE_HEADER } from "../common/constants";
import CategoryRow from "./CategoryRow";

export default function CategoryTable() {
  const {
    dense,
    page,
    setPage,
    rowsPerPage,
    order,
    orderBy,
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangePage,
    onChangeRowsPerPage,
    onChangeDense,
  } = useTable();
  return (
    <Paper
      elevation={1}
      sx={{ padding: 3, bgcolor: "white", minHeight: "70vh" }}
    >
      <CategoryFilter />

      <TableContainer sx={{ position: "relative", mt: 5 }}>
        <Table size={dense ? "small" : "medium"}>
          <TableHeadCustom headLabel={TABLE_HEADER} />
          <TableBody>
            {[1, 2, 3, 4, 5].map((row) => (
              <CategoryRow key={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: "relative" }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={onChangeDense} />}
          label={"Thu gọn"}
          sx={{ px: 3, py: 1.5, top: 0, position: { md: "absolute" } }}
        />
      </Box>
    </Paper>
  );
}
