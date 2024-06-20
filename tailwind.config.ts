import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '4xl': ['2rem', { lineHeight: '1' }],  // default
        '5xl': ['2.5rem', { lineHeight: '1' }], // large screens
        '6xl': ['3rem', { lineHeight: '1' }],   // extra large screens
        'custom-text-size-1': ['4.125rem', { lineHeight: '1' }], 
      },
      screens: {
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height : {
        '5/12': '41.666666%',
        '7/12': '58.333333%',
      },
    },
  },
  plugins: [],
};

export default config;