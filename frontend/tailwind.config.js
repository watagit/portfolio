module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Helvetica',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
