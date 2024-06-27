const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1434A4",
        "orange-secondary": "#FF5733",
      },
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
        Dosis: ["Dosis", ...defaultTheme.fontFamily.sans],
        Port: ["Port Lligat Sans", ...defaultTheme.fontFamily.sans],
        Inria: ["Inria", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
