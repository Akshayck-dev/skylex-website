/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Arcadia-style premium system */
        ink: "#14110B",
        coal: "#1E1A12",
        gold: "#C9A24B",
        goldsoft: "#E3C878",
        golddeep: "#9A7A33",
        cream: "#FAF7F0",
        sand: "#F0E9D8",
        /* legacy tokens (kept for compatibility) */
        charcoal: "#171512",
        beige: "#ECE6D8",
        stone: "#8A8478",
        clay: "#A2592F",
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
