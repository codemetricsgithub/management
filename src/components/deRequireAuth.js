import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

// exporting a function. When we call a function with this component we get another component class that wraps the one we called the function with.
export default function derequiredAuth(ComposedComponent) {
  class DeAuthentication extends Component {
    componentDidMount() {
      if (this.props.auth) {
        this.props.history.push("/about");
      }
    }

    componentDidUpdate() {
      if (this.props.auth) {
        this.props.history.push("/about");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    // return { auth: state.authenticate };
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(DeAuthentication);
}
