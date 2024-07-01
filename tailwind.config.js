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
      xs: "480px",
      sm: "640px",
      md: "800px",
      lg: "960px",
      xl: "1300px",
      xxl: "2560px",
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
        hv: "url(/assets/Resources/Bg/hover1.webp)",
        bgFirst: "url(/assets/Resources/Bg/bg-1.webp)",
        bgSecond: "url(/assets/Resources/Bg/bg-2.webp)",
        bgThird: "url(/assets/Resources/Bg/bg-3.webp)",
        bgFourth: "url(/assets/Resources/Bg/bg-4.webp)",
        iconOne: "url(/assets/Resources/Bg/Icon/hoverlogo1.webp)",
      },
      fontSize: {
        clampheader: "clamp(24px, 4vw, 60px)",
        clamptitle: "clamp(20px, 3vw, 35px)",
        clamptextsm: "clamp(13px, 4vw, 16px)",
        clamptextsmm: "clamp(12px,3vw,26px)",
        clamptextmd: "clamp(22px, 4vw, 30px)",
        clamptextnav: "clamp(15px, 3vw, 30px)",
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
        cyn: {
          DEFAULT: "#11D1C8",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), (autoprefixer = {})],
};
