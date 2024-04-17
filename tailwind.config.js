/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#FBF2FF',
        lightBlack: '#242424',
        redder: '#C02239',
        lightRed: '#e0344d',
      },
      contrast: {
        30: '.3',
      },
      fontFamily: {
        title: ['Merriweather']
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '100%': { transform: 'scaleY(1)'},
        },
        'close-menu': {
          '0%': { transform: 'scaleY(1)'},
          '100%': { transform: 'scaleY(0)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.4s ease-out forwards',
        'close-menu': 'close-menu 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

