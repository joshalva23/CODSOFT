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

