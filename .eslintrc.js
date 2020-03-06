module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
      "indent": ["error", 4],
      "vue/html-indent": ["error", 4],
      "vue/script-indent": ["error", 4]
  }
}
