/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url("https://img-yesmore.vercel.app/test/wallhaven-4verz8_1920x1080.png")',
      },
    },
  },
  plugins: [],
};
