/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "input-shadow": "0 1px 15px 1px rgba(0, 0, 0, 0.1)",
        "header-shadow": "0 2px 8px 0px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "black-gradient": "linear-gradient(to right, #161616 40%, black 190%)",
      },
      dropShadow: {
        glow: "0 0 1em hsl(26, 100%, 55%)",
      },
    },
  },
  plugins: [],
};
