import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    minHeight: "30vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  text1: {
    color: "white",
    fontFamily: "Kufam",
    fontSize: "5vmin",
  },
  text2: {
    color: "white",
    fontFamily: "Kufam",
    fontSize: "2.5vmin",
  },
  text3: {
    color: "white",
    fontFamily: "Kufam",
    fontSize: "2vmin",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.text1}>What are you waiting for?</h1>
      <h3 className={classes.text2}>
        Contatct us today and get many hot deals
      </h3>
      <h2 className={classes.text3}>+90 555-522-434</h2>
    </div>
  );
}
