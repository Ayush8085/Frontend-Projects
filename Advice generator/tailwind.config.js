/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ['Manrope', "sans-serif"]
    },
    colors: {
      "clr-primary-cyan": "var(--clr-primary-cyan)",
      "clr-primary-green": "var(--clr-primary-green)",
      "clr-grayish-blue": "var(--clr-grayish-blue)",
      "clr-dark-grayish-blue": "var(--clr-dark-grayish-blue)",
      "clr-dark-blue": "var(clr-dark-blue)"
    },
    boxShadow: {
      "custom-shadow": "custom-shadow"
    }
  },
  plugins: [],
}

