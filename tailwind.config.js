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
      screens:{
        vsm: '500px',
        ssxl:'910px',
        sxl: '1700px',
        mxl:'2200px',
        bxl:'2560px'
        
      }
    },
  },
  
  plugins: [require('tailwind-scrollbar-hide')],
}

