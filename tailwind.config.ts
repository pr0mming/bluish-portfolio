import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00334E',
          50: '#07A9FF',
          100: '#009EF1',
          200: '#0083C8',
          300: '#0068A0',
          400: '#004E77',
          500: '#00334E',
          600: '#000E16',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        secondary: {
          DEFAULT: '#145374',
          50: '#5DB5E3',
          100: '#4BADE0',
          200: '#289DDA',
          300: '#2085BA',
          400: '#1A6C97',
          500: '#145374',
          600: '#0C3144',
          700: '#030F14',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        accent: {
          DEFAULT: '#5588A3',
          50: '#CBDCE4',
          100: '#BED2DD',
          200: '#A3C0CF',
          300: '#88AEC1',
          400: '#6E9BB3',
          500: '#5588A3',
          600: '#42697E',
          700: '#2F4A59',
          800: '#1B2C34',
          900: '#080D10',
          950: '#000000'
        },
        white: {
          DEFAULT: '#E8E8E8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FCFCFC',
          500: '#E8E8E8',
          600: '#CCCCCC',
          700: '#B0B0B0',
          800: '#949494',
          900: '#787878',
          950: '#6A6A6A'
        }
      },
      boxShadow: {
        'sm-accent': `5px 5px 0px 0px theme('colors.accent.DEFAULT')`
      }
    }
  },
  plugins: []
}
export default config
