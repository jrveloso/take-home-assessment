/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.{html,js}",
    "./src/*.{html,js}",
    "./src/components/*.{html,js}",
    "./public/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
