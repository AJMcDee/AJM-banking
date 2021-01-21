import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav({ isLoggedIn, handleLogout }) {
  return (
    <BankNav>
      {" "}
      <BrandMessage>
        <Link to="/">AJM Bank</Link>
      </BrandMessage>
      <NavList>
        <li>personal</li>
        <li>business</li>
        <li>investment</li>
        <li>about</li>
      </NavList>
    </BankNav>
  );
}

const BankNav = styled.nav`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  color: black;

  a {
    color: black;
    padding: 0 10px;
  }

  li {
    margin: 0px 5px;
  }

  li:hover {
    text-decoration: underline;
    text-decoration-color: #fca311;
    cursor: pointer;
  }

  position: absolute;
  width: 100vw;
  max-width: 100%;
  top: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px);
`;

const BrandMessage = styled.h1`
  a {
    color: #2496aa;
    text-decoration: none;
  }
  padding-left: 30px;
  font-family: sans-serif;
  font-size: 3.5em;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 50px;
  li {
    display: inline;
    font-size: 1.6rem;
  }
`;

export default Nav;
