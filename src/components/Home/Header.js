import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Collapse, IconButton, } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyle = makeStyles((theme) => ({
  root: { display: "flex", justifyContent: "center", alignItems: "center", height: "90vh",
  },
  appBar: { background: "none",
  },
  appbarTitle: { flexGrow: "1",
  },
  icon: { fontSize: "2rem",
  },
  container: { textAlign: "center",
  },
  title: { fontSize: "4.5rem", color: "#2b4ae4  ",
  },
  appBarWrapper: { width: "80%", margin: "0 auto",
  },
  colorText: { color: "#ff0000",
  },
  goDown: { color: "#2b4ae4", fontSize: "4rem",
  },
}));

function Header() {
  const classes = useStyle();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => { setChecked(true);
  }, []);
  return ( <div className={classes.root}><Collapse  in={checked}  {...(checked ? { timeout: 1000 } : {})}  collapsedHeight={50}>  <div className={classes.container}> <h1 className={classes.title}>Important <br /> <span className={classes.colorText}>Notice</span> </h1>
 {/* To scroll to the given id */} <Scroll to="place-to-visit" smooth={true}><IconButton>  <ExpandMoreIcon className={classes.goDown} /></IconButton> </Scroll>  </div></Collapse> </div>
  );
}

export default Header;
