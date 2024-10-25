/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#222222',  
      },
      fontFamily: {
        lexend: ['"Lexend Exa"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

