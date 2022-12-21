/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        btn: '3px 4px 10px rgba(37, 37, 37, 0.25)',
      },
      fontFamily: {
        SFNSRounded: 'SFNSRounded',
      },
    },
    letterSpacing: {
      standard: '0.03em',
    },
  },
  plugins: [],
}
