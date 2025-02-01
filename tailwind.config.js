/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-small': '14rem'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        alumni: ['Alumni Sans Pinstripe', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}