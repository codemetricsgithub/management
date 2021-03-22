import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../actions";
import { connect } from "react-redux";
import AuthNotice from "../AuthNotice";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const Places = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root} id="place-to-visit">
        <br />
        <AuthNotice />
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return { fetchNotice: dispatch(actions.fetchNotice(actions)) };
}

function mapStateToProps(state) {
  return {
    notice: state.notice,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
