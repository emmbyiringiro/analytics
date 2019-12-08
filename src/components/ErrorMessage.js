import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  title: {
    fontSize: 15
  },
  pos: {
    marginBottom: 12
  }
});

export default function ErrorMessage() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Ooops, Something went Wrong. Check Your Network and Try Again
        </Typography>
      </CardContent>
      <CardActions style={{ alignItems: "center", justifyContent: "center" }}>
        <Button
          size="small"
          color="#ccc"
          onClick={event => {
            event.preventDefault();

            window.location.replace("/");
          }}
        >
          Try Again
        </Button>
      </CardActions>
    </Card>
  );
}
