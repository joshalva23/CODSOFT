/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: '#E7E7E7',
        blueOne : '#0077FF',
        shadowBox :'#D9D9D9',
        bgDarkColor:'#222222',
        shadowDarkBox:'#3D3D3D',
      },
      fontFamily:{
        inter:['"Inter"', 'sans-serif'],
        openSans : ['"Open Sans"', 'sans-serif'],
        raleway : ['"Raleway"', 'sans-serif'],
      }
    },
  },
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
  ],
}

