/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        coffee: "#4A2C2A",
        cocoa: "#6B3E2E",
        beige: "#F5EFEA"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};