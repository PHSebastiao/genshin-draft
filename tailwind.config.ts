import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      'night',
      'valentine',
      'dracula',
      'synthwave',
      'luxury',
      'retro',
      'forest',
      'aqua',
      'cyberpunk',
      'coffee',
      'fantasy',
      'black',
    ],
  },
} satisfies Config
