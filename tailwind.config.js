/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { "max-height": "0rem" },
          "100%": { "max-height": "fit-content" },
        },
        shrink: {
          "0%": { "max-height": "fit-content" },
          "100%": { "max-height": "0rem" },
        },
        float: {
          "0%": { bottom: "5rem" },

          "100%": { bottom: "5.5rem" },
        },
      },
      animation: {
        grow: "grow 200ms ease-in forwards",
        shrink: "shrink 200ms ease-out forwards",
        float: "float 500ms ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
