/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          surface: '#131B2E',
          border: '#1E293B',
          blue: '#2563EB',
          purple: '#9333EA',
          accent: '#A855F7'
        }
      }
    },
  },
  plugins: [],
}