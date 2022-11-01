import Link from "next/link";

import styles from "./ComponentStyles/Footer.module.css";
import styled from "styled-components";
import React from "react";

import { useAboutQuery } from "./body/fetchers/About";

// Styles ------
const AboutText = styled.h2`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    cursor: default;
  `,
  CallText = styled.h2`
    font-weight: 300;
    font-size: 0.8rem;
    white-space: pre-wrap;
    width: 20vw;
    margin-top: -3vh;
  `,
  Title = styled.div`
    width: 10vw;
    padding: 10% 0%;
    padding-top: 2%;
    margin: 0% -10%;
  `;

// Styles ------
const FooterDiv = styled.div`
    max-width: 80vw;
    position: absolute;
    left: 10vw;
    bottom: 7vh;
  `,
  NavStyle = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-width: 80vw;
    margin: -5rem 0;
  `,
  ATag = styled.a`
    padding: 0 1rem;
    color: rgb(0, 0, 0);
    cursor: pointer;
    &:hover {
      transition: 0.3 ease;
      transform: scale(1.1);
      color: rgb(255, 0, 0, 100%);
    }
  `,
  InlineItems = styled.div`display: flex:
  flex-direction: column;
  margin: 0`;

// Styles ------
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //background: rgba(255, 0, 0, 0.2);
  `,
  IconImage = styled.a`
    &::hover {
      transform: scale(1.1);
    }
    & > img {
      width: 2rem;
      height: 2rem;
    }
  `;
// --------------------------

function TermsBlurb() {
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
    <Title>
      <CallText>
        {allAboutMes[0]?.split("\n").splice(1).join("\u000A")}
      </CallText>
    </Title>
  );
}
function ContactIcons() {
  return (
    <ContactDiv>
      <IconImage href="https://www.instagram.com/puzzle.adv/">
        <img
          alt="Instagram"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
        />
      </IconImage>
      <IconImage href="https://www.twitter.com/puzzle.adv/">
        <img
          alt="Twitter"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png"
        />
      </IconImage>
      <IconImage href="mailto:info@puzzleadv.com">
        <img
          alt="Gmail"
          src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_gmail-512.png"
        />
      </IconImage>
    </ContactDiv>
  );
}
function Footer() {
  return (
    <FooterDiv>
      <NavStyle>
        <Link href="/Classifications">
          <ATag
            activeClassName="active"
            data-id="Classifications"
            data-route="classifications"
          >
            <AboutText style={{ cursor: "pointer" }}>Classifications</AboutText>
          </ATag>
        </Link>
        <InlineItems>
          <AboutText>Terms</AboutText>
          <TermsBlurb />
        </InlineItems>
        <InlineItems>
          <AboutText>Contact</AboutText>
          <ContactIcons />
        </InlineItems>
      </NavStyle>
    </FooterDiv>
  );
}

export default Footer;
