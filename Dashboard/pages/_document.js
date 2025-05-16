// Dashboard/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="font-urbanist text-base text-black dark:text-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}