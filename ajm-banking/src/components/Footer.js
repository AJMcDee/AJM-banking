import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <a href="#">Impressum</a> | <a href="#">Contact</a> |{" "}
      <a href="#">Careers</a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  color: black;

  a {
    color: black;
    padding: 0 10px;
  }
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px);
`;

export default Footer;
