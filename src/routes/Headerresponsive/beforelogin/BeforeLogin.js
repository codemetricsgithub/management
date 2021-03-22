import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";
import { Button, MenuItem, Tooltip } from "@material-ui/core";
import { CancelPresentation, FormatAlignJustify } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#A52A2A",
    color: "white",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function BeforeLogin() {
  const history = useHistory();
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // Redirecting process start

  const homepage = () => {
    history.push("/");
  };
  const newadmission = () => {
    history.push("/admissionForm");
  };
  const login = () => {
    history.push("/loginpage");
  };

  // Redirecting process end
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div>
        <MenuItem>
          <IconButton onClick={handleMenuClose}>
            <Tooltip title="Close">
              <CancelPresentation />
            </Tooltip>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={homepage}>
            Home
          </Button>
        </MenuItem>

        <MenuItem>
          <Button color="inherit" onClick={newadmission}>
            New Admission
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={login}>
            login
          </Button>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header}>
        <Toolbar>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETutwhIQ4LvRrRzbvKtyvcdNkBRVOjtt1Xg&usqp=CAU="
            alt="Kitty Katty!"
            style={{
              minHeight: "12px",
              marginRight: "35px",
              width: "62px",
              borderRadius: "15px",
            }}
          />
          <Typography variant="h6" color="inherit">
            ABC SCHOOL
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>
              <Button color="inherit" onClick={homepage}>
                Home
              </Button>

              <Button color="inherit" onClick={newadmission}>
                New Admission
              </Button>
              <Button color="inherit" onClick={login}>
                login
              </Button>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <FormatAlignJustify />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default BeforeLogin;
