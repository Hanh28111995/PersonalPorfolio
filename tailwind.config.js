/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "500px", // Tạo mốc mới tên là xs
      },
    },
  },
  plugins: [],
};
