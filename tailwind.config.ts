import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(59, 130, 246, 0.16)'
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.14), transparent 25%)'
      }
    }
  },
  plugins: []
};

export default config;
