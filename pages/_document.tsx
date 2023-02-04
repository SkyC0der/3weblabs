import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap"
            rel="stylesheet"
          />
          </Head>
        <body>
          <Main />
          <div id='myportal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}