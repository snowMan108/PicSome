module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navBarColor: "#e08b84",
        borderNavColor: "#b5b0b0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
