// Dependencies
import React, { useEffect, useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

//Components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import AccountPageSidebar from "./components/AccountPageSidebar";

import Main from "./components/Main";
import News from "./components/News";
import Footer from "./components/Footer";

import AccountPage from "./components/AccountPage";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

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

  // Logout button
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }

  return (
    <div class="App">
      <Router>
        <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Switch>
          <Route path={`/myaccount`}>
            <AccountPageSidebar handleLogout={handleLogout} />
            <AccountPage token={token} />
          </Route>
          <Route path={`/login`}>
            <Login />
          </Route>
          <Route exact path={`/`}>
            <Sidebar
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
              handleLogout={handleLogout}
            />
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
    </div>
  );
}

export default App;
