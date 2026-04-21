/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#0f172a',
        'slate-800': '#1e293b',
        'amber-600': '#d97706',
        'orange-600': '#ea580c',
        'bronze-500': '#b45309',
      },
    },
  },
  plugins: [],
}
