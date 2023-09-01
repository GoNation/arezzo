const {
  primaryColor,
  secondaryColor,
  backgroundColor,
  darkColor,
  lightColor,
  tertiaryColor,
} = require('./config');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
    safelist: [
      'grid',
      'grid-cols-1',
      'grid-cols-2',
      'md:grid-cols-2',
      'md:gap-8',
      // get all py classes py-2, py-4, py-6, etc
      'py-24',
      'my-8',
      'md:my-8',
    ], // add classes here that you want to ensure aren't purged
  },

  theme: {
    extend: {
      screens: {},
      fontFamily: {
        sans: ['Playfair Display', 'sans-serif'],
        sansSerif: ['Lato', 'system-ui'],
        display: ['Playfair Display', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        wedding: ['', 'cursive'],
      },
      colors: {
        primary: '#683A1D',
        secondary: '#683A1D',
        dark: '#111',
        lighter: '#f7f7f7',
        background: '#f7f7f7',
        light: '#fff',
        tertiary: '#683A1D',
        forestGreen: '#4F7942',
        forestGreenLight: '#4F7942',
        forestGreenDark: '#3D6430',
      },
      gridTemplateColumns: {
        masonry: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
