/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {
    animation: ["motion-safe"],
  },
  //mode: "jit",
  content: [
    "./pages/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/modules/*.{js,jsx,ts,tsx}",
    "./src/modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveRight: {
          "0%": { transform: "translateX(-3%)" },
          "100%": { transform: "translateX(0%)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(+3%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "fade-and-moveRight": "fade 0.3s ease-in-out, moveRight 0.5s ease-in-out",
        "fade-and-moveLeft": "fade 0.3s ease-in-out, moveLeft 0.4s ease-in-out",
      },
      spacing: {
        25: "6.25rem",
        128: "32rem",
        144: "36rem",
      },
      colors: {
        transparent: {
          full: "transparent",
          light: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
        shade: {
          100: "#1D1D1D",
          80: "#505050",
          60: "#767676",
          40: "#BEBEBE",
          20: "#F4F4F4",
          0: "#FFFFFF",
        },
        primary: {
          100: "#004D42",
          80: "#0A4945",
          60: "#8DE8C4",
          40: "#BEBEBE",
          20: "#F4F4F4",
          0: "#EDFFF8",
        },
        secondary: {
          attention: "#1D1D1D",
          pulse: "#505050",
          vapor: "#8DE8C4",
          lumen: "#BEBEBE",
          stream: "#F4F4F4",
          plain: "#EDF4FF",
        },
        btn: {
          text: "#fff",
          bg: "#036556",
          hover: "#094945",
        },
      },
      screens: {
        md: "769px",
        // => @media (min-width: 769px) { ... }

        lg: "1201px",
        // => @media (min-width: 1024px) { ... }

        xl: "2560px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
