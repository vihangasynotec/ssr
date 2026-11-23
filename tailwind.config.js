/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ssr: {
          bg: '#0A0A0B',
          card: '#121215',
          cardhover: '#18181D',
          border: 'rgba(255, 255, 255, 0.08)',
          red: '#E31E24',
          deepred: '#B5121B',
          redbright: '#FF2A32',
          black: '#0A0A0B',
          darkgrey: '#8E8E93',
          lightgrey: '#E5E5E7',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'ssr-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.4)',
        'ssr-md': '0 10px 30px -3px rgba(0, 0, 0, 0.6)',
        'ssr-lg': '0 20px 45px -5px rgba(0, 0, 0, 0.8)',
        'ssr-red': '0 10px 30px -5px rgba(227, 30, 36, 0.5)',
        'ssr-red-lg': '0 15px 40px -5px rgba(227, 30, 36, 0.7)',
      },
    },
  },
  plugins: [],
};
