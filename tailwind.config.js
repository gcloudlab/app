/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      textColor: {
        primary: '#00b0b3',
        secondary: '#009a9d',
        warning: '#fd7724',
        error: '#fd4f24',
      },
      backgroundImage: {
        login: 'url("https://img-yesmore.vercel.app/test/wallhaven-4verz8_1920x1080.png")',
      },
    },
  },
  plugins: [],
};
