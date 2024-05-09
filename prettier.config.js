module.exports = {
  tabWidth: 4,
  printWidth: 120,
  proseWrap: 'preserve',
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '{*.md,.prettierrc,.stylelintrc,.babelrc,.html}',
      options: {
        tabWidth: 4
      }
    },
    {
      files: '{*.js?(on),*.js, *.css, *.scss, *.vue}',
      options: {
        trailingComma: 'none',
        tabWidth: 2
      }
    },
    {
      files: '{*.ts}',
      options: {
        trailingComma: 'none',
        tabWidth: 1
      }
    },
    {
      files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'all',
        tabWidth: 1
      }
    },
    {
      files: '*.y?(a)ml,',
      options: {
        singleQuote: true
      }
    }
  ]
}
