/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'accueil-back': "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/fond.jpg');"
      },
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
        title: ['Merriweather'],
        para: ['Arial', 'Helvetica', 'sans-serif'],
        button: ['sans-serif']
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
      spacing: {
        108: '28rem',
      },
    },
  },
  plugins: [],
}

