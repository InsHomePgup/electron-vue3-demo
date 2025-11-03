import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    typescript: true,
    vue: true,
    formatters: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/release',
      '**/docs',
      '**/.idea',
      '**/.vscode',
      '**/buildAssets/builder',
      '**/tests/results',
      '**/package-lock.json',
    ],
  },
  {
    rules: {
      // Custom rules to match your project's needs
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'node/no-process-env': 'off',
      'ts/no-explicit-any': 'off',
      'ts/explicit-function-return-type': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
)
