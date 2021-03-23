import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "../gallery/Gallery";
import Notice from "../Table/Notice";
import AboutUs from "./AboutUs";
import Animation from "./Animation";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  textshow: {
    marginTop: "15px",
    textAlign: "center",
    fontFamily: "roboto",
    fontSize: "20px",
    color: "white",
  },
  image: {
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1610547676534-2fc27f46248a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "auto",
  },
}));
function Landingpage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.grow}>
        <Animation />
      </div>
      <div className={classes.image}>
        <hr style={{ marginTop: 720 }} />
        <hr />
        <Notice />
      </div>
      <hr />
      <Gallery />
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <hr />
      <AboutUs />
    </div>
  );
}
export default Landingpage;
