/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily:{
      montserrat:["'Montserrat'", "sans-serif"],
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: "hsl(236, 72%, 79%)",
        secondary: "hsl(237, 63%, 64%)",
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
}
