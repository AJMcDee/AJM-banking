// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Main from "./components/Main";
import News from "./components/News";
import Footer from "./components/Footer";
import AccountPage from "./components/AccountPage";
import Login from "./components/Login";

// Assets
import background1 from "./img/main-bg.jpg";
import background2 from "./img/main-bg-2.jpg";
import background3 from "./img/main-bg-3.jpg";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // Add images to array
  const imageArray = [background1, background2, background3];

  // Check local storage for existing login or token
  useEffect(() => {
    // localStorage.clear();
    if (localStorage.isLoggedIn === null || localStorage.token === null) {
      return;
    }
    const localLoggedInStatus = localStorage.getItem("isLoggedIn");
    const storageStatus = localLoggedInStatus == "true" ? true : false;
    const existingToken = localStorage.getItem("token");
    setIsLoggedIn(storageStatus);
    setToken(existingToken);
  }, []);

  // Update local storage for login
  useEffect(() => {
    let loggedInStatus = isLoggedIn ? "true" : "false";
    localStorage.setItem("isLoggedIn", loggedInStatus);
  }, [isLoggedIn]);

  // Update local storage for token
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  // Update background image on new imageIndex
  useEffect(() => {
    setImageIndex(0);
  }, []);

  // Logout button
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }

  const StyledApp = styled.div`
    display: grid;
    grid-template-columns: 25% auto;
    grid-template-rows: 200px auto 50px;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    grid-template-areas:
      "nav nav"
      "main main"
      "footer footer";
    background-image: url(${imageArray[imageIndex]});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
  `;

  return (
    <StyledApp>
      <Router>
        <Nav setImageIndex={setImageIndex} />

        <Switch>
          <Route path={`/myaccount`}>
            <AccountPage
              token={token}
              handleLogout={handleLogout}
              setToken={setToken}
              imageArray={imageArray}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
          </Route>
          <Route path={`/login`}>
            <Login />
          </Route>
          <Route exact path={`/`}>
            <Main
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
              handleLogout={handleLogout}
            />
            <News />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
