import styled from "styled-components";
import GamesContent from "../components/body/GamesBlurb";

const Container = styled.div`
  max-height: 100vh;
  max-width: 90vw;
  overflow: hidden;
`;

/* Insert into the contact schema of the CMS */

function ContactPage() {
  return (
    <Container>
      <GamesContent />
    </Container>
  );
}

export default ContactPage;
