/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  darkMode: ["class", "[dark-mode:'darkMode']"],
  plugins: [],
  prefix: "tw-",
};
