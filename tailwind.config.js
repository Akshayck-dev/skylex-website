/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#151515",
        cream: "#F7F6F2",
        beige: "#E9E4DA",
        stone: "#8A8780",
        clay: "#B0512C",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        shell: "1400px",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
