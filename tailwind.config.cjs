const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
}
