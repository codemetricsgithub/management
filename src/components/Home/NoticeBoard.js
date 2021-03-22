import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Places from "./Places";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "300vh",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const NoticeBoard = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {/* Allow us to elliminate all the margins and paddings */}
      <CssBaseline />
      <Header />
      <Places />
    </div>
  );
};

export default NoticeBoard;
