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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
