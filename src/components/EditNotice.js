import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import BorderColorIcon from "@material-ui/icons/BorderColor";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "95vh",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    // width: "200%", // Fix IE 11 issue.
    width: "92ch",
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  dateLabel: {
    marginTop: theme.spacing(3),
  },
  endDateLabel: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(40),
  },
  date: {
    width: "45.7ch",
    marginRight: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EditNotice = () => {
  const classes = useStyles();
  let history = useHistory();
  const { id } = useParams();
  const [notice, setNotice] = useState({
    title: "",
    message: "",
    startDate: "",
    endDate: "",
  });

  const { title, message } = notice;
  const onInputChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadNotice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `https://ak-sms-api.herokuapp.com/api/v1/notice/${id}`,
      notice
    );
    history.push("/notice");
  };

  const loadNotice = async () => {
    const result = await axios.get(
      `https://ak-sms-api.herokuapp.com/api/v1/notice/${id}`
    );
    setNotice(result.data.data);
  };
  return (
    <div className={classes.wrapper}>
      <Container component="main" maxWidth="md" className={classes.root}>
        <CssBaseline />
        <Card>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BorderColorIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Edit Notice
            </Typography>
            <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
              <TextField
                variant="filled"
                margin="normal"
                type="text"
                required
                fullWidth
                label="Title"
                name="title"
                autoFocus
                value={title}
                onChange={(e) => onInputChange(e)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                required
                fullWidth
                placeholder="Enter Your Message..."
                name="message"
                type="text"
                value={message}
                onChange={(e) => onInputChange(e)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Update Notice
              </Button>
            </form>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default EditNotice;
