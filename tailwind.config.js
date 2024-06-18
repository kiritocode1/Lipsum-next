/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223631",
        secondary: "#2a4b3f",
        accent: "#aee0a5",
        textPrimary: "#ffffff",
        textSecondary: "#223631",
      },
    },
  },
  plugins: [],
};
