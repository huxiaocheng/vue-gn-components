module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"
    // , "@vue/prettier"
  ],
  rules: {
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'no-unused-vars': 'warn',
    'space-before-function-paren': 0,
    'indent': ['off', 2]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
