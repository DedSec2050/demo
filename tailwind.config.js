/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "800px",
      lg: "960px",
      xl: "1100px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      dropShadow: {
        xl: "0px 1px 5px rgba(250, 204, 0, 1)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        blue: "0px 1px 5px rgba(41, 158, 245, 0.8)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        herosection: "url(/assets/bgimageDark.webp)",
        faq: "url(/assets/faq-bg.webp)",
        title: "url(/assets/title.webp)",
      },
      fontSize: {
        clampheader: "clamp(24px, 6vw, 60px)",
        clamptitle: "clamp(20px, 30px, 40px)",
        clamptextsm: "clamp(13px, 4vw, 16px)",
        clamptextmd: "clamp(22px, 4vw, 30px)",
      },
      colors: {
        primary: "#060F38",
        accent: {
          DEFAULT: "#FFD600",
          hover: "#11D1C8",
        },
        elevated: {
          DEFAULT: "#021833",
        },
        grn: {
          DEFAULT: "#11D1C8",
        },
        lgblue: {
          DEFAULT: "#11D1C8",
        },
        footer: {
          DEFAULT: "#4B4B4B",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), (autoprefixer = {})],
};
