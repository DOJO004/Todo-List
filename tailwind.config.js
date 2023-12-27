/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/main.tsx",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "inner":"inset 0 2px 4px 0 rgb(0 0 0 / 0.1)"
      }
    },
  },
  plugins: [],
}