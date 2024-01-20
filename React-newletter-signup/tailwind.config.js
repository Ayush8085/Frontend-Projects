/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        "clr-red": "var(--clr-red)",
        "clr-dark-slate-grey": "var(--clr-dark-slate-grey)",
        "clr-charcoal-grey": "var(--clr-charcoal-grey)",
        "clr-grey": "var(--clr-grey)",
        "clr-white": "var(--clr-white)"
      },
    },
  },
  plugins: [],
}

