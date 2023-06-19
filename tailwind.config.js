/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7A96FF',
          dark: '#343434',
          pink: '#F5C5D4',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1B1B1B',
          pink: '#FFFFFF'
        },
        darkBackground: {
          light: '#FFFFFF',
          dark: '#9A9A9A',
          pink: '#FFFFFF'
        },
        textColor: {
          light: '#000000',
          dark: '#FFFFFF',
          pink: '#000000'
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
      pattern: /(bg|text|border)-(primary|background|darkBackground|textColor)-(light|dark|pink)/,
    },
  ]
}

