module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [0, { allow: 'never' }],
    'jsx-a11y/aria-role': [0, { allow: 'never' }],
    'react/function-component-definition': [0, { allow: 'never' }],
    camelcase: [0, { allow: 'never' }],
    'import/prefer-default-export': [0, { allow: 'never' }],
    'react/jsx-props-no-spreading': [0, { allow: 'never' }],
    'react/react-in-jsx-scope': [0, { allow: 'never' }],
    'no-useless-computed-key': [0, { allow: 'never' }],
    'no-unused-vars': [0, { allow: 'never' }],
    'no-underscore-dangle': [0, { allow: 'never' }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
