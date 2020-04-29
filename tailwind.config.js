module.exports = {
  theme: {
    extend: {
      height: {
        vh80: '80vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    }),
    require('@tailwindcss/custom-forms')
  ]
}
