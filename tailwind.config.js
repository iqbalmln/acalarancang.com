module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sitka: ['sitka']
      },
      fontSize: {
        6.5: '64px'
      },
      zIndex: {
        '-10': '-10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
