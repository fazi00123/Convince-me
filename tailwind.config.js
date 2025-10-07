/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,php,css,js}'], // Scans all subfolders within 'build'
  theme: {
    extend: {
      fontFamily: {
        Degular: ['Degular', 'sans-serif'],
        //  CabinetGrotesk: ['CabinetGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}