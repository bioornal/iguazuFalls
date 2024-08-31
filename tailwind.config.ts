/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#f0fff4',
          // ... otras tonalidades de verde
          800: '#22543d',
          900: '#1a4731',
        },
        yellow: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}