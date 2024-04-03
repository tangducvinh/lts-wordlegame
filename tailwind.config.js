module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },
    extend: {
      animation: {
        flip: 'flip 1s linear'
      },
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateX(0)'
          },
          '100%': {
            transform: 'rotateX(360deg)'
          }
        }
      }


    },
  },
  
  plugins: [],
}