/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        page: 'var(--bg)',
        elevated: 'var(--elevated)',
        ink: 'var(--ink)',
        mute: 'var(--mute)',
        line: 'var(--line)',
        accent: {
          DEFAULT: 'var(--accent)',
          dim: 'var(--accent-dim)',
        },
        inverse: 'var(--inverse)',
        'on-inverse': 'var(--on-inverse)',
      },
      boxShadow: {
        glow: '0 0 80px var(--glow)',
        card: '0 24px 80px -32px rgba(0,0,0,0.45)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
