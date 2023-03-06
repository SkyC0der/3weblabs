import React from "react";
import Head from "next/head";
import Logo from "/public/assets/images/logo/Logo-2x.png";

const SEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{`3weblabs | ${title}`}</title>
      <meta name="title" content={`3weblabs ${title}`} />
      <meta name="description" content={description} />

      <link rel="icon" href="https://3labs.io/assets/images/logo/Logo-2x.png" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://3weblabs.io/" />
      <meta property="og:title" content={`3weblabs | ${title}`} />
      <meta
        property="og:image"
        content={"https://3weblabs.io/assets/images/logo/Logo-2x.png"}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://3weblabs.io/" />
      <meta property="twitter:title" content={`3weblabs | ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={"https://3weblabs.io/assets/images/logo/Logo-2x.png"}
      />

      <script
        src="https://kit.fontawesome.com/9b1c8d52ed.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
};

export default SEO;
