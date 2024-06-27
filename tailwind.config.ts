import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Satoshi'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
       
        wgrey: '#7E7E7E',
        asgray: {
          DEFAULT: '#69778F',
          2: '#011D41'
        },
        dbprimary: {
          DEFAULT: '#6289CD',
          1: '#5779DF'
        },
        asprimary: {
          DEFAULT: '#4059EB',
          2: '#609EF2'
        }
      },
      backgroundImage: {
        'wgradient-1': ' linear-gradient(268.3deg, rgba(247, 247, 247, 0.968627) 7.48%, #ECF3EA 90.25%)',
        "asgradient-1": "linear-gradient(103.95deg, #D1D8FF 0.36%, #B8EAFA 98.58%)",
        "asgradient-2": "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
      },
      boxShadow: {
        1: '0px 4px 51px 4px rgba(0, 0, 0, 0.08)', //2:'0px 4px 51px 4px rgba(0, 0, 0, 0.08)', 
        2: '0px 4px 80px rgba(0, 0, 0, 0.06)',
        3: '0px 4px 51px 4px rgba(57, 174, 86, 0.08)',

      }
    },
    screens: {
      mv: '360px',
      // => @media (min-width: 480px) { ... }

      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      ml: '992px', // Medium Large
      // => @media (min-width: 992px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      sl: '1199px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1921x',
      // => @media (min-width: 1921px) { ... }

      wrap: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
export default config;