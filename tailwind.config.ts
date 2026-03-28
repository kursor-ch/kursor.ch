import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: "#D97706",
          600: "#D97706",
          hover: "#B45309",
          light: "#FEF3C7",
          glow: "rgba(217,119,6,0.15)",
        },
        creme: "#FDFAF5",
        vert: "#15803D",
        orange: "#EA580C",
        rouge: "#DC2626",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
