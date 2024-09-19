/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          "sm": "20px"
        }
      },
      spacing: {
        "3.5": "14px",
        "4.5": "18px",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
    colors: {
      "primary": "#083C5A",
      "secondary": "#4CB648",
      "yellow": "#FCC72C",
      "red": "#FF0000",
      "white": "#E4F4FD",
      "gray": "#C2C2C2",
      "transparent": "transparent"
    },
    fontFamily: {
      "Estedad-Black": "Estedad-Black",
      "Estedad-ExtraLight": "Estedad-ExtraLight",
      "Estedad-Regular": "Estedad-Regular",
    },
    screens: {
      "xs": "380px",
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    }
  },
  plugins: [],
}

