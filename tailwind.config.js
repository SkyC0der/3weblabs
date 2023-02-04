/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens:{
      
      '3xl': {'max': '4250px'},

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
   
  },
  extend: {
     fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
     backgroundImage: {
        'top-banner': "url('/assets/images/bg/Banner.png')"
      },
      backgroundColor: {
      'primary': '#0F43F9',
      'white': '#FFFFFF',
      'dark': '#182F43',
      'white-2':'rgba(255, 255, 255, 0.3)',
      'gray':'#EBF2F8',
      'blue-2': '#9FB4FD',
      },
       colors: {
      'primary': '#0F43F9',
      'white': '#FFFFFF',
      'dark': '#182F43',
      'white-2':'rgba(255, 255, 255, 0.3)',
      'gray':'#EBF2F8',
      'blue-2': '#9FB4FD', 
    },
  },
  plugins: [],
}
