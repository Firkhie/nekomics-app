/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '250px', 'max': '639px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('./src/plugins/openVariant')
  ],
}

