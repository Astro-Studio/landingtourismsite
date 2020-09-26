import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Collapse } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

//import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  typography: {
    padding: theme.spacing(2),
  },

  appbar: {
    background: "none",
    fontFamily: "Kufam",
  },

  appbarWrapper: {
    width: "98%",
    margin: "10px auto",
  },

  appbarTitle: {
    flexGrow: "1",
    fontSize: "3vmin",
  },

  icon: {
    color: "#fff",
    fontSize: "6vmin",
    transition: ".5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  title: {
    color: "#fff",
    fontFamily: "Kufam",
    fontSize: "5vmin",
  },

  container: {
    textAlign: "center",
  },

  goDown: {
    color: "#5AFF3D",
    fontSize: "8vmin",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>MyTurkishTrip.com</h1>
          <IconButton>
            <SortIcon
              className={classes.icon}
              aria-describedby={id}
              onClick={handleClick}
            />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              By AstroStudio© 2020.
            </Typography>
          </Popover>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1200 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>Are you ready for an adventure ?</h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <KeyboardArrowDownIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
