import {
  Box,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import UserFilter from "./UserFilter";
import useTable from "src/common/hooks/useTable";

import { TableHeadCustom } from "src/common/components/table";
import { TABLE_HEADER } from "../common/constants";
import UserRow from "./UserRow";

export default function UserTable() {
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
      <UserFilter />

      <TableContainer sx={{ position: "relative", mt: 5 }}>
        <Table size={dense ? "small" : "medium"}>
          <TableHeadCustom headLabel={TABLE_HEADER} />
          <TableBody>
            {[1, 2, 3, 4, 5].map((row) => (
              <UserRow key={row} />
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
