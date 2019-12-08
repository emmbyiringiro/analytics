import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ComputerGrid from "./components/ComputerGrid";
import UsersGrid from "./components/UsersGrid";
import ContentLoader from "react-content-loader";
import ErrorMessage from "./components/ErrorMessage";
import Home from "./components/Home";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { getUsersData } from "./../src/helper/utils";
import { API_URL } from "./../src/helper/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    usersData: [],
    computerData: [],
    userCount: 0,
    computerCount: 0,
    isLoading: false,
    loadingError: false,
    error: ""
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const usersData = await getUsersData(`${API_URL}/users`);
      const computerData = await getUsersData(`${API_URL}/computers`);
      this.setState({
        computerData,
        usersData,
        userCount: usersData.length,
        computerCount: computerData.length,
        isLoading: false
      });
    } catch (error) {
      this.setState({ isLoading: false, error, loadingError: true });
    }
  }
  render() {
    const { isLoading, computerData, error, loadingError } = this.state;

    if (loadingError) {
      return <ErrorMessage />;
    }

    return isLoading ? (
      <ContentLoader
        height={160}
        width={400}
        speed={2}
        primaryColor="#4285F4"
        secondaryColor="lightblue"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    ) : (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home {...this.state} />
          </Route>
          <Route path="/users">
            <UsersGrid data={this.state.usersData} />
          </Route>

          <Route path="/computers">
            <ComputerGrid data={this.state.computerData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
