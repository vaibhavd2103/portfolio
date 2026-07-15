import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  "#f0f7f1",
          100: "#dceede",
          200: "#b5d9bb",
          300: "#8dbf96",
          400: "#6a9e73",
          500: "#4d7a55",
          600: "#3a5a40",
          700: "#2e4232",
          800: "#243328",
          900: "#1a2b1d",
        },
        white:       "#ffffff",
        black:       "#000000",
        transparent: "transparent",
      },
      fontFamily: {
        sans:    ["JetBrains Mono", "ui-monospace", "monospace"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up":  "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":  "fadeIn 0.8s ease forwards",
        float:      "float 6s ease-in-out infinite",
        "spin-slow":"spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;