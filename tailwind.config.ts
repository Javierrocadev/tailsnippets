import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d4eaf7',
          200: '#b6ccd8',
          300: '#3b3c3d',
        },
        accent: {
          100: '#71c4ef',
          200: '#00668c',
        },
        text: {
          100: '#1d1c1c',
          200: '#313d44',
        },
        bg: {
          100: '#fffefb',
          200: '#f5f4f1',
          300: '#cccbc8',
        }
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
} satisfies Config

