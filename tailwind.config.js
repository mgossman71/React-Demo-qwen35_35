/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ffl-dark': '#1a1a2e',
        'ffl-primary': '#e63946',
        'ffl-gold': '#c9a227',
      },
    },
  },
  plugins: [],
}
