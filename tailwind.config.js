/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pay: ["var(--font-pay)"],
        neor: ["var(--font-neor)"],
      },
    },
  },
  plugins: [],
}
