import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-left': 'linear-gradient(to left, #4b6cb7, #182848)',
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
      colors: {
        background: "var(--background)",  // CSS variables
        foreground: "var(--foreground)",  // CSS variables
        customRed: "#FFBBBB",
        customTeal: '#004D80',
        customGreen: '#A9F1DF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montecarlo: ['MonteCarlo', 'cursive'],
        saira: ['"Saira Condensed"', 'sans-serif'], 
        opensans: ['"Open Sans"', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        inter :['Inter', 'sans-serif'],
        roboto : ['Roboto', 'sans-serif'],

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
