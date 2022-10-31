import FootBlurb from "../components/body/FootBlurb";

import styled from "styled-components";

const Container = styled.div`
  max-height: 100vh;
  max-width: 90vw;
  overflow: hidden;
`;

function AboutPage() {
  return (
    <Container>
      <FootBlurb />
    </Container>
  );
}

export default AboutPage;
