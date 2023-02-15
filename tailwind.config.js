/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {}
    },
    extend: {
      colors: {
        "color-g": "#59c378",
        "color-g-h": "#57B665",
        "color-w-h": "#bcbcbc",
        "color-y": "#ffe600",
        "color-r": "#DD5846",
        "color-b": "#0c7fb4",
        "color-db":"#075173",
        "color-dd":"#161515"
      },
      screens: {
        res_menu: { max: "990px" },
        com: { min: "990px" }
      }
    },
  },
  plugins: [],
}
