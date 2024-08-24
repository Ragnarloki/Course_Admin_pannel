/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgcolor':'#F5CF6B',
        'dark-blue':'#111E28',
        'light-yellow':'#E6B63C',
        'white':'#FFFFFF',
      },
    },
  },
  plugins: [],
}

