/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "red": "#F64A4A",
          "orange": "#FB7C58",
          "yellow": "#F8CD65",
          "deep-purple": "#A638F6",
          "almost-white": "#E6E5EA",
          "grey": "#817D92",
          "dark-grey": "#2D2039",
          "very-dark-grey": "#18171F",
          "strong-green": "#4ABEA0"
        },
        maxWidth: {
          "xs": "375px",
          "sm": "540px"
        },
        fontSize: {
          "3xl": "2rem"
        },
        fontFamily: {
          'JetBrains Mono': ['JetBrains', 'monospace']
        }
      },
    },
    plugins: [],
}