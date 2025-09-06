/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // فعال کردن darkMode با کلاس
  theme: {
    extend: {
      colors: {
        primary: { dark: "#FF7E3D", light: "#4D6BFE" },
        background: { dark: "#09090B", light: "#FFFFFF" },
      },
    },
  },
  plugins: [],
};
