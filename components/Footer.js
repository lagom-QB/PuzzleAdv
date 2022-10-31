import React from "react";
import Link from "next/link";

import styles from "./ComponentStyles/Footer.module.css";
import styled from "styled-components";

// Styles ------
const LinkStyles = styled(Link)`
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  `,
  ATag = styled.a`
    padding: 0 1rem;
    color: rgb(192, 188, 188);
    cursor: pointer;
    &:hover {
      color: rgb(255, 255, 255, 100%);
      transform: scale(1.2);
    }
  `;
// -------------
function Footer() {
  return (
    <div className={styles.Footer}>
      <nav>
        <Link href="/Classifications">
          <ATag
            activeClassName="active"
            data-id="Classifications"
            data-route="classifications"
          >
            Classifications
          </ATag>
        </Link>
        <Link href="/Terms">
          <ATag activeClassName="active" data-id="Terms" data-route="Terms">
            Terms
          </ATag>
        </Link>
        <Link href="/Contact">
          <ATag activeClassName="active" data-id="Contact" data-route="Contact">
            Contact
          </ATag>
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
