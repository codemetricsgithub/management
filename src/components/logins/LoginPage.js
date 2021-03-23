import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { LockOpenOutlined } from "@material-ui/icons";
import * as actions from "../../actions";

const useStyles = (theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 375,
    marginTop: "66px",
    alignItems: "center",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  radio: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  bg: {
    height: "90vh",
    background: "none",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});
class LoginPage extends Component {
  submit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push("/management");
    });
  };

  managementEmail = ({ input, label, ...custom }) => (
    <TextField
      label="Email"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  managementPassword = ({ input, label, ...custom }) => (
    <TextField
      label="Password"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  //teachers input fields
  teachersEmail = ({ input, label, ...custom }) => (
    <TextField
      label=" Teachers Email"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  teachersPassword = ({ input, label, ...custom }) => (
    <TextField
      label=" Teachers Password"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  //teachers input fields end
  //teachers input fields
  adminEmail = ({ input, label, ...custom }) => (
    <TextField
      label=" Admin Email"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  adminPassword = ({ input, label, ...custom }) => (
    <TextField
      label=" Admin Password"
      {...input}
      {...custom}
      variant="filled"
      margin="normal"
    />
  );
  //teachers input fields end

  render() {
    //
    const { handleSubmit } = this.props;
    const { classes } = this.props;

    //action on change
    const changehandlermanagment = () => {
      document.getElementById("managementform").style.display = "block";
      document.getElementById("teacherform").style.display = "none";
      document.getElementById("adminform").style.display = "none";
    };
    const changehandlermanagmentoff = () => {
      document.getElementById("managementform").style.display = "none";
      document.getElementById("teacherform").style.display = "none";
      document.getElementById("adminform").style.display = "none";
    };
    // teachers actions onchange
    const changehandlerteacher = () => {
      document.getElementById("managementform").style.display = "none";
      document.getElementById("adminform").style.display = "none";
      document.getElementById("teacherform").style.display = "block";
    };
    const changehandlerteacheroff = () => {
      document.getElementById("managementform").style.display = "none";
      document.getElementById("adminform").style.display = "none";
      document.getElementById("teacherform").style.display = "none";
    };
    // action for admin
    const changehandleradmin = () => {
      document.getElementById("teacherform").style.display = "none";
      document.getElementById("adminform").style.display = "block";
      document.getElementById("managementform").style.display = "none";
    };
    const changehandleradminoff = () => {
      document.getElementById("teacherform").style.display = "none";
      document.getElementById("adminform").style.display = "none";
      document.getElementById("managementform").style.display = "none";
    };
    const alertbutton = () => {
      alert("This Function is comining soon..");
    };

    // rendering
    return (
      <div className={classes.bg}>
        <Container component="main" maxWidth="xs">
          <div>
            <Card className={classes.root}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOpenOutlined />
                </Avatar>
                <Typography component="h5" variant="h5">
                  Welcome To Login Panel
                </Typography>
                <div>
                  <Tooltip title="Single Click To Open And Double Click(Fast) To Hide">
                    <FormControl className={classes.radio}>
                      <RadioGroup row>
                        <FormControlLabel
                          value="managment"
                          control={<Radio />}
                          label="Managment"
                          onClick={changehandlermanagment}
                          onDoubleClick={changehandlermanagmentoff}
                        />

                        <FormControlLabel
                          value="teachers"
                          control={<Radio />}
                          label="Teachers"
                          onClick={changehandlerteacher}
                          onDoubleClick={changehandlerteacheroff}
                        />
                        <FormControlLabel
                          value="admin"
                          control={<Radio />}
                          label="Admin"
                          onClick={changehandleradmin}
                          onDoubleClick={changehandleradminoff}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Tooltip>
                  <form
                    onSubmit={handleSubmit(this.submit)}
                    className={classes.form}
                    style={{ display: "none" }}
                    id="managementform"
                  >
                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name="email"
                      type="email"
                      component={this.managementEmail}
                    />

                    <br />

                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name="password"
                      type="password"
                      component={this.managementPassword}
                    />
                    <div style={{ color: "red" }}>
                      {this.props.errorMessage}
                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Managment Login
                    </Button>
                  </form>
                  {/* //Teachers input Fields */}
                  <form
                    onSubmit={handleSubmit(this.submit)}
                    className={classes.form}
                    style={{ display: "none" }}
                    id="teacherform"
                  >
                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name="teachersemail"
                      type="email"
                      component={this.teachersEmail}
                    />
                    <br />
                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name=" teacherspassword"
                      type="password"
                      component={this.teachersPassword}
                    />
                    <div style={{ color: "red" }}>
                      {this.props.errorMessage}
                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={alertbutton}
                    >
                      Teachers Login
                    </Button>
                    <Grid item className={classes.radio}>
                      <Link to="#" variant="filled">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </form>
                  {/* Teachers input fields end */}

                  {/* Admin login page */}
                  <form
                    onSubmit={handleSubmit(this.submit)}
                    className={classes.form}
                    style={{ display: "none" }}
                    id="adminform"
                  >
                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name="adminemail"
                      type="email"
                      component={this.adminEmail}
                    />
                    <br />
                    <Field
                      autoComplete="off"
                      required
                      fullWidth
                      name="adminpassword"
                      type="password"
                      component={this.adminPassword}
                    />
                    <div style={{ color: "red" }}>
                      {this.props.errorMessage}
                    </div>
                    <Button
                      onClick={alertbutton}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Admin Login
                    </Button>
                    <Grid item className={classes.radio}>
                      <Link to="#" variant="filled">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </form>

                  {/* admn login page end */}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
LoginPage.propTypes = {
  classes: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  withStyles(useStyles),
  reduxForm({ form: "login" })
)(LoginPage);
