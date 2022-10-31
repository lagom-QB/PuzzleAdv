import React from "react";
import Head from "next/head";

// Custom title bar
function Title() {
  return (
    <Head>
      <title>Puzzle</title>
      {/* <meta property="og:title" content="" key="title" /> */}
      <link rel="icon" type="image/png" href="/images/Icono.png" />
    </Head>
  );
}

export default Title;
