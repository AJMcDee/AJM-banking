import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <HeaderPanel>
        <h1>Banking of the Future.</h1>
        <p>Keeping your finances smart since 2020.</p>
      </HeaderPanel>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  grid-area: main;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 0;
`;

const HeaderPanel = styled.div`
  color: white;
  font-size: 1.5em;
  padding: 50px;
  min-height: 20vh;
  min-width: 30vw;
  /* width: clamp(30vw, 50vw, 90vw); */
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export default Main;
