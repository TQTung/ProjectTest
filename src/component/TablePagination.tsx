import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import type { PaginationRenderItemParams } from "@mui/material/Pagination";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select, { selectClasses } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { paginationItemClasses } from "@mui/material/PaginationItem";
import PaginationItem from "@mui/material/PaginationItem";

interface Props {
  pageIndex: number;
  totalPages: number;
  totalRows: number;
  onChangePage: (pageIndex: number) => void;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  small?: boolean;
}

const TablePagination = (props: Props) => {
  const {
    pageIndex,
    totalPages,
    totalRows,
    rowsPerPage,
    rowsPerPageOptions,
    onChangePage,
    onChangeRowsPerPage,
    small = false,
  } = props;

  const handleChangePage = (_event: unknown, pageIndex: number) => {
    onChangePage(pageIndex);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    onChangeRowsPerPage(Number(event.target.value));
  };

  return (
    <Box sx={{ display: "flex", p: 2, justifyContent: "flex-end" }}>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          mr: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ whiteSpace: "nowrap" }}
        >
          {"rowsPerPage"}:
        </Typography>
        <FormControl sx={{ ml: 1, mr: 2 }}>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            size="small"
            variant="standard"
            disableUnderline
            sx={{
              [`& .${selectClasses.select}`]: {
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                pb: 0,
              },
            }}
          >
            {rowsPerPageOptions.map((rowsPerPage) => (
              <MenuItem key={rowsPerPage} value={rowsPerPage}>
                {rowsPerPage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ whiteSpace: "nowrap" }}
        >
          {totalPages === 0 ? 0 : (pageIndex - 1) * rowsPerPage + 1}-
          {pageIndex * rowsPerPage} {"of"} {totalRows}
        </Typography>
      </Box>
      <Pagination
        page={pageIndex}
        count={totalPages}
        shape="rounded"
        variant="outlined"
        showFirstButton
        showLastButton
        onChange={handleChangePage}
        size={small ? "small" : "medium"}
        sx={{
          [`& .${paginationItemClasses.root}`]: {
            borderRadius: "revert",
          },
        }}
        renderItem={(params: PaginationRenderItemParams) => {
          const { type } = params;
          if (type === "page" && small) {
            return null;
          }
          return <PaginationItem {...params} />;
        }}
      />
    </Box>
  );
};

export default TablePagination;
