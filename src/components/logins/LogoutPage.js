import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
export class LogoutPage extends Component {
  componentDidMount() {
    this.props.signout();
    // this signout already exported fron actions
  }
  render() {
    return (
      <div>
        <div>
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(LogoutPage);
