import React, { useEffect, useState } from "react";
import axios from "axios";
// Material Table
import { withStyles, fade, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AppBar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

// Material Table
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({}))(TableRow);

const useStyles = makeStyles((theme) => ({
  edit: {
    margin: theme.spacing(2),
    backgroundColor: "#3498DB",
  },

  delete: {
    marginLeft: "-20px",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#7F8C8D",
  },

  root: {
    flexGrow: 1,
  },

  wrapper: {
    marginTop: "60px",
    marginLeft: "20px",
    marginRight: "20px",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchbar: {
    alignItems: "center",
    position: "static",
    margin: "15px",
    borderRadius: "25px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "250px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function DeleteTable() {
  const classes = useStyles();

  // For pagination
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://ak-sms-api.herokuapp.com/api/v1/student"
      );
      console.log(data.data.student);
      setValue(data.data.student);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Do you want to delete ? ")) {
      await axios.delete(
        `https://ak-sms-api.herokuapp.com/api/v1/student/${id}`
      );
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.wrapper}>
      <br />
      <div>
        <AppBar className={classes.searchbar} color="inherit">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              type="text"
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </AppBar>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Roll No.</StyledTableCell>

                <StyledTableCell align="left"> First Name </StyledTableCell>
                <StyledTableCell align="left">Last Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Admission No.</StyledTableCell>
                <StyledTableCell align="left" style={{ paddingLeft: "52px" }}>
                  Actions
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.lastName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.rollNo.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  } else if (
                    item.email.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                  return null;
                })

                .map((item) => {
                  return (
                    <StyledTableRow key={item._id}>
                      <StyledTableCell component="th" scope="row">
                        {item.rollNo}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.firstName}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.addmitionNo}
                      </StyledTableCell>

                      <StyledTableCell align="left" className="material-icons">
                        <Link
                          to={`/updateList/${item._id}`}
                          className="navbar-brand"
                        >
                          <Tooltip title="Edit" aria-label="edit">
                            <Fab
                              size="small"
                              color="primary"
                              className={classes.edit}
                            >
                              <EditIcon />
                            </Fab>
                          </Tooltip>
                        </Link>
                        <Tooltip title="Delete" aria-label="delete">
                          <Fab
                            size="small"
                            color="secondary"
                            className={classes.delete}
                            onClick={() => deleteUser(item._id)}
                          >
                            <DeleteIcon />
                          </Fab>
                        </Tooltip>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DeleteTable;
