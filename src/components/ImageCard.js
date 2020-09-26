import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: "rgba(0,0,0,0.5)",
    margin: "50px",
    transition: ".5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  media: {
    height: 440,
  },

  title: {
    fontFamily: "Lobster",
    fontSize: "3vmin",
    color: "#fff",
  },

  description: {
    fontFamily: "Kufam",
    fontSize: "2vmin",
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1200 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={place.imageUrl}
          title=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
