/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/ddoexoinc/image/upload/v1683954904/clothing-ga6f2e86a3_1920_xaln8i.jpg')",
        
      },
    },
  },
  plugins: [],
};
