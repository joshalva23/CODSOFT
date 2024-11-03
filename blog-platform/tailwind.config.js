/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        defYellow:'#FFD34F',
        defYellow2:'#FFD34F',
        defOrange:'#FF6200',
      },
      fontFamily:{
        instrumentSans:['"Instrument Sans"', 'serif'],
        notoSans:['"Noto Sans"', 'serif'],
        inclusiveSans:['"Inclusive Sans"', 'serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

