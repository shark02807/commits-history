/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        66: '16.5rem',
        85: '21.25rem'
      },
      minWidth: {
        24: '6rem'
      }
    }
  },
  plugins: []
};
