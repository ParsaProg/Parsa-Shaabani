/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { dark: "#FF7E3D", light: "#4D6BFE" },
        background: { dark: "#09090B", light: "#FFFFFF" },
      },
      animation: {
        "morph-radius": "morphRadius 8s ease-in-out infinite",
      },
      keyframes: {
        morphRadius: {
          "0%, 100%": {
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          },
          "25%": {
            borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%",
          },
          "50%": {
            borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%",
          },
          "75%": {
            borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%",
          },
        },
      },
    },
  },
  plugins: [],
};