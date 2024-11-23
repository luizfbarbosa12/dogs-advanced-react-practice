module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unknown-property': 'error',
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Best Practices
    eqeqeq: 'error',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',

    // Variable
    'no-use-before-define': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // Stylistic Issues
    'array-bracket-newline': ['error', { multiline: true, minItems: null }],
    'array-bracket-spacing': 'error',
    'no-trailing-spaces': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'keyword-spacing': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'quote-props': ['error', 'as-needed'],

    semi: ['warn', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    // ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ],
    },
  ],
}
