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
      // fontSize: {
      //   '2xs': '.6875rem',
      // },
      // backgroundColor:{
      //   'surface':'hsl(0,0,98%)',
      // },
      // borderColor:{
      //   'strong':'rgba(0,0,0,.35)',
      //   'medium':'rgba(0,0,0,.25)',
      //   'soft':'rgba(0,0,0,.15)',
      //   'whisper':'rgba(0,0,0,.09)',
      //   'link':'rgba(0,0,0,.09)',
      // },
      // textColor:{
      //   'strong': 'rgba(0,0,0,.8)',
      //   'read': 'rgba(0,0,0,.67)',
      //   'muted': 'rgba(0,0,0,.45)',
      //   'whisper': 'rgba(0,0,0,.25)',
      //   'link': 'rgba(0,50,200,1)',
      // },
    }
  },
  plugins: []
}