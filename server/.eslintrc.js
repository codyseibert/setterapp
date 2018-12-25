module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
  settings: {
    react: {
      version: '16.6.3',
    },
  },
  env: {
    'jest/globals': true,
    browser: false,
    es6: true,
    mocha: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    jsx: false,
  },
};