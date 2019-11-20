/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "Helvetica", "Arial", "sans-serif"],
        display: ["Lilita One", "Arial", "Helvetica"]
      },
      fontSize: {
        "65-xxl": "65%",
        "7/2": "3.5rem"
      },
      inset: {
        "0": 0,
        "2": "2%",
        "5": "5%",
        "12": "12%",
        "13": "13%",
        "14": "14%",
        "15": "15%",
        "22": "22%",
        "40": "40%",
        "50": "50%",
        "52": "52.2%",
        "47": "calc(47vh - 16.8rem / 2)",
        "18": "calc(18vh - 16.8rem / 2)",
        "60": "60%",
        "65": "65%",
        "90": "90%",
        "-100": "-100%"
      },
      opacity: {
        "10": ".1"
      },
      stroke: theme => ({
        white: "#FFF"
      }),
      spacing: {
        "150": "150rem",
        "250": "250rem",
        "9/2": "4.5vh",
        "13/2": "6.5vh",
        "15/2": "7.5vh",
        "screen-65": "65vh",
        "30": "30rem",
        "50": "50%",
        "85": "85%",
        "90": "90%"
      }
    }
  },
  variants: {},
  plugins: []
};
