/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clrBluePry: "#2F58CD",
        clrDark: "#16213E",
        clrLight: "#DFFFD8",
        clrGreyPry: "#C7BCA1",
        clrGrySec: "#D8D8D8",
        clrDanger: "#ff0000",
      },
    },
  },
  plugins: [],
};
