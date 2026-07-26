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
        surface: {
          950: '#080706',
          900: '#0e0d0b',
          800: '#161412',
          700: '#1e1b17',
          600: '#27231d',
        },
        copper: {
          DEFAULT: '#c07d46',
          light: '#d4956a',
          muted: '#8a5c38',
          pale: '#e8c9a8',
        },
        sand: {
          DEFAULT: '#c9a87c',
          light: '#ddc49a',
          muted: '#8a6e52',
        },
        graphite: {
          DEFAULT: '#302c27',
          light: '#453f38',
          muted: '#605850',
        },
        cream: '#ede0cc',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'featured-pulse': 'featuredPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        featuredPulse: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
