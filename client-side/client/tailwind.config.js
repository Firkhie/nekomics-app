/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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