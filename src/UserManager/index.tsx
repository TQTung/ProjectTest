import { Paper, Table, TableCell, TableContainer } from "@mui/material";
import { Box } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import CommonWrap from "../component/CommonWrap";
import TableSearchField from "../component/TableSearchField";
import TableWrapper from "../component/TableWrapper";
import axios from "axios";
import Scrollbar from "../component/Scrollbar";
import { Order } from "../types/common";
import TableHeader from "../component/TableHeader";
import type { Cells } from "../component/TableHeader";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TablePagination from "component/TablePagination";
import LinkIconButton from "component/LinkIconButton";
import ActionButton from "component/ActionButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";

interface FilterParams {
  pageIndex: number;
  pageSize: number;
  sortBy: string;
  sortDirection: Order;
  searchText: string;
}

interface Data {
  Id: number;
  UserId: number;
  title: string;
  Actions: string;
}

interface UserDatas {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getCells = (): Cells<Data> => [
  {
    id: "Id",
    label: "Id",
  },
  {
    id: "UserId",
    label: "UserId",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "Actions",
    label: "Actions",
    sortable: false,
  },
];

const UserManager = () => {
  const [datausers, setDataUsers] = useState<UserDatas[]>([]);
  const [userDetails, setDetails] = useState<UserDatas[]>([]);
  const [open, setOpen] = useState(false);
  // const [totalRows, setTotalRows] = useState<number>(0);
  const [filters, setFilters] = useState<FilterParams>({
    pageIndex: 1,
    pageSize: 15,
    sortBy: "",
    sortDirection: "",
    searchText: "",
  });

  const cells = useMemo(() => getCells(), []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          ...(filters.searchText && { userId: filters.searchText }),
          _page: filters.pageIndex,
          _limit: filters.pageSize,
        },
      })
      .then((response) => {
        if (response.data) {
          setDataUsers(response.data || []);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filters]);

  const onSearch = (searchText: string) => {
    setFilters((state) => ({
      ...state,
      pageIndex: 1,
      searchText,
    }));
  };

  const onSort = (field: string) => {
    const { sortBy, sortDirection } = filters;
    const isAsc = sortBy === field && sortDirection === "asc";
    setFilters((state) => ({
      ...state,
      sortBy: field,
      sortDirection: isAsc ? "desc" : "asc",
    }));
  };

  const onChangePage = (pageIndex: number) => {
    setFilters((state) => ({
      ...state,
      pageIndex,
    }));
  };

  const onChangeRowsPerPage = (pageSize: number) => {
    setFilters((state) => ({
      ...state,
      pageIndex: 1,
      pageSize,
    }));
  };

  const handleShowdetail = (id: number) => {
    setOpen(true);
    const detailsUser = datausers.filter((user) => user.id === id);
    setDetails(detailsUser);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CommonWrap title="UserManager">
      <TableWrapper component={Paper}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TableSearchField
            sx={{ width: "40%" }}
            title={""}
            onSearch={onSearch}
            searchText={filters.searchText}
            placeHolder={"filter by userId ... "}
          ></TableSearchField>
        </Box>
        <TableContainer>
          <Scrollbar sx={{ maxHeight: "500px" }}>
            <Table sx={{ minWidth: "max-content" }} size="small">
              <TableHeader
                cells={cells}
                onSort={onSort}
                sortDirection={filters.sortDirection}
                sortBy={filters.sortBy}
              />
              <TableBody>
                {datausers.map((user) => {
                  const { id, userId, title } = user;
                  return (
                    <TableRow hover tabIndex={-1} key={id}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{userId}</TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell>
                        <ActionButton onClick={() => handleShowdetail(id)}>
                          <EditIcon />
                        </ActionButton>
                        <LinkIconButton to={""}>
                          <ActionButton>
                            <DeleteIcon />
                          </ActionButton>
                        </LinkIconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Scrollbar>
          <TablePagination
            pageIndex={filters.pageIndex}
            totalPages={Math.ceil(100 / filters.pageSize)}
            totalRows={100}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            rowsPerPage={filters.pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Details User</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {userDetails.map((value) => {
                  return (
                    <Box>
                      <Typography variant="h6" fontWeight={"bold"}>
                        UserId:
                        <Typography>{value.userId}</Typography>
                      </Typography>
                      <Typography variant="h6" fontWeight={"bold"}>
                        Title:
                        <Typography>{value.title}</Typography>
                      </Typography>
                      <Typography variant="h6" fontWeight={"bold"}>
                        Body:
                        <Typography>{value.body}</Typography>
                      </Typography>
                    </Box>
                  );
                })}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </TableContainer>
      </TableWrapper>
    </CommonWrap>
  );
};

export default UserManager;
