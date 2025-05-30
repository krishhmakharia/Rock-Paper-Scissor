/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-', // prefix for all classes
  important: true,
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'], // Add hover variant if missing
    },
  },
  plugins: [],
}

