// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepBlack: '#161f21',
        darkKhaki: '#444328',
        forestGreen: '#3b7f04',
        freshGreen: '#93bd66',
        limeGreen: '#77bc43',
        vanillaCream: '#f7ffb7',
        goldenyellow: '#f9d448',
        customBlue: '#3b82f6',
      }, // Tambahkan tanda kurung kurawal tambahan di sini
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
