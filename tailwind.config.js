import { keyframes } from "styled-components";

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        input: 360,
        button: 175,
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.3)" },
          "75%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.2s ease-in",
      },
      height: {
        input: 54,
      },
      width: {
        input: 360,
        button: 175,
      },
      boxShadow: {
        innerShadow: "inset 0 0 10px rgba(0,0,0,0.25)",
      },
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1300px",
    },
    fontSize: {
      title1: 64,
      title2: 52,
      title3: 48,
      body1: 32,
      body2: 20,
      body3: 16,
      tiny1: 12,
    },
    fontFamily: {
      pretendard: ["Pretendard-Bold"],
    },
    colors: {
      purple: "#7f57d2",
      lightPurple: "#DEA8FF",
      white: "#f4f5f9",
      red: "#ff0000",
      activePurple: "#6E42C9",
      activeBackground: "#F2F0F0",
      gray: "#a6a6a6",
      black: "#000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  mode: "jit",
};
