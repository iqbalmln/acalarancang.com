module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        1.25: '20px'
      },
      fontFamily: {
        sitka: ['sitka']
      },
      fontSize: {
        6.5: '64px',
        10: '10px'
      },
      spacing: {
        75: '300px',
        125: '500px'
      },
      zIndex: {
        '-10': '-10'
      }
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    },
  },
  plugins: [],
}
