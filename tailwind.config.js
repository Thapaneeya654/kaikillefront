/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#125175",

          secondary: "#3b4044",

          accent: "#002977",

          neutral: "#f4c567",

          "base-100": "#eef2f7",

          info: "#9aceea",

          success: "#115f30",

          warning: "#fff8bf",

          error: "#f54242",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
