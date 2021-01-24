import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar({ handleLogout }) {
  return (
    <StyledSideBar>
      <h2>Options</h2>
      <Link to="/" onClick={handleLogout}>
        Log Out
      </Link>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  grid-area: sidebar;
  margin: 40px auto;
  border: 4px solid #fca311;
  border-radius: 80px 0px 80px 0px;
  z-index: 1;
  background-color: #2496aa;

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

  @media (min-width: 1024px) {
    margin: 0 50px;

    height: clamp(200px, 50%, 80%);
  }
`;

export default Sidebar;
