module.exports = {
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    }
  },
  plugins: [
    // https://yarnpkg.com/package/@tailwindcss/forms
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
