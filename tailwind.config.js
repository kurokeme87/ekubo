/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slussen: ['Slussen', 'sans-serif'],
        slussenExtended: ['SlussenExtended', 'sans-serif'],
        slussenExpanded: ['SlussenExpanded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}