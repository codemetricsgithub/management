import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  maindiv: {
    marginTop: "0.1%",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
        //style={{ background: "black", color: "white" }}
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Terms and Condtitions
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
