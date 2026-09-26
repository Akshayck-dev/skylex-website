/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Brique-style light + deep-teal system */
        ink: "#132A33",
        brand: "#04566D",
        branddark: "#0A3542",
        branddeep: "#0B2129",
        teal: "#048A93",
        tealbright: "#0EB8C4",
        mist: "#F4F7FA",
        fog: "#EDF1F4",
        smoke: "#787878",
        /* legacy tokens — remapped, kept for compatibility */
        coal: "#F4F7FA",
        gold: "#04566D",
        goldsoft: "#0EB8C4",
        golddeep: "#048A93",
        cream: "#FFFFFF",
        sand: "#EDF1F4",
        charcoal: "#132A33",
        beige: "#EDF1F4",
        stone: "#787878",
        clay: "#04566D",
      },
      fontFamily: {
        display: ['"Forum"', "Georgia", "serif"],
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
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
