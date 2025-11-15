/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // usa la clase .dark
  theme: {
    extend: {
      colors: {
        // usa tus variables CSS (permiten soporte alpha con / <alpha-value>)
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent1: "rgb(var(--accent-1) / <alpha-value>)",
        accent2: "rgb(var(--accent-2) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
      },
    },
  },
  plugins: [
    // descomenta e instala si los necesitas:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-animate'),
  ],
};
