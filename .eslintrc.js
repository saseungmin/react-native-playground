module.exports = {
  root: true,
  env: {
    jest: true,
  },
  ignorePatterns: ['node_modules', 'scripts'],
  extends: [
    '@nf-team/eslint-config',
  ],
  plugins: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['hooks/**/**/*.test.ts?(x)'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
