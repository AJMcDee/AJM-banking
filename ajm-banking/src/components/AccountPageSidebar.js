import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar({ handleLogout }) {
  return (
    <StyledSideBar>
      <h2>Welcome Back</h2>
      <Link to="/" onClick={handleLogout}>
        Log Out
      </Link>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  margin: 0 50px;
  grid-area: sidebar;
  border: 4px solid #fca311;
  border-radius: 80px 0px 80px 0px;
  z-index: 1;
  background-color: #2496aa;
  height: clamp(200px, 50%, 80%);
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
`;

export default Sidebar;
