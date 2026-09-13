import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        deep: '#09090f',
        surface: '#111118',
        gold: {
          DEFAULT: '#c9a84c',
          muted: '#a07d38',
          bright: '#d4ba6a',
        },
        parchment: '#f0ebe0',
        muted: '#7a7880',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
