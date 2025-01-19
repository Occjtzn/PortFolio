const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#F2F2F2',
        bgMedium: '#D9D9D9',
        bgDark: '#A6A6A6',
        textDark: '#262626',
        textDarker: '#0D0D0D',
        highlight: '#eca445',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
