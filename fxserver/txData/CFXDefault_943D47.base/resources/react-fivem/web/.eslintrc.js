module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['src']
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': 'off',
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    // 'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ]
  }
};
