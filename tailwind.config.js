

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#915eff",
        primary_100:"#001124",
        primary_200:"#5b4785",
        primary_300:"#3f2952",
        secondary: "#aaa6c3",
        secondary2:"#454163",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/5297078.jpg')",
        "dark-bg": "url('/src/assets/darkbg1.jpg')",
        "dark-bg2": "linear-gradient(340deg, rgb(0 0 0), rgb(29 0 233 / 23%)), url('/src/assets/darkbg2.jpg')",
        //  "linear-gradient(153deg, rgb(60 60 64), rgb(45 44 47 / 71%)), url(/src/assets/doctor6.jpg)",
        "lightBg": " linear-gradient(340deg, rgb(0, 0, 0), rgba(29, 0, 233, 0.23)), url('/src/assets/lightbg.jpg')",
        darktext: "linear-gradient(340deg, rgb(0, 0, 0), rgba(29, 0, 233, 0.23))",
      },
    },
  },
  plugins: [],
};
