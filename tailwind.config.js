import colors from 'tailwindcss/colors'

// Remove deprecated color aliases to avoid warnings
const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...safeColors } = colors

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Define colors at top level (not extend) to fully replace native teal/yellow/orange
    colors: {
      ...safeColors,
      teal:            '#025961',
      coral:           '#ea573d',
      orange:          '#ea573d',
      beige:           '#f7fafa',
      'blue-dark':     '#025961',
      yellow:          '#f8a009',
      'green-light':   '#b3e0dc',
      'green-dark':    '#025961',
      salmon:          '#f4a99a',
      'yellow-light':  '#fde5a0',
      mint:            '#d4eeeb',
      'blue-gray':     '#a8d5d1',
      'gray-light':    '#e5e7eb',
    },
    extend: {
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        sticker: ['Bricolage Grotesque', 'sans-serif'],
        accent:  ['Bricolage Grotesque', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
