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
        main:'#97A6B9',
        white: "#fdfdfd",
        black: "#423b36",
        textMain:"#637287",
        gray:{
          100:'cfcfcf',
        },
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
        },
        green:{
          code:'#276e2c'
        }
      },
      boxShadow:{
        'light':'0 0px 12px 0px #d6d6d6',
        'custom':'4px 4px 0px 0px #6b6b6b'
      },
    },
  },
  plugins: [],
};
