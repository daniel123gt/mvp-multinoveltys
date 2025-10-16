/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'senza-primary': '#ffffff',     // Blanco puro para fondos principales
        'senza-secondary': '#f8fafc',   // Gris muy claro para secciones
        'senza-accent': '#00003f',      // Azul muy oscuro para textos principales
        'senza-blue': '#3461f2',        // Azul medio vibrante (oficial)
        'senza-light-blue': '#00c8f3',  // Cian brillante (oficial)
        'senza-dark-blue': '#0f18d7',   // Azul real eléctrico (oficial)
        'senza-gray': '#64748b',        // Gris medio para textos secundarios
        'senza-light-gray': '#94a3b8',  // Gris claro para textos terciarios
        'senza-yellow': '#ffce00',      // Amarillo vibrante (muy poco uso)
        'senza-border': '#e2e8f0',      // Gris claro para bordes
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
