/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-dark': '#1a1625',
        'app-darker': '#13111d',
        'app-light': '#2a2438',
        'app-accent': '#6c5dd3',
        'app-accent-light': '#8677dd',
        'app-purple': '#4e3fa5',
        'app-purple-light': '#6c5dd3',
        'app-text': '#ffffff',
        'app-text-secondary': '#a7a3b7',
        'app-gray': '#6e6a7c',
        'app-success': '#4caf50',
        'app-warning': '#ff9800',
        'app-error': '#f44336',
        'app-card': '#1f1b2e',
        'app-border': '#2f2b3f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-purple': 'pulsePurple 2s infinite',
        'bounce-subtle': 'bounceSubtle 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulsePurple: {
          '0%, 100%': { backgroundColor: '#6c5dd3' },
          '50%': { backgroundColor: '#8677dd' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(108, 93, 211, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top right, #2a2438 0%, #13111d 100%)',
      },
    },
  },
  plugins: [],
};