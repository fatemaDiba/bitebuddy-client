/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text": "#12100c",
        "light-background": "#faf8f5",
        "light-primary": "#ffa600",
        "light-secondary": "#ecc989",
        "light-accent": "#f6be55",
      },
    },
  },
  plugins: [require("daisyui")],
};
