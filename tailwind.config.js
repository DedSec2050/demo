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
      xlg: "1585px",
      xl: "1300px",
      xlls: "1800px",
      xll: "1920px",
      xxl: "2560px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      dropShadow: {
        green: "2.5px 1px 2px #008080",
        pink: "2.5px 1px 2px #FF00FF",
        cyan: "2.5px 1px 2px #00FFFF",
        red: "2.5px 1px 2px #Ff0000",

        hero: "2.5px 1px 2px #FFD600",
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
        herosection: "url(/assets/bgmotion.gif)",
        faq: "url(/assets/faq-bg.webp)",
        title: "url(/assets/title.webp)",
        hv: "url(/assets/Resources/Bg/hover1.webp)",
        bgFirst: "url(/assets/Resources/Bg/bg-1.webp)",
        bgSecond: "url(/assets/Resources/Bg/bg-2.webp)",
        bgThird: "url(/assets/Resources/Bg/bg-3.webp)",
        bgFourth: "url(/assets/Resources/Bg/bg-4.webp)",
        iconOne: "url(/assets/Resources/Bg/Icon/hoverlogo1.webp)",
        banner: "url(/assets/Banner/banner.webp)",
      },
      fontSize: {
        clampheader: "clamp(24px, 4vw, 60px)",
        clamptitle: "clamp(20px, 3vw, 35px)",
        clamptextsm: "clamp(13px, 4vw, 20px)",
        clamptextsmm: "clamp(12px,3vw,26px)",
        clamptextmd: "clamp(22px, 4vw, 30px)",
        clamptextnav: "clamp(15px, 3vw, 30px)",
      },
      colors: {
        primary: "#060F38",
        accent: {
          DEFAULT: "#f3ad2a",
          hover: "#11D1C8",
        },
        resources: {
          DEFAULT: "#C8FE05",
        },
        resourceshov: {
          DEFAULT: "#C8FF04",
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
        matteblue: {
          DEFAULT: "#26355D",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    (autoprefixer = {}),
  ],
};
