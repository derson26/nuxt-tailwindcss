/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'xs': '576px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        vuejs: '#26ab1d',
        customcolor: {
          100: '#194d33',
        }
      }
    },
  },
  plugins: [],
}

