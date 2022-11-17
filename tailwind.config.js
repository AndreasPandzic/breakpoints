/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
