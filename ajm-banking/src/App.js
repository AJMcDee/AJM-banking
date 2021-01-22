// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Main from "./components/Main";
import Personal from "./components/Personal";
import Business from "./components/Business";
import Investment from "./components/Investment";
import About from "./components/About";
import Footer from "./components/Footer";
import AccountPage from "./components/AccountPage";
import Sidebar from "./components/Sidebar";
import AccountPageSidebar from "./components/AccountPageSidebar";

// Assets
import background1 from "./img/main-bg.jpg";
import background2 from "./img/main-bg-2.jpg";
import background3 from "./img/main-bg-3.jpg";
import background4 from "./img/main-bg-4.jpg";
import background5 from "./img/main-bg-5.jpg";
import background6 from "./img/main-bg-6.jpg";
import background7 from "./img/main-bg-7.jpg";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [imageIndex, setImageIndex] = useState(3);

  // Add images to array
  const imageArray = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ];

  // Check local storage for existing login or token
  useEffect(() => {
    // localStorage.clear();
    if (localStorage.isLoggedIn === null || localStorage.token === null) {
      return;
    }
    const localLoggedInStatus = localStorage.getItem("isLoggedIn");
    const storageStatus = localLoggedInStatus === "true" ? true : false;
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

  // Update background image on page load or reload
  useEffect(() => {
    setImageIndex(1);
  }, []);

  // Logout button
  function handleLogout() {
    // setImageIndex(1);
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }

  const StyledApp = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: 25% auto;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    grid-template-areas:
      "nav nav"
      "sidebar main"
      "footer footer";
    background-image: url(${imageArray[imageIndex]});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  return (
    <StyledApp>
      <Router history={history}>
        <Nav setImageIndex={setImageIndex} />

        <Switch>
          <Route path={`/myaccount`}>
            <AccountPageSidebar
              token={token}
              handleLogout={handleLogout}
              setToken={setToken}
              imageArray={imageArray}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
            <AccountPage token={token} setImageIndex={setImageIndex} />
          </Route>
          <Route exact path={`/`}>
            <Sidebar
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
            />
            <Main />
          </Route>
          <Route path={`/personal`}>
            <Personal setImageIndex={setImageIndex} />
          </Route>
          <Route path={`/business`}>
            <Business setImageIndex={setImageIndex} />
          </Route>
          <Route path={`/investment`}>
            <Investment setImageIndex={setImageIndex} />
          </Route>
          <Route path={`/about`}>
            <About setImageIndex={setImageIndex} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
