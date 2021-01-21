import styled from "styled-components";
import background from "../img/main-bg.jpg";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";

function Main({ isLoggedIn, setIsLoggedIn, handleLogout, token, setToken }) {
  return (
    <StyledMain>
      <HeaderPanel>
        <h1>Banking of the Future</h1>
        <p>Keeping your finances smart since 2020.</p>
      </HeaderPanel>
      {/* {isLoggedIn ? <Redirect to="/myaccount" /> : null} */}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-top: 250px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: calc(100vh - 250px);
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

const HeaderPanel = styled.div`
  margin: 50px;
  min-height: 20vh;
  min-width: 30vw;
  width: clamp(30vw, 50vw, 90vw);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export default Main;
