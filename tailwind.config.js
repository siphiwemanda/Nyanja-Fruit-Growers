/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '489px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkPurple: '#2C2830',
        MattPurple: '#837D88',
        JustPurple: '#2D2641',
        LightBlue: '#96A9C6',
        Grey: '#E4E4E4',
        JustWhite: '#FFFFFF'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
