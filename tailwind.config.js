/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        neon: {
          green: '#00ff41',
          pink: '#ff006e',
          blue: '#0d47a1',
        }
      },
    },
  },
  plugins: [],
}
