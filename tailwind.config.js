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
        mobile:'320px',
        mobile1:'375px',
        mobile2:'425px',
        vsm: '500px',
        ssxl:'910px',
        laptop1:'1440px',
        laptop2:'1512px',
        sxl: '1700px',
      
        mxl:'2200px',
        bxl:'2560px',
        // hsm:'827px',
      }
    },
  },
  
  plugins: [require('tailwind-scrollbar-hide')],
}

