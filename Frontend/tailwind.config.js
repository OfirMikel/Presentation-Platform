/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '750px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'light-red': 'rgb(213,0,42)',

      },
      dropShadow: {
        '5xl': [
          '0 50px 50px rgba(0, 0, 0, 0.25)',
        ]
      }
    },
  },
  plugins: [],
}