/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/ddoexoinc/image/upload/v1683629902/store-g599c7eb74_1920_bvmqt5.jpg')",
        
      },
    },
  },
  plugins: [],
};
