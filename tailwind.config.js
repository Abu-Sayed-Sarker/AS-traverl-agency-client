/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'text': '#151a07',
        'background': '#fcfdf9',
        'primary': '#a2c942',
        'secondary': '#95e1c1',
        'accent': '#66d2d3',
      },
    },
  },
  plugins: [daisyui],
}

