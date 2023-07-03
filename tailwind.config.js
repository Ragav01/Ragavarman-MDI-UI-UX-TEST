/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        skin:{
          primary:'var(--color-primary)',
          secondary:'var(--color-secondary)',
          body:'var(--color-background-body)',
          inverted: 'var(--color-background-inverted)'
        }
      },
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var(--color-text-muted)',
          inverted:'var(--color-text-inverted)',
          ctahover:'var(--color-text-cta-hover)'
        }
      },
      backgroundColor:{
        skin:{
          body: 'var(--color-background-body)',
          surface: 'var(--color-background-surface)',
          inverted: 'var(--color-background-inverted)'
        }
      },
      borderColor:{
        skin:{
          base: 'var(--color-border-base)',
          inverted: 'var(--color-border-inverted)'
        }
      }
    },
  },
  plugins: [],
}

