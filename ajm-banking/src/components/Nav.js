import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav({ setImageIndex }) {
  return (
    <BankNav>
      {" "}
      <BrandMessage>
        <Link to="/" onClick={() => setImageIndex(1)}>
          AJM
        </Link>
      </BrandMessage>
      <NavList>
        <Link to="/personal">
          <li>personal</li>
        </Link>
        <Link to="/business">
          <li>business</li>
        </Link>
        <Link to="/investment">
          <li>investment</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
      </NavList>
    </BankNav>
  );
}

const BankNav = styled.nav`
  display: flex;
  align-items: center;
  color: black;
  grid-area: nav;
  margin: 10px 0px;

  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px);
  @media (min-width: 360px) {
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    margin: 50px 0 30px 0px;
    height: 120px;
  }
  @media (min-width: 1024px) {
    margin: 50px 0 30px 0px;
    height: 120px;
  }
`;

const BrandMessage = styled.h1`
  a {
    color: #2496aa;
    text-decoration: none;
  }

  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: 3.5em;
    padding-left: 50px;
    a {
      &::after {
        content: " Bank";
      }
    }
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-inline-start: unset;
  margin-block-start: unset;
  font-size: 0.7rem;

  a {
    padding: 2px;
    color: black;
  }

  li {
    display: inline;
  }

  li:hover {
    text-decoration: underline;
    text-decoration-color: #fca311;
    cursor: pointer;
  }

  @media (min-width: 360px) {
    font-size: 0.9rem;
    a {
      padding: 5px;
    }
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    a {
      padding: 15px;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 50px;
    li {
      margin: 0px 5px;
      font-size: 1.6rem;
    }
  }
`;

export default Nav;
