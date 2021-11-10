module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "physicallayer":"#e9988a",
        "dataLinkLayer":"#e9c189",
        "network":"#eddc9c",
        "transport":"#e7ed9c;",
        "session":"#cce67d",
        "presentation":"#d8ec9b",
        "application":"#e4f2b9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
