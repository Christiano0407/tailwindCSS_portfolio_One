/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: `class`,
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      textColor: {
        primary: `#CC2D4A`,
        secondary: `#8FA206`,
        third: `#61AEC0`,
      },
      colors: {
        transparent: 'transparent',
        primary: `#CC2D4A`,
        secondary: `#8FA206`,
        third: `#61AEC0`,
        white: `#FFFFFF`,
        black: `#000000`,
        darkOne: `#111111`,
        darkPlus: `#333333`,
      },
      fontSize: {
        sm: ['12px', '14px'],
        medium: [`14px`, `20px`],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      screens: {
        // => @media (max-width: 320px) { ... } / 320px
        mobBase: { max: '320px' },
        // => @media (max-width: 639px) { ... } / 320px
        mobPlus: { max: '639px' },

        sm: { min: '640px' },
        // => @media (min-width: 640px) { ... } / 320px
        md: { min: '768px' },
        // => @media (min-width: 768px) { ... }
        lg: { min: '1024px' },
        // => @media (min-width: 1024px) { ... }
        xl: { min: '1280px' },
        // => @media (min-width: 1280px) { ... }
        '2xl': { min: '1536px' },
        // => @media (min-width: 1536px) { ... }
        tablet: { min: '640px' },
        // => @media (min-width: 640px) { ... }
        laptop: { min: '1024px' },
        // => @media (min-width: 1024px) { ... }
        desktop: { min: '1280px' },
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'desktop-one': "url('./src/img/imgDesk.jpg')",
        'mobile-one': "url('./src/img/imgMobile.jpg')",
        man: "url('./src/img/man.png')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
