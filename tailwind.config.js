/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#090A74',
      'secondary': '#068B9A',
      'light': '#78edfa',
      'orange': '#ED7F10',
      'dark': '#273444',
      'white': '#FFFFFF'
    },
    fontFamily: {
      primaryRegular: ['DMSans-Regular'],
      primaryMedium: ['DMSans-Medium'],
      primaryBold: ['DMSans-Bold'],
    },
    extend: {
      maxWidth: {
        '1280': '80rem',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

