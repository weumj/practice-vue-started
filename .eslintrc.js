module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
  // plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // '@vue/typescript',
    'prettier',
    // 'prettier/@typescript-eslint',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
  ],
  rules: {
    // '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/camelcase': ['error', { ignoreDestructuring: true }],
    // '@typescript-eslint/consistent-type-assertions': [
    //   'error',
    //   {
    //     assertionStyle: 'as',
    //     objectLiteralTypeAssertions: 'allow-as-parameter',
    //   },
    // ],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': [
    //   'error',
    //   { overrides: { constructors: 'off' } },
    // ],
    // '@typescript-eslint/member-ordering': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-inferrable-types': [
    //   'error',
    //   {
    //     ignoreParameters: true,
    //     ignoreProperties: false,
    //   },
    // ],
    // '@typescript-eslint/no-misused-promises': [
    //   'error',
    //   { checksVoidReturn: false, checksConditionals: true },
    // ],
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-parameter-properties': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   { functions: false, classes: false },
    // ],
    // '@typescript-eslint/prefer-includes': 'error',
    // '@typescript-eslint/prefer-for-of': 'off',
    // '@typescript-eslint/prefer-regexp-exec': 'error',
    // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-await-in-loop': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-lonely-if': 'off',
    'padding-line-between-statements': 'off',
    'no-multi-assign': 'off',
  },
  globals: {},
};
