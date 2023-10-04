/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Primary-Green": "#2E7D32",
      "Dark-Green": "#1B5E20",
      "Light-Green": "#4CAF50",
      "Accent-Green": "#8BC34A",
      Background: "#212121",
      "Text-Color": "#F8F8F8",
      "Secondary-Color": "#FFD600",
      "Accent-Color ": "#FFAB00",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Raleway: ["Raleway", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
