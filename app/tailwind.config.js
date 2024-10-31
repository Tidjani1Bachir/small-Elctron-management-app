/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '130': '120px', // Or any unit you prefer (rem, em, etc.),
        
        
      }
    },
  },
  plugins: [],
}