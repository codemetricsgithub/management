import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Container from "@material-ui/core/Container";
import {
  Card,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "67px",
    display: "flex",
    flexWrap: "wrap",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bg: {
    height: "78vh",
    background: "none",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaG9vbCUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  green: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(70),
  },

  main: {
    padding: "5",
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
  },
}));

const UpdateList = () => {
  let history = useHistory();
  const { id } = useParams();

  const classes = useStyles();

  const [item, setUser] = useState({
    rollNo: "",
    firstName: "",
    lastName: "",
    email: "",
    addmitionNo: "",
  });

  const { rollNo, firstName, lastName, email, addmitionNo } = item;

  const onInputChange = (e) => {
    console.log("user");
    setUser({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://ak-sms-api.herokuapp.com/api/v1/student/${id}`,
      item
    );
    history.push("/ListView");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://ak-sms-api.herokuapp.com/api/v1/student/${id}`
    );
    setUser(result.data.student);
  };
  return (
    <div className={classes.bg}>
      <Container maxWidth="lg" className={classes.root}>
        <CssBaseline />
        <br />
        <br />
        <Card>
          <div className={classes.main}>
            <Avatar className={classes.green}>
              <AssignmentIcon />
            </Avatar>
            <Typography
              variant="h3"
              style={{ textAlign: "center" }}
              gutterBottom
            >
              Update User
            </Typography>
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container>
                <Grid container spacing={10}>
                  <Grid item xs={12} sm={12} md={4}>
                    <label>Roll No.</label>
                    <div className="form-group">
                      <TextField
                        // required
                        fullWidth
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Roll No. "
                        name="rollNo"
                        value={rollNo}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <label>First Name</label>
                    <div className="form-group">
                      <TextField
                        // required
                        fullWidth
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <label>Last Name</label>
                    <div className="form-group">
                      <TextField
                        // required
                        fullWidth
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your LastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </Grid>{" "}
                </Grid>

                <Grid container spacing={10}>
                  <Grid item xs={12} sm={12} md={4}>
                    <label>Email</label>
                    <div className="form-group">
                      <TextField
                        // required
                        fullWidth
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <label>Admission Number</label>
                    <div className="form-group">
                      <TextField
                        // required
                        fullWidth
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Admission Number"
                        name="addmitionNo"
                        value={addmitionNo}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>{" "}
                    <br />{" "}
                  </Grid>
                </Grid>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
                <br />
              </Grid>
            </form>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default UpdateList;
