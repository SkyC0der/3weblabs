import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap"
            rel="stylesheet"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-7EQCH5C63E"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('G-7EQCH5C63E');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <div id="myportal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
