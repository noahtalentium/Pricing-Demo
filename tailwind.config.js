/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#7001e1",
        gainsboro: "#e7e7e7",
        black: "#000",
        ghostwhite: "#f9f6ff",
        lavender: "#f3e8ff",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "67xl": "86px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      sm: "14px",
      "31xl": "50px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
