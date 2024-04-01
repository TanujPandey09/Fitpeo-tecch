/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: 'Roboto',
        lato:'Nunito',
      },
      color:{
        hoverSidebar:"#4747a1"
      }
    },
  },
  plugins: [],
};
