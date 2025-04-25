// import "./assets/css/tailwind.css"
// import "./assets/css/materialdesignicons.min.css"
// import { Urbanist } from 'next/font/google'
// import './globals.css'; 


// const urbanist = Urbanist({ 
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400','500','600','700','800','900'],
//   variable: '--font-urbanist'
//  })

// export const metadata = {
//   title: 'Giglink - Next js NFT Marketplace Template ',
//   description: 'Giglink - Next js NFT Marketplace Template',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" dir="ltr" className="dark">
//       {/*<body className={`${urbanist.variable}  font-urbanist text-base text-black dark:text-white dark:bg-black`}>{children}</body>*/}
//       <body className={`${urbanist.variable} font-urbanist text-base text-black dark:text-white dark:bg-black`}>{children}</body>
//     </html>
//   )
// }
// layout.js

import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400','500','600','700','800','900'],
  variable: '--font-urbanist'
});

export const metadata = {
  title: 'Giglink - Next js NFT Marketplace Template',
  description: 'Giglink - Next js NFT Marketplace Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body style={{ backgroundColor: '#000000' }} className={`${urbanist.variable} font-urbanist text-base text-black dark:text-white bg-black dark:bg-black force-dark-black`}>
        {children}
      </body>
    </html>
  );
}