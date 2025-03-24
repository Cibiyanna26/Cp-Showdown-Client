/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // light: '#6D83F2',
          DEFAULT: "#A306BE",
          // dark: '#2A3E99',
        },
        secondary: {
          // light: "#F2A365",
          DEFAULT: "#4D065B",
          // dark: "#99542A",
        },
        tertiary: {
          // light: "#65F2A3",
          DEFAULT: "#F4CCE9",
          // dark: "#2A9954",
        },
        dark_purple: {
          DEFAULT: "#2A0231",
        },
        gold: {
          DEFAULT: "#FFCC4D",
        },
      },
      fontFamily: {
        sans: ["RocknRoll One"],
      },
    },
  },
  plugins: [],
};
