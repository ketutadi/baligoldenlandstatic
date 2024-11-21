/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  prefix: 'tw-',
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '992px',
        'xl': '1440px',
      },
      colors: {
        'primary': '#b60204',
        'gold': '#f1cf64',
        'black-333': '#333333',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fira': ['Fira Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}