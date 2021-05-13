module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '320px', 'max': '638px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#DE4B4B',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#DE4B4B',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#DE4B4B',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}