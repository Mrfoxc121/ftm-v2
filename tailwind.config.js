/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'kumbhSans': ['Kumbh Sans', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      
    },
  },
  plugins: [],
}

