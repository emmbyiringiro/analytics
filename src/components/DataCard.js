import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataCard = ({ title, icon, number }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.contentWrapper}>
          <Typography>{title}</Typography>
        </div>
        <div className={classes.contentWrapper}>
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
        <Typography variant="h4">{number}</Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  cardContent: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    maxWidth: 200,
    minWidth: 100,
    backgroundColor: "#4285F4",
    color: "#fff",
    fontFamily: "Roboto"
  },
  contentWrapper: {
    padding: 10
  },
  title: {
    fontSize: 14
  }
});

export default DataCard;
