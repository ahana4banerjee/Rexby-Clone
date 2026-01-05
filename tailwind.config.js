/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rexby: {
          dark: '#1A1A1A',
          gray: '#717171',
          light: '#F7F7F7',
        }
      }
    },
  },
  plugins: [],
}