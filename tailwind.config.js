module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens:{
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1028px',
    },
    extend: {
      fontSize:{
        'home':['5rem','6rem']
      },
      colors: {
        white: "#f5f5f5",
        black: "#423b36",
        yellow:{
          light:'#fffdf5',
        },
        blue:{
          100:'#3FD1FF',
          200:'#3FA3FF',
          300:'#3F75FF',
          400:'#3F52FF'
        },
        purple:{
          100:'#712FFF',
        }
      },
      boxShadow:{
        'light':'0 0px 12px 0px #d6d6d6',
      },
      backgroundImage:{
        'aurora':"url('./assets/img/bg.jpg')",
        'bubble':"url('./assets/img/bubble_bg.jpg')"
      }
    },
  },
  plugins: [],
};
