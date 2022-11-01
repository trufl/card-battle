/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.handlebars", "./public/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      }
    },
  },
  plugins: [],
}

