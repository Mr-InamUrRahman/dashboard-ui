/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:{
          dark: "#19408A",
          light: "#1D499E",
          100: "#F4F7FD",
        },
        nav:{
          active: "rgba(196, 196, 196, 0.5)",
        },
        color:{
          dark: "#24282F",
          light: "#474859",
          200: "#848AA9",
          100: "#727D92",
        },
        boxShadow: {
          'xl': '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
          'lg': '0px 4px 30px 0px rgba(0, 0, 0, 0.04)',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        6: '6px',
      }
    },
  },
  plugins: [],
}

