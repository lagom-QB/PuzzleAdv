import styled from "styled-components";
import TermsContent from "../components/body/TermsBlurb";

const Container = styled.div`
  max-height: 100vh;
  max-width: 90vw;
  overflow: hidden;
`;

/* Insert into the contact schema of the CMS */

function ContactPage() {
  return (
    <Container>
      <TermsContent />
    </Container>
  );
}

export default ContactPage;
