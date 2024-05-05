/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'accueil-back': "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/fond.jpg');",
        'contact-back': "linear-gradient(to bottom, rgba(228, 167, 78, 1), rgba(192, 34, 57, 1));",
      },
      borderRadius: {
        '4xl': '3.5rem',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        left: '-12px 12px 2px 1px rgb(0 0 0 / 0.2)',
        down: '0 12px 2px 1px rgb(0 0 0 / 0.2)',
        right: '12px 12px 2px 1px rgb(0 0 0 / 0.2)',
        center: '0px 0px 30px 5px rgba(0,0,0,0.78)',
        card: '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        lightGray: '#FFFFFF',
        badGray: '#FCF5F7',
        lightBlack: '#242424',
        darkGray: '#2E2D2C',
        redder: '#C02239',
        lightRed: '#E0344D',
        orange: '#E4A74E',
        darkBlue: '#03093E',
        beige: '#D9CDBF',
        lightBeige: '#F2E3D5',
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
        'blur-on': {
          '0%': { filter: 'blur(0)'},
          '100%': { filter: 'blur(4px)'},
        },
        'blur-off': {
          '0%': { filter: 'blur(4px)'},
          '100%': { filter: 'blur(0)'},
        },
        'zoom-in': {
          '0%': { transform: 'scale(1, 1)'},
          '100%': { transform: 'scale(1.2, 1.2)'},
        },
        'zoom-out': {
          '0%': { transform: 'scale(1.2, 1.2)'},
          '100%': { transform: 'scale(1, 1)'},
        },
        'zoom-in-plus': {
          '0%': { transform: 'scale(1, 1)'},
          '100%': { transform: 'scale(2, 2)'},
        },
        'zoom-out-plus': {
          '0%': { transform: 'scale(2, 2)'},
          '100%': { transform: 'scale(1, 1)'},
        },
        'border-on': {
          '0%': { borderColor: 'transparent'},
          '100%': { borderColor: 'white'},
        },
        'border-off': {
          '0%': { borderColor: 'white' },
          '100%': { borderColor: 'transparent' },
        },
        'drop-down': {
          from: { top: '-300px', opacity: '0' },
          to: { top: 0, opacity: '1' }
        },
      },
      animation: {
        'open-menu': 'open-menu 0.4s ease-out forwards',
        'close-menu': 'close-menu 0.4s ease-out forwards',
        'blur-on': 'blur-on 0.4s ease-out forwards',
        'blur-off': 'blur-off 0.4s ease-out forwards',
        'zoom-in': 'zoom-in 0.4s ease forwards',
        'zoom-out': 'zoom-out 0.4s ease forwards',
        'zoom-in-plus': 'zoom-in-plus 0.4s ease forwards',
        'zoom-out-plus': 'zoom-out-plus 0.4s ease forwards',
        'border-on': 'border-on 0.4s ease-out forwards',
        'border-off': 'border-off 0.4s ease-out forwards',
        'drop-down': 'drop-down 0.6s ease-out forwards',
      },
      spacing: {
        88: '340px',
        108: '28rem',
        200: '50rem',
        300: '1024px',
      },
    },
  },
  plugins: [],
}

