/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "interface": ["Montserrat", "sans-serif"],
      "display": ["Rubik Doodle Shadow", "system-ui"],
    },
    extend: {
      backgroundImage: {
        'lofi-gradient': "linear-gradient(to right bottom, #1e1439, #642a55, #a9475e, #de765b)",
        'noise-pattern': "url('./nnnoise.svg')",
      }
    }
  },
  plugins: [],
}