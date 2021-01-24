import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <HeaderPanel>
        <h1>Banking of the Future.</h1>
        <p>Keeping your finances smart since 2020.</p>
        <small>Sample login: DE123456, PIN 123456.</small>
      </HeaderPanel>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  grid-area: main;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const HeaderPanel = styled.div`
  color: white;
  margin: 10px;
  padding: 10px 20px;
  min-width: 30vw;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  @media (min-width: 360px) {
    font-size: 1.5em;
    padding: 30px;
    min-height: 20vh;
    h1 {
      margin-block-start: unset;
    }
  }
  @media (min-width: 768px) {
    width: clamp(200px, 60vw, 90%);
  }
  @media (min-width: 1024px) {
    font-size: 1.5em;
    padding: 50px;
    min-height: 20vh;
    width: clamp(200px, 80%, 95%);
  }
`;

export default Main;
