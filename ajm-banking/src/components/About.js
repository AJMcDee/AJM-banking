import styled from "styled-components";
import { useEffect } from "react";

function About({ setImageIndex }) {
  useEffect(() => {
    setImageIndex(6);
  });

  return (
    <StyledMain>
      <HeaderPanel>
        <h1>About AJM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus unde,
          temporibus placeat consequatur quas adipisci ullam aut recusandae vero
          labore eveniet odit commodi eos sed assumenda alias animi saepe
          obcaecati aperiam nesciunt accusantium possimus? Aperiam culpa,
          doloremque architecto porro quod incidunt quia eaque totam laboriosam
          non dolore quos?{" "}
        </p>{" "}
        <p>
          Eaque aspernatur in sunt! Dolorum tempora minima excepturi culpa
          impedit praesentium aspernatur similique, expedita, molestias facere
          iure dolorem nihil, ab possimus sequi aperiam velit magni reiciendis?
          Animi tenetur dolorum ipsa voluptatibus est iste eligendi qui itaque,
          facilis ut omnis eum nam dolor iusto assumenda facere commodi minima
          dolorem. Quas reiciendis error consequatur iure et suscipit,
          consequuntur aut amet quia corporis eaque ullam debitis magni
          voluptatum quos soluta tempore, beatae, corrupti autem aperiam
          architecto sit dolores pariatur maiores?
        </p>
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
  margin: 20px;
`;

const HeaderPanel = styled.div`
  color: white;
  h1 {
    font-size: 1.5em;
  }
  padding: 50px;
  min-height: 20vh;
  /* min-width: 30vw; */
  width: clamp(30vw, 50vw, 90vw);
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export default About;
