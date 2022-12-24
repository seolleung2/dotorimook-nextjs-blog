/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Catamaran: ["Catamaran", "sans-serif"],
      },
      screens: {
        "4xl": "2040px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
