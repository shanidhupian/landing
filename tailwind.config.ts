import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf8f5",
          100: "#f5f1eb",
          200: "#e8dcc6",
          300: "#d4c4a8",
          400: "#c9a961",
          500: "#b8860b",
          600: "#9a7209",
          700: "#7a5a07",
          800: "#5a4305",
          900: "#3a2c03",
        },
        accent: {
          light: "#f5e6d3",
          DEFAULT: "#e8dcc6",
          dark: "#d4c4a8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
