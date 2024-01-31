/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        sage: {
          100: "#E6EAE5",
          200: "#CDD6CB",
          300: "#B4C2B1",
          400: "#9CAE97",
          500: "#687464",
          600: "#343A32",
        },
        walnut: "#6D5B37",
        gold: "#AB8F59",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"], // Corrected here
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(66, 153, 225, 0.5)", // Custom glow effect
      },
      backgroundImage: {
        "forest-bg": "url('./images/forest.png')", // Add this line
      },
    },
  },
  plugins: [],
};
