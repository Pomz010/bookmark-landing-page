/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./dist/**/*.html"],
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["rubik", "Geneva", "Verdana", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

