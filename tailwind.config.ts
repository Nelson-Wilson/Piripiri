import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#c8102e",
          800: "#a60d26",
          700: "#8f0b22",
          600: "#72091d",
        },
        flame: {
          600: "#8f0b22",
          500: "#c8102e",
          400: "#df2842",
          300: "#f05a67",
        },
        ember: {
          500: "#c8102e",
          400: "#df2842",
          300: "#f05a67",
        },
        gold: {
          500: "#e6a900",
          400: "#ffcc00",
          300: "#ffda35",
          200: "#ffe36e",
        },
        cream: "#ffffff",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        condensed: ["Bebas Neue", "Anton", "sans-serif"],
        script: ["Caveat", "cursive"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.42em",
      },
      boxShadow: {
        ember: "0 30px 90px -30px rgba(255,90,20,0.55)",
        gold: "0 18px 60px -20px rgba(242,189,91,0.45)",
        card: "0 40px 80px -40px rgba(0,0,0,0.95)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(100deg,#8a5a12 0%,#e8a33d 22%,#ffe9bf 46%,#f2bd5b 62%,#8a5a12 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
