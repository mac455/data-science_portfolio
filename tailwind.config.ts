import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // CSS variables
        foreground: "var(--foreground)",  // CSS variables
        customRed: "#FFBBBB",
        customTeal: '#004D80'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montecarlo: ['MonteCarlo', 'cursive'],
        saira: ['"Saira Condensed"', 'sans-serif'], 
        opensans: ['"Open Sans"', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
      },
      height: {
        88 : '22rem',
        112: '28rem',
        128: '32rem',
        
        
      },

      width: {
        112: '28rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
};

export default config;
