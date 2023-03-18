/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white85': 'var(--white85)',
        'white55': 'var(--white55)',
        'black85': 'var(--black85)',
        'black55': 'var(--black55)',
        'bg-light': '#E1E1E1',
        'bg-dark': 'black',
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      screens: {
        '3xl': '1600px',
        '4xl':'1800px',
        '5xl':'2200px '
      },


    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.25rem',
        sm: '5rem',
        md:'1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      }



    }
  },
  plugins: [],
}
