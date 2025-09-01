/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'senza-blue': '#0F766E',        // Teal más verde, menos azul
        'senza-light-blue': '#14B8A6',  // Teal medio balanceado
        'senza-dark-blue': '#065F46',   // Verde oscuro con toque azul
        'senza-accent': '#0D9488',      // Teal vibrante balanceado
        'senza-gray': '#0F172A',        // Gris azulado muy oscuro
        'senza-light-gray': '#F8FAFC',  // Gris muy claro
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(13, 148, 136, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(13, 148, 136, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
