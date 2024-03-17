/** @type {import('tailwindcss').Config} */
/*module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

module.exports = {
  content: [
    "./app/**/*.{tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
