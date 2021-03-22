import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as action from "../actions";
import { compose } from "redux";
import ImageUploader from "react-images-upload";
import {
  Card,
  CssBaseline,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "5px",
  },
  bg: {
    height: "90vh",
    background: "none",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaG9vbCUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  form: {
    //  marginLeft:30,
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    // marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  align: {
    textAlign: "center",
  },

  green: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(75),
  },

  main: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
  },
});

class AdmissionForm extends Component {
  onSubmit = (formProps) => {
    this.props.admissionForm(formProps, () => {
      alert("Data Submitted Successfull");
      this.props.history.push("/");
    });
  };

  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { classes } = this.props;

    const renderFirstName = ({ input }) => {
      return <TextField required autoFocus fullWidth {...input} />;
    };

    // Render text field
    const renderTextField = ({
      input,
      label,

      ...custom
    }) => (
      <TextField
        label={label}
        placeholder={label}
        {...input}
        {...custom}
        // required
        fullWidth
      />
    );

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

              <Typography variant="h3" gutterBottom className={classes.align}>
                Admission Form
              </Typography>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(this.onSubmit)}
                className={classes.form}
              >
                <Grid container>
                  <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>First Name</label>
                      <Field
                        name="firstName"
                        type="text"
                        component={renderFirstName}
                        autoComplete="true"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Middle Name</label>
                      <Field
                        name="middleName"
                        type="text"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Last Name</label>
                      <Field
                        name="lastName"
                        type="text"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Email</label>
                      <Field
                        name="email"
                        type="email"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                      <label>Date Of Birth</label>
                      <Field
                        name="dateOfBirth"
                        type="date"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                      <label>Mobile Number</label>
                      <Field
                        name="phoneNumber"
                        type="number"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Class</label>
                      <Field
                        name="class"
                        type="text"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Admission Number</label>
                      <Field
                        name="addmitionNo"
                        type="number"
                        component={renderTextField}
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Roll No.</label>
                      <Field
                        name="rollNo"
                        type="number"
                        component={renderTextField}
                        autoComplete="none"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Gender</label>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Other"
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <label>Photo</label>

                      <ImageUploader
                        className={classes.image}
                        withIcon={false}
                        buttonText="Choose images"
                        onChange={this.onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                        maxFileSize={52428800}
                        withPreview={true}
                        label=""
                        type="file"
                        name="photo"
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </div>
          </Card>
        </Container>
        <div>{this.props.errorMessage}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

AdmissionForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, action),
  reduxForm({ form: "admissionForm" })
)(AdmissionForm);
