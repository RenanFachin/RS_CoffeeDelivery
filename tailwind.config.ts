import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      yellow: {
        100: '#F1E9C9',
        500: '#DBAC2C',
        900: '#C47F17'
      },
      purple: {
        100: '#EBE5F9',
        500: '#8047F8',
        900: '#4B2995'
      },
      base: {
        'title': '#272221',
        'subtitle': '#403937',
        'text': '#574F4D',
        'label': '#8D8686',
        'hover': '#D7D5D5',
        'button': '#E6E5E5',
        'input': '#EDEDED',
        'card': '#F3F2F2',
      },
      background: '#FAFAFA',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        title: 'var(--font-baloo)'
      }
    },
  },
  plugins: [],
}
export default config