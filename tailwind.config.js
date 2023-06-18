/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          light: '#1430CC',
          dark: '#1A1A1A',
          pink: '#ff2491',
        },
        lightBackground: {
          light: '#4763ff',
          dark: '#343434',
          pink: '#FFBDFF',
        },
        textColor: {
          light: '#010101',
          dark: '#FFFFFF',
          pink: '#FFFFFF'
        },
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        shrink: 'shrink 0.1s'
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: 
        /(bg|text|border)-(darkBackground-light|darkBackground-dark|darkBackground-pink|lightBackground-light|lightBackground-dark|lightBackground-pink|textColor-light|textColor-dark|textColor-pink)/,
    }
  ]
}

