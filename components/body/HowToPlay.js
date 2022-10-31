import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

import { useAboutQuery } from "./fetchers/About";

// Styles ------
const AboutText = styled.h2`
    font-size: 1.6rem;
    font-weight: 150;
    line-height: 2.5rem;
    white-space: pre-wrap;
    overflow: visible;
  `,
  HeroContext = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    margin: 5% 10%;
  `,
  RulesContainer = styled.div`
    height: 100vh;
    transform: scale(0.7);
  `,
  Container = styled.div`
    color: white;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar {
      display: none;
    }
  `;
// -------------
function HowToPlayText() {
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
      if (aboutMe.sectionName === "Cómo jugar") {
        allAboutMes.push(aboutMe.aboutUs);
      }
    });
  }
//   console.log(allAboutMes[0]?.split("\n"));

  return (
    <RulesContainer>
      <HeroContext style={{ textDecoration: "underline" }}>
        Cómo jugar
      </HeroContext>
      <AboutText>{allAboutMes[0]?.split("\n").join("\u000A")}</AboutText>
    </RulesContainer>
  );
}
// --------------

function GuideContent() {
  return (
    <Container>
      <HowToPlayText />
    </Container>
  );
}
export default GuideContent;
