/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        'lighter-red': 'hsl(15, 100%, 70%)',
        'soft-blue': 'hsl(195, 74%, 62%)',
        'light-red': 'hsl(348, 100%, 68%)',
        'lime-green': 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        'soft-orange': 'hsl(43, 84%, 65%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
      },
    },
  },
  plugins: [],
}
