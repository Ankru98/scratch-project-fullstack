import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";
import { render } from "react-dom";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
