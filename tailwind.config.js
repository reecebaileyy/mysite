/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        dropIn: 'dropIn 1s ease-in-out',
        dropIn2: 'dropIn 1.5s ease-in-out',
        dropIn3: 'dropIn 2s ease-in-out',
        dropIn4: 'dropIn 2.5s ease-in-out',
        appearFromBottom1: 'appearFromBottom 1s ease-in-out',
        appearFromBottom2: 'appearFromBottom 1.3s ease-in-out',
        appearFromBottom3: 'appearFromBottom 1.8s ease-in-out',
        appearFromBottom4: 'appearFromBottom 2.1s ease-in-out',
      },
      animationDelay: {
        '1': '0.1s',
        '2': '0.2s',
        '3': '0.3s',
        '4': '0.4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        dropIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        appearFromBottom: {
          '0%': { transform: 'translateY(40%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      colors: {
        'dark-blue': '#0a192f',
        'bright-green': '#64ffda',
        'light-gray': '#ccd6f6',
        'slate': '#8892b0',
      },
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.815rem',
    },
    screens: {
      'sm': { 'min': '320px', 'max': '639px' },     // Phones (portrait)
      'md': { 'min': '640px', 'max': '767px' },     // Phones (landscape) / Tablets (portrait)
      'lg': { 'min': '768px', 'max': '1023px' },    // Tablets (landscape) / Laptops
      'xl': { 'min': '1024px', 'max': '1279px' },   // Desktops (sm)
      '2xl': { 'min': '1280px', 'max': '1535px' },  // Desktops (md)
      '3xl': { 'min': '1536px', 'max': '10000px' },  // Desktops (lg)
      'nv': { 'min': '640', 'max': '1536' }                   // Wide Boi (lg)
    },
    fontFamily: {
      roboto: ['"Roboto"', 'sans-serif'],
      sans: ['"Sans"', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      animationDelay: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    }
  },
}


