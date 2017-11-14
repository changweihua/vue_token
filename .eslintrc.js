// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'quotes': ['off', 'single'],
    //"indent": ["error", 2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "space-before-function-paren": [2, "never"],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never']
    //"no-mixed-spaces-and-tabs": [2, false]//禁止混用tab和空格
    //"no-irregular-whitespace": 2,
    //"indent": [2, 2] //缩进风格
  }
}
