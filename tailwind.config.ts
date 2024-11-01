import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: "1400px",
      },
      xl: {
        max: "1279px",
      },
      lg: {
        max: "1023px",
      },
      "2md": {
        max: "950px",
      },
      md: {
        max: "767px",
      },
      sm: {
        max: "639px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
