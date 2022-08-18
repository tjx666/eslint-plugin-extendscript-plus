const path = require('node:path');
const { RuleTester } = require('eslint');

const extendscriptConfig = require('../configs/extendscript');

/** @type {import('../.eslintrc').ESlintConfig} */
const config = {
  ...extendscriptConfig,
  parser: path.resolve(__dirname, '../node_modules/@babel/eslint-parser'),
  parserOptions: {
    ...extendscriptConfig.parserOptions,
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
    },
  },
};

const ruleTester = new RuleTester(config);
module.exports = {
  ruleTester,
};
