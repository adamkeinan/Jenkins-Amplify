const isProdEnv = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
  ],
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    'no-console': isProdEnv ? 'error' : 'warn',
    'no-debugger': isProdEnv ? 'error' : 'warn',

    "comma-dangle": ["error", "always-multiline"],

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'vue/singleline-html-element-content-newline': ['warn', {
      ignores: ['pre', 'textarea', 'span', 'v-icon'],
    }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
