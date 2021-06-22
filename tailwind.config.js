module.exports = {
  purge: ['./projects/**/*.{html,scss,ts}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'tall-buildings': "url('/assets/tall-buildings.jpg')",
        'buildings': "url('/assets/nice-buildings.jpg')",
        'cluster': "url('/assets/building-cluster.jpg')",
      },
      fontFamily: {
        display: ["'Exo 2'", 'sans-serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
