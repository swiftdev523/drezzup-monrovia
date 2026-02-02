/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        350: "87.5rem", // 1400px
      },
      maxWidth: {
        350: "87.5rem", // 1400px
      },
      height: {
        125: "31.25rem", // 500px
        150: "37.5rem", // 600px
        175: "43.75rem", // 700px
      },
      minHeight: {
        37.5: "9.375rem", // 150px
        45: "11.25rem", // 180px
      },
    },
  },
};
