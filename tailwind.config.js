/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:          '#E67A52',
        beige:           '#F3F1E7',
        'blue-dark':     '#102C40',
        yellow:          '#F2DA7E',
        'green-light':   '#AFD9A9',
        'green-dark':    '#0B6863',
        salmon:          '#F0B6AA',
        'yellow-light':  '#F8EBBA',
        mint:            '#D1E9DC',
        'blue-gray':     '#B2CFCE',
        'gray-light':    '#C9D4DC',
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
