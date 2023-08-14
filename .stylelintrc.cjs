/*
 * @Author: Viccsen
 * @Date: 2023-08-14 10:23:56
 * @LastEditTime: 2023-08-14 11:33:40
 * @LastEditors: Viccsen
 * @Description: 
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: [
    'node_modules/**/*',
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
  ],
}
