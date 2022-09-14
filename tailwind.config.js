module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'lg': '992px'
    },
    extend: {
      colors: {
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
        gradientStart: "hsl(6, 100%, 80%)",
        gradientStop: "hsl(335, 100%, 65%)"
      },
      translate: {
        center: "-50% 50%"
      }
    },
  },
  plugins: [],
}
