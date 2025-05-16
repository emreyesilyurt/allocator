// Dashboard/pages/_app.js
import '../src/app/globals.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-urbanist",
});

// Critical style overrides to force navbar visibility
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Force navbar visibility */
      nav, .top-navbar {
        background-color: #000000 !important;
        color: white !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 1000 !important;
        position: relative !important;
      }
      
      /* Set dark theme */
      html, body {
        background-color: #000000 !important;
        color: white !important;
      }
      
      /* Force content visibility */
      .page-content {
        display: block !important;
      }
    `}</style>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${urbanist.variable}`}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;