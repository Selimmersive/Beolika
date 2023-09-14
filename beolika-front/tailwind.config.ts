import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        darker: ["var(--font-darker)"],
        sego: ["var(--font-sego)"],
      },
    },
    screens: {
      xs: "370px",
      sm: "420px",
      md: "760px",
      lg: "1020px",
      xl: "1400px",
      "2xl": "2500px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
