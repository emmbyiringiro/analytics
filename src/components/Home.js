import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DataCard from "./DataCard";
import ComputerGrid from "./ComputerGrid";
import UsersGrid from "./UsersGrid";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = props => {
  const classes = useStyles();
  const userCount =
    props.userCount >= 1000 ? `${props.userCount / 1000}K` : props.userCount;

  const computerCount =
    props.computerCount >= 1000
      ? `${props.computerCount / 1000}K`
      : props.computerCount;
  return (
    <Grid
      container
      className={classes.appContainer}
      spacing={1}
      justify="center"
      alignItems="center"
    >
      <Grid justify="center" alignItems="center" item xs={3}>
        <Link className={classes.linkStyles} to="/users">
          <DataCard title="Users" number={userCount} icon={faUser} />
        </Link>
      </Grid>
      <Grid justify="center" alignItems="center" item xs={3}>
        <Link to="/computers" className={classes.linkStyles}>
          <DataCard title="Computers" icon={faDesktop} number={computerCount} />
        </Link>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  appContainer: {
    padding: 20,
    paddingLeft: 20,
    paddingRight: 30
  },
  linkStyles: { textDecoration: "none" }
});
export default Home;
