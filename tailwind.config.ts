import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ezpurple: { 800: '#3A1078', 900: '#2E0249', 950: '#190028' },
        ezgold: { 300: '#FCE68D', 400: '#F2C94C', 500: '#D4AF37', 600: '#B8860B' },
        ezdark: '#0D0514',
      },
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;