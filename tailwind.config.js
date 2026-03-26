/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './assets/**/*.{css,scss}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        // display: ['"Outfit"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        // body: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.6875rem',
      },
      backgroundColor:{
        'surface':'hsl(0,0,98%)',
      },
      borderColor:{
        'c-strong':'rgba(0,0,0,.35)',
        'c-medium':'rgba(0,0,0,.25)',
        'c-soft':'rgba(0,0,0,.15)',
        'c-whisper':'rgba(0,0,0,.09)',
        'c-link':'rgba(0,0,0,.09)',
      },
      textColor:{
        'c-strong': 'rgba(0,0,0,.8)',
        'c-medium': 'rgba(0,0,0,.67)',
        'c-muted': 'rgba(0,0,0,.45)',
        'c-whisper': 'rgba(0,0,0,.25)',
        'c-link': 'rgba(0,50,200,1)',
      },
    }
  },
  plugins: []
}