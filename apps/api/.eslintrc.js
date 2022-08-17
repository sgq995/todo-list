const path = require('path');

module.exports = {
  root: true,
  // extends: ['custom'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-floating-promises': [
          'error',
          { ignoreVoid: true },
        ],
      },
      parserOptions: {
        project: [path.join(__dirname, 'tsconfig.eslint.json')], // Specify it only for TypeScript files
      },
    },
  ],
};
