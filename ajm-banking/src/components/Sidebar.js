import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import { useEffect } from "react";

function Sidebar({ isLoggedIn, setIsLoggedIn, handleLogout, setToken }) {
  const history = useHistory();

  return (
    <StyledSideBar>
      {" "}
      {isLoggedIn ? (
        <>
          {" "}
          <h2>Welcome Back</h2>
          <Link to="/myaccount">My Account </Link>
          <br />
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        </>
      ) : (
        <Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
      )}
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  margin: 40px auto;
  grid-area: sidebar;
  border: 4px solid #fca311;
  border-radius: 80px 0px 80px 0px;
  z-index: 1;
  background-color: #2496aa;
  height: clamp(200px, 50%, 80vh);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  a {
    padding: 5px 10px;
    margin: 0 auto;
    box-shadow: 0px 0px 4px black;
    background-color: white;
    border-radius: 5px;
    color: black;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: clamp(200px, 60vw, 90%);
    margin: 60px auto;
    height: clamp(200px, 40%, 50vh);
  }
  @media (min-width: 1024px) {
    text-align: center;
    margin: 0 50px;
    width: clamp(100px, 60%, 80%);
  }
`;

export default Sidebar;
