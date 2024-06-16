

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        orange: 'var(--color-orange)',
        grey: 'var(--color-gray)'
        
      }
    },
  },
  plugins: [],
};
