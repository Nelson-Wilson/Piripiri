import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#050305",
          800: "#0a0708",
          700: "#110b0d",
          600: "#180f11",
        },
        flame: {
          600: "#7a0b10",
          500: "#d4141c",
          400: "#e11d1d",
          300: "#ff5a2b",
        },
        ember: {
          500: "#ff7a18",
          400: "#ff9a3c",
          300: "#ffbb63",
        },
        gold: {
          500: "#f5b400",
          400: "#ffc61a",
          300: "#ffd84d",
          200: "#ffe9bf",
        },
        cream: "#f6ece0",
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
