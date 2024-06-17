/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        noir: "rgb(var(--text) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        bluePink: "rgb(var(--bluePink) / <alpha-value>)",
        darkBlue: "rgb(var(--darkBlue) / <alpha-value>)",
        darkBlue_hard: "rgb(var(--darkPrim-hard) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        accents: {
          yellow: "rgb(var(--yellow) / <alpha-value>)",
          pink: "rgb(var(--pink) / <alpha-value>)",
        },
        darkPrim: "rgb(var(--darkPrim) / <alpha-value>)",
      },
      fontFamily: {
        nunito: ["Nunito"],
        openSans: ["Open Sans"],
      },
      spacing: {
        sm: "480px",
        md: "768px",
        lg: "967px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
