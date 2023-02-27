/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "400px" },
      sc: "400px",
      // => @media (min-width: 576px) { ... }

      md: { max: "1000px" },
      // => @media (min-width: 960px) { ... }

      mm: { max: "750px" },
      mc: "750px",

      lg: { max: "1440px" },
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      epilog: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        "Almost-White": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)",
      },
    },
    plugins: [],
  },
  plugins: [],
};
