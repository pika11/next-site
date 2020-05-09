const rules = {
  'react/react-in-jsx-scope': 0,
  'react/prop-types': 0,
  'react/jsx-filename-extension': 0,
  'react/destructuring-assignment': 0,
  'jsx-a11y/anchor-is-valid': 0,
  'no-nested-ternary': 0,
  'array-callback-return': 0,
  'consistent-return': 0,
  'no-param-reassign': 0,
  'lines-between-class-members': 0,
  'global-require': 0,
  'import/prefer-default-export': 0,
  'import/no-extraneous-dependencies': 0,
  'react/jsx-props-no-spreading': 0,
  'react/no-unescaped-entities': 0,
  'no-use-before-define': 0
};

module.exports = {
  env: {
    browser: true
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      parser: 'babel-eslint',
      extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
      rules
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json'
      },
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
      rules: { ...rules, '@typescript-eslint/no-explicit-any': 0 }
    }
  ]
};
