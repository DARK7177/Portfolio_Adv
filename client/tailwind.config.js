module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['"Roboto Slab"', 'serif'],
      },
      backgroundImage: {
        "hero-section": "url('/public/Background.png')",
      },
    },
  },
  plugins: [],
}
