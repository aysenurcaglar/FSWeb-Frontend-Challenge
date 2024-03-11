/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
    colors: {
      'navy-blue': '#3730A3',
      'lilac': '#BAB2E7',
      'bluish-grey': '#AEBCCF',
      'green': '#00AB6B',
      'gray-dark': '#777777',
      'gray': '#6B7280',
      'gray-light': '#F9F9F9',
      'shadow': '#18274B',
      'black-heading': '#1F2937',
      'dark-purple': '#4338CA',
      'pink': '#E92577',
      'yellow': '#FFE86E',
      'toggle-purple': '#4731D3',
      'logo-purple': '#7B61FF',
      'logo-lilac': '#EEEBFF',
      'button-purple': '#3730A3',
      'personal-blog': '#0A0A14',
      'linkedin-blue': '#0077B5',
      'mail-red': '#AF0C48',
      'light-mode': '#D9D9D9',
      'toggle-gray': '#3A3A3A',
      'dark-logo-font': '#8F88FF',
      'dark-mode-hire': '#E1E1FF',
      'dark-gray-button': '#383838',
      'dark-mode-name': '#B7AAFF',
      'dark-project-name': '#CFCBFF',
      'dark-mode-green': '#17D18B',
      'dark-mode-linkedin': '#0BA6F6',
      'dark-footer-bg': '#141414',
      'dark-bg': '#252128',
    },
  },
  plugins: [],
}