/*
 * @Author: Viccsen
 * @Date: 2023-08-12 15:05:35
 * @LastEditTime: 2023-11-07 18:10:31
 * @LastEditors: Viccsen
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    es6: true, // enable ES2015 features.
    browser: true, // enable use of global browser variables like `windows`.
    node: true, // enable use of global node variables like `process`.
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version supported in the project.
    sourceType: 'module', // set to `module` because we ue ECMAScript modules.
    ecmaFeatures: {
      jsx: true, // enable jsx for React.
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'import',
    'simple-import-sort', // Plugin for sorting imports in file.
  ],
  settings: {
    react: {
      version: 'detect', // auto-detect React version from package.json.
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // use typescript-eslint parser for .ts|tsx files.
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`.
      },
    },
  },
  rules: {
    semi: 0,
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        endOfLine: 'auto',
        singleQuote: true,
      },
      {
        usePrettierrc: false,
      },
    ],
    'import/first': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'simple-import-sort/exports': 'warn',
    'react/prop-types': 'off',
    'react/jsx-no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages
          ['^\\w'],
          // Internal packages.
          ['^(@|config/)(/*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
  },
}
