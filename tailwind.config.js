/** @type {import('tailwindcss').Config} */

export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainpage: '#fffd92ff',
      },
    
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

// font-family: 'Martian Mono', monospace;
// font-family: 'Nanum Myeongjo', serif;