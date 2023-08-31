/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#14221d",
        Black: "#0c0c0c",
        Gray: "#1a1a1a",
        LightGray: "#252525",
        Blue: "#004bfd",
        White: "#fff",
      },
      fontFamily: {
        alegreya: ["Alegreya SC", "serif"],
      },
    },
  },
  plugins: [],
};
