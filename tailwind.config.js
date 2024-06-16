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
      backgroundImage: {
        herosection: "url(/assets/bgimageDark.webp)",
        faq: "url(/assets/faq-bg.webp)",
        title: "url(/assets/title.webp)",
      },
      fontSize: {
        clampheader: "clamp(24px, 8vw, 44px)",
        clamptitle: "clamp(20px, 6vw, 40px)",
        clamptextsm: "clamp(13px, 4vw, 16px)",
        clamptextmd: "clamp(22px, 4vw, 30px)",
      },
      colors: {
        primary: "#060F38",
        accent: {
          DEFAULT: "#FFD600",
          hover: "#11D1C8",
        },
        grn: {
          DEFAULT: "#11D1C8",
        },
        lgblue: {
          DEFAULT: "#11D1C8",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
