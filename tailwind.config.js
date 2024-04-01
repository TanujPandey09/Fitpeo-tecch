/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Roboto",'sans-serif'],
        lato:['Nunito','sans-serif'],
      },
      backgroundColor:{
        hoverSidebar:"#7978e9",
        hoverCard:"#7da0fa"
      }
    },
  },
  plugins: [],
};
