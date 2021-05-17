module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'linebreak-style': 0,
    'semi': 'off',
    'operator-linebreak': 'off',
    'editor.formatOnSave': 0,
    'eslint.autoFixOnSave': 0,
    'arrow-parens': 'off',
    'require-jsdoc': 'off',
  },
};
