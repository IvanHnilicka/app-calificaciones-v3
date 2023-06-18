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
        secondary: {
          light: '#1430CC',
          dark: '#1A1A1A',
          pink: '#FFDFEE',
        },
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.92)' },
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
      pattern: /(bg|text|border)-(primary|secondary)-(light|dark|pink)/,
    },
  ]
}

