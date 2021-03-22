import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Field, reduxForm } from "redux-form";
import { Card } from "@material-ui/core";

import * as actions from "../actions";
import { compose } from "redux";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

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
    marginTop: "67px",
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

const NoticePost = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, noticePost } = props;

  const submit = (formProps) => {
    checkDateValidation(formProps.startDate, formProps.endDate, formProps);
  };

  const renderTitle = ({ input }) => {
    return (
      <TextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        label="Title"
        name="title"
        autoFocus
        type="text"
        {...input}
      />
    );
  };

  const renderMessage = ({ input }) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        multiline
        rows={6}
        required
        fullWidth
        placeholder="Enter Your Message..."
        name="message"
        // autoFocus
        type="text"
        {...input}
      />
    );
  };

  const renderDate = ({ input }) => {
    return (
      <TextField
        variant="standard"
        type="date"
        required
        margin="normal"
        {...input}
        className={classes.date}
      />
    );
  };

  const checkDateValidation = (startDate, endDate, formProps) => {
    // check the dates
    if (
      new Date(startDate) > new Date(endDate) ||
      new Date(endDate) < new Date(startDate)
    ) {
      // set date error validation true
      alert("End date must be greater than start date");
    } else {
      // null or false date error validation
      noticePost(formProps);
      history.push("/notice-auth");
    }
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
              Post Notice
            </Typography>

            <form className={classes.form} onSubmit={handleSubmit(submit)}>
              <Field name="title" type="text" component={renderTitle} />
              <Field name="message" type="text" component={renderMessage} />
              <FormLabel className={classes.dateLabel}>Start Date</FormLabel>
              <FormLabel className={classes.endDateLabel}>End Date</FormLabel>
              <br />
              <Field name="startDate" type="date" component={renderDate} />
              <Field name="endDate" type="date" component={renderDate} />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Now
              </Button>
            </form>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({
    form: "noticepost",
  })
)(NoticePost);
