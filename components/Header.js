import React from "react";
import Link from "next/link";

import styles from "./ComponentStyles/Header.module.css";
import styled from "styled-components";

// Styles ------
const ATag = styled.a`
  color: rgb(192, 188, 188);
  &:hover {
    color: rgb(255, 255, 255, 100%);
    transform: scale(1.2);
  }
`;
// -------------
const Header = () => {
  return (
    <div className={styles.Menu}>
      <nav>
        <Link href="/">
          <ATag activeClassName="active" data-id="Home" data-route="home">
            Home
          </ATag>
        </Link>
        <Link href="/About">
          <ATag activeClassName="active" data-id="About" data-route="About">
            About
          </ATag>
        </Link>
        <Link href="/HTP">
          <ATag activeClassName="active" data-id="HTP" data-route="HowToPlay">
            How To Play
          </ATag>
        </Link>

        <Link href="/Games">
          <ATag activeClassName="active" data-id="Games" data-route="Games">
            Games
          </ATag>
        </Link>
        <Link href="/Premiums">
          <ATag
            activeClassName="active"
            data-id="Premiums"
            data-route="Premiums"
          >
            Premiums
          </ATag>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
