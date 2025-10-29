/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#7755FF',
        'accent-pink': '#FF54B0',
        'accent-yellow': '#FFE978'
      }
    }
  },
  plugins: []
}
