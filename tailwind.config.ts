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
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "176": "44rem",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0064FF",
          secondary: "#192fd6",

          accent: "#c4a0ff",
          "accent-content": "#d1d5db",

          neutral: "#292730",
          "neutral-content": "#202632",

          "base-100": "#eaeff5",

          info: "#84c1d7",
          success: "#30dfc7",
          warning: "#f5c13d",
          error: "#f82a65",
        },
      },
      {
        dark: {
          primary: "#0064FF",
          secondary: "#6d3a9c",

          accent: "#51a800",
          "accent-content": "#e5e7eb",

          neutral: "#2e1a05",
          "base-100": "#black",
          info: "#2463eb",
          success: "#16a249",
          warning: "#db7706",
          error: "#dc2828",
        },
      },
    ],
  },
};
export default config;
