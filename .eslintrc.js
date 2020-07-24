module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    semi: ['off', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'operator-linebreak': 'off'
  }
}
