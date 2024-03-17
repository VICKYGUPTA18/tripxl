/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#00050D", brand2: "#191E25" },
    },
  },
  plugins: [],
};
