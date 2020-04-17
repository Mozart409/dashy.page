module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    }),
    require('@tailwindcss/custom-forms')
  ]
}
