module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": ["error", {"endOfLine":"auto"}],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "camelcase": "off",
    "eqeqeq": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};
