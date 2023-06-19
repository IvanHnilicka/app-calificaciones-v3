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
          light: '#99afff',
          dark: '#404040',
          pink: '#f8d3df',
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
        textColor2: {
          light: '#4d73ff',
          dark: '#ffffff',
          pink: '#ed92af'
        },
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        show: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        float: {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        shrink: 'shrink 0.1s',
        show: 'show 1s',
        load: 'show 0.5s',
        float: 'float 0.75s',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|background|darkBackground|textColor|textColor2)-(light|dark|pink)/,
    },
  ]
}

