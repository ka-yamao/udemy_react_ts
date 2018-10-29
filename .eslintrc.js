module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  ecmaFeatures: {
    jsx: true,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6, // ES2015(ES6) の構文はここに集約
    sourceType: 'module', // Modules の指定だけは分離
    ecmaFeatures: {
      // ECMAScript に含まれない仕様はここ
      jsx: true,
    },
  },
};
