/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1140px",
    },
    extend: {
      colors: {
        "clr-primary": "#903AFF",
        "clr-secondary": "#D434FE",
        "clr-bg-primary": "#140d27",
        "clr-tertiary": "#fe34b9",
      },
    },
  },
  plugins: [],
};
