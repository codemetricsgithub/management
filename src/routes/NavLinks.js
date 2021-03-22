import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions";
import Afterlogin from "./Headerresponsive/afterlogin/Afterlogin";
import BeforeLogin from "./Headerresponsive/beforelogin/BeforeLogin";

class NavLinks extends Component {
  renderLinks() {
    
    if (this.props.auth) {
      return (
        <>
          <Afterlogin />
        </>
      );
    } else {
      return (
        <>
          <BeforeLogin />
        </>
      );
    }
  }

  render() {
    return <div>{this.renderLinks()}</div>;
  }
}

// Getting the value from reducer
function mapStateToProps(state) {
  // return { auth: state.authenticate };
  return { auth: state.auth.authenticated };
}

export default compose(connect(mapStateToProps, actions))(NavLinks);
