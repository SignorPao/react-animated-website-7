/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      secondary: "Open Sans",
    },
    container: {
      padding: {
        DEFAULT: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1560px",
    },
    extend: {
      colors: {
        primary: {
          100: "#A5FFCE",
          200: "#4AE290",
          300: "#25C870",
        },
        neutral: {
          100: "#FFF",
          200: "#DEDEE3",
          300: "#9797A1",
          400: "#595962",
          500: "#131316",
        },
        page: "#FCFCFF",
      },
      backgroundImage: {
        banner: "url('/src/assets/banner/bg.png')",
        faq: "url('/src/assets/faq/bg.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        custom: "90%",
      },
    },
  },
  plugins: [],
};
