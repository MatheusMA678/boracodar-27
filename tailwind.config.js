/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Outfit, sans-serif"
      },
      fontSize: {
        '4.5xl': "2.5rem"
      },
      backgroundImage: {
        app: "url('./assets/bg.png')"
      },
      colors: {
        app: {
          gray: "#D6D6F2",
          lightGray: "#E2E2F5",
          purple: "#BF7BFB",
          blueLight: "#212187",
          blue: "#151557",
          blueDark: "#000013"
        }
      },

      keyframes: {
        fadeIn: {
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards'
      }
    },
  },
  plugins: [],
}

