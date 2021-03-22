import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";
import { Badge, Button, Tooltip } from "@material-ui/core";
import {
  AccountCircle,
  CancelPresentation,
  FormatAlignJustify,
  PlusOne,
  PowerSettingsNew,
} from "@material-ui/icons";

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

function Afterlogin() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
  //onhistory
  const inform = () => {
    history.push("/contactus");
  };
  const loggedout = () => {
    history.push("/logout");
  };
  const homepage = () => {
    history.push("/");
  };
  const notice = () => {
    history.push("/notice-auth");
  };
  const recordview = () => {
    history.push("/listView");
  };
  const postnotice = () => {
    history.push("/notice-post");
  };
  const managementregister = () => {
    history.push("/signupmanagment");
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton>
          <Tooltip title="Close">
            <CancelPresentation />
          </Tooltip>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={managementregister}>
        <IconButton>
          <Tooltip title="Create New Management">
            <PlusOne />
          </Tooltip>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={loggedout}>
        <IconButton color="secondary">
          <Tooltip title="Logout">
            <PowerSettingsNew />
          </Tooltip>
        </IconButton>
      </MenuItem>
    </Menu>
  );

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
            <CancelPresentation />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={homepage}>
            Home
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={notice}>
            Notice
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={inform}>
            Inform Parents
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={recordview}>
            view Records
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" onClick={postnotice}>
            Post notice
          </Button>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton>
            <Badge>
              <AccountCircle />
            </Badge>
          </IconButton>
          <p> Account</p>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header}>
        <Toolbar>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETutwhIQ4LvRrRzbvKtyvcdNkBRVOjtt1Xg&usqp=CAU"
            alt="Kitty Katty!"
            style={{
              minHeight: "12px",
              marginRight: "35px",
              width: "62px",
              borderRadius: "15px",
            }}
          />
          <Typography className={classes.title} variant="h6" noWrap>
            ABC SCHOOL
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>
              <Button color="inherit" onClick={homepage}>
                Home
              </Button>
              <Button color="inherit" onClick={notice}>
                Notice
              </Button>
              <Button color="inherit" onClick={inform}>
                Inform Parents
              </Button>
              <Button color="inherit" onClick={recordview}>
                view Records
              </Button>
              <Button color="inherit" onClick={postnotice}>
                Post Notice
              </Button>
              <IconButton onClick={handleProfileMenuOpen}>
                <AccountCircle />
              </IconButton>
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
      {renderMenu}
    </div>
  );
}

export default Afterlogin;
