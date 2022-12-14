/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean': '#15A1A9',
        'light': 'rgba(255, 255, 255, 0.7)',
      },
      flex: {
        '1/3': '1 1 33%',
      } 
    },
  },
  plugins: [],
}
