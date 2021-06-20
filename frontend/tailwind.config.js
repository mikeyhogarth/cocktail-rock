const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      teal: colors.teal,
      purple: colors.purple,
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui"],
      serif: ["Playfair Display", "ui-serif", "Georgia"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
