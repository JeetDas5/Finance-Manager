/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    
    extend: {
      colors:{
        'blackish': "#1c1c1c",
        'greyish': '#262626',
        'greenish': '#ccff31',
        'light-black': "#191919"
      }
    },
  },
  plugins: [],
}