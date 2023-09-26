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
          pink: '#f0a8bf',
          purple: '#a23bc4',
        },
        secondary: {
          light: '#99afff',
          dark: '#404040',
          pink: '#f5c5d4',
          purple: '#be76d6',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1B1B1B',
          pink: '#FFFFFF',
          purple: '#FFFFFF'
        },
        darkBackground: {
          light: '#FFFFFF',
          dark: '#9A9A9A',
          pink: '#FFFFFF',
          purple: '#FFFFFF'
        },
        transBackground: {
          light: '#FFFFFF',
          dark: '#333333',
          pink: '#FFFFFF',
          purple: '#FFFFFF'
        },
        textColor: {
          light: '#000000',
          dark: '#FFFFFF',
          pink: '#000000',
          purple: '#000000'
        },
        textColor2: {
          light: '#4d73ff',
          dark: '#ffffff',
          pink: '#ed92af',
          purple: '#9235b1'
        },
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.92)' },
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
        load: 'show 0.3s',
        float: 'float 0.5s',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|decoration)-(primary|secondary|background|darkBackground|transBackground|textColor|textColor2)-(light|dark|pink|purple)/,
    },
  ]
}

