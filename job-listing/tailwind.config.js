/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'desaturated-cyan': 'hsl(180, 29%, 50%)',
        'light-cyan' : 'hsl(180, 31%, 95%)',
        'cyan' : 'hsl(180, 52%, 96%)',
        'dark-cyan' : 'hsl(180, 8%, 52%)',
        'very-dark-cyan' : 'hsl(180, 14%, 20%)',
      }
    },
  },
  plugins: [],
}

