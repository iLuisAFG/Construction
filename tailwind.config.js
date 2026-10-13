/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F25C24",
          "orange-hover": "#E04C15",
          "orange-light": "#FF7543",
          dark: "#0F1115",
          charcoal: "#161920",
          cardDark: "#1A1D24",
          borderDark: "#262B36",
          light: "#FBFBFA",
          surfaceLight: "#F3F4F6",
          muted: "#787E8C"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(242, 92, 36, 0.35)',
        'soft-lift': '0 20px 40px -15px rgba(15, 17, 21, 0.07)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
}
