import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

import { useAboutQuery } from "./fetchers/About";

// Styles ------
const AboutText = styled.h2`
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 2.5rem;
  `,
  CallText = styled.h2`
    font-weight: 100;
    font-size: 1.33rem;
    white-space: pre-wrap;
    width: 33vw;
    bottom: -5%;
    left: -20vw;
    position: absolute;
  `,
  HeroContext = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    margin: 5% 10%;
  `,
  CompanyName = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 6rem;
  `,
  Title = styled.div`
    width: 100vw;
    padding: 20% 0%;
  `,
  TextContainer = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 100vw;
  `,
  AboutTextContainer = styled.div`
    height: 100vh;
    max-width: 40%;
    position: absolute;
    top: -15%;
    right: -23%;
  `,
  EntryText = styled.div`
    width: 100vw;
  `,
  Container = styled.div`
    transform: scale(0.6);
    max-height: 100vh;
  `;
// -------------
function CallBlurb() {
  const { loading, error, data } = useAboutQuery();
  const name = "Puzzle";

  let allAboutMes = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    data.aboutMes.forEach((aboutMe) => {
      if (aboutMe.sectionName === "Initialisation") {
        allAboutMes.push(aboutMe.aboutUs);
      }
    });
  }

  return (
    <EntryText>
      <motion.ul
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 1,
          mass: 2,
          damping: 5,
        }}
      >
        <TextContainer>
          <Title>
            <CompanyName>{name}</CompanyName>
            <HeroContext>{allAboutMes[0]?.split(".")[0] + "."}</HeroContext>
          </Title>
        </TextContainer>
      </motion.ul>
    </EntryText>
  );
}
function FootBlurb() {
  const { loading, error, data } = useAboutQuery();

  let allAboutMes = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    data.aboutMes.forEach((aboutMe) => {
      if (aboutMe.sectionName === "Initialisation") {
        allAboutMes.push(aboutMe.aboutUs);
      }
    });
  }

  return (
    <EntryText>
      <TextContainer>
        <Title>
          <CallText>
            {allAboutMes[0]?.split("\n").splice(1).join("\u000A")}
          </CallText>
        </Title>
      </TextContainer>
    </EntryText>
  );
}
function LogoImage() {} //TODO::
function AboutUsText() {
  const { loading, error, data } = useAboutQuery();

  let allAboutMes = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    data.aboutMes.forEach((aboutMe) => {
      if (aboutMe.sectionName === "Somos") {
        allAboutMes.push(aboutMe.aboutUs);
      }
    });
  }
  // console.log(allAboutMes[0]);

  return (
    <EntryText>
      <AboutTextContainer>
        <HeroContext style={{ textDecoration: "underline" }}>Somos</HeroContext>
        <AboutText>{allAboutMes[0]}</AboutText>
      </AboutTextContainer>
    </EntryText>
  );
}
// --------------

function AboutContent() {
  return (
    <Container>
      <AboutUsText />
      <CallBlurb />
      {/* <FootBlurb /> */}
    </Container>
  );
}
export default AboutContent;
