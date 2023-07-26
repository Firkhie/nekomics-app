/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '250px', 'max': '639px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('./plugins/openVariant')
  ],
}

