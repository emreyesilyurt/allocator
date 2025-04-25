// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         urbanist: ['var(--font-urbanist)'],
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */ 
module.exports = {   
  content: [     
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',     
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',     
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',   
  ],   
  theme: {     
    extend: {       
      fontFamily: {         
        urbanist: ['var(--font-urbanist)'],       
      },       
      backgroundImage: {         
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',         
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',       
      },
      // Define custom colors to ensure true black/white
      colors: {
        trueblack: '#000000',
        truewhite: '#FFFFFF',
      },
    },   
  },   
  plugins: [],
  // Ensure darkMode uses class strategy
  darkMode: 'class', 
}