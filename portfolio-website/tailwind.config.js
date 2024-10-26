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
        orangeOne : '#FF6C22',
      },
      fontFamily: {
        lexend: ['"Lexend Exa"', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
        dotGothic16 : ['"DotGothic16"', 'sans-serif'],
        
      },
    },
  },
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
  ],
}

