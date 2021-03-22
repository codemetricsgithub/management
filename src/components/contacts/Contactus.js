import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Card, Container, Grid } from "@material-ui/core";

export default class Contactus extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };
  // Functions
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent ✓ ",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "sending...",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    try {
      await axios.post("https://ak-sms-api.herokuapp.com/api/v1/sendemail",data);
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
    }
  };
  render() {
    return (
      <Grid item xs={12} md={12} sm={12}>
        <Container style={{ marginTop: "70px" }}>
          <Card className="form-control p-3">
            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
              <Container>
                <TextField id="outlined-basic" fullWidth placeholder="Enter your name" label="Name" variant="filled" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} required type="text"/>
              </Container>
              <br />
              <Container>
                <TextField id="outlined-basic" fullWidth label="Email" placeholder="Enter email address" variant="filled" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} error={this.state.emailError} required type="email"
                />
              </Container>
              <br />
              <Container>
                <TextField id="outlined-basic" fullWidth placeholder="Enter Subject" label="Subject" variant="filled" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} required />
              </Container>
              <br />
              <Container>
                <TextField id="filled-multiline-static" label="Message" placeholder="Type...." multiline rows={8} variant="filled" fullWidth value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} required type="text"/>
              </Container>
              <br />
              <Container>
                <div className=" d-grid gap-2"><button variant="filled" type="submit" className="btn btn-outline-primary"> {this.state.buttonText}</button></div>
              </Container>
            </form>
          </Card>
        </Container>
      </Grid>
    );
  }
}
