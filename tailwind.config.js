// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
      white: "#f4f5f9",
      activePurple: "#6E42C9",
      activeBackground: "#F2F0F0"
    },
    width: {
      input: 360,
      button: 175,
    },
    height: {
      input: 54
    }
  },
  plugins: [],
};
