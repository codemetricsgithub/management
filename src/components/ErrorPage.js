import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  errorpage: {
    backgroundImage:
      "url(" +
      "https://www.digitalartsonline.co.uk/cmsdata/features/3698525/404-header.jpg" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh",
  },
}));

function ErrorPage() {
  const classes = useStyles();
  return (
    <div className={classes.errorpage}>
      <h1
        align="center"
        style={{
          fontFamily: "cursive",
          color: "red",
          marginTop: "68px",
          textAlign: "left",
        }}
      >
        This Page does not exist..
      </h1>
    </div>
  );
}

export default ErrorPage;
