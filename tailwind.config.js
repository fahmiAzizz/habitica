/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'meditation': "url('/src/assets/bg-1.jpg')",
        'dark-sky': "url('/src/assets/bg-2.jpg')",
      }
    },
  },
  plugins: [],
}