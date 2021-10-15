module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:bowen-lint/reactLint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'allow',
        afterOpening: 'never',
        beforeClosing: 'allow'
      }
    ],
    'object-curly-spacing': ['warn', 'never'],
    'react/jsx-indent-props': ['off', 'tab'],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
};
