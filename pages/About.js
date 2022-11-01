import FootBlurb from "../components/body/FootBlurb";

import styled from "styled-components";

const Container = styled.div`
    max-height: 100vh;
    max-width: 90vw;
    overflow: hidden;
  `,
  NameTag = styled.div`
    background-color: red;
    padding: 1rem 4rem;
    margin-top: 2rem;
    width: fit-content;
    z-index: 2;
    box-shadow: 8px 12px 7px 0px rgba(0, 0, 0, 0.44);
    -webkit-box-shadow: 8px 12px 7px 0px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: 8px 12px 7px 0px rgba(0, 0, 0, 0.44);
  `;

function AboutPage() {
  return (
    <Container>
      <NameTag>About</NameTag>
      <FootBlurb />
    </Container>
  );
}

export default AboutPage;
