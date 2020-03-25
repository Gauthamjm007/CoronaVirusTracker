import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import { Link } from "react-router-dom";

export default function TableData(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDetail = (province) => {
    //  console.log(province);
  };

  return (
    <div align="center">
      {props.cases !== undefined ? (
        <>
          <br />
          <br />
          <Table border="3">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>#</b>
                </TableCell>
                <TableCell align="left">
                  <b>Country</b>
                </TableCell>
                <TableCell align="left">
                  <b>Province</b>
                </TableCell>
                <TableCell align="left">
                  <b>Cases</b>
                </TableCell>
                <TableCell align="left">
                  <b>Details</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {props.cases
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow key={row.province}>
                      <TableCell align="left">{i + 1}</TableCell>
                      <TableCell align="left">{row.country}</TableCell>
                      <TableCell align="left">
                        {row.province ? row.province : "NA"}
                      </TableCell>
                      <TableCell align="left">{row.latest}</TableCell>
                      <TableCell align="left">
                        <Link
                          to={`/province/${row.country}/${row.province}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleDetail(row.province)}
                          >
                            view Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            }
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.cases.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
