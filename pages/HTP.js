import styled from "styled-components";
import GuideContent from "../components/body/HowToPlay";

const Container = styled.div`
  max-height: 100vh;
  max-width: 90vw;
  overflow: hidden;
`;

/* Insert into the contact schema of the CMS */

function ContactPage() {
  return (
    <Container>
      <GuideContent />
    </Container>
  );
}

export default ContactPage;
