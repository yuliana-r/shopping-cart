/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black': '#2E2E2E',
      'red': '#A70000',
      'gray': '#808080',
      'silver': '#C0C0C0',
      'blue': '#001F3F'
    },
    fontFamily: {
      'display': ['Montserrat', 'sans-serif'],
      'motto': ['Sacramento', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

