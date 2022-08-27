'use strict';

const { RuleTester } = require('eslint');

const extendscriptConfig = require('../configs/extendscript');
delete extendscriptConfig.rules;

/** @type {import('../.eslintrc').ESlintConfig} */
const config = {
  ...extendscriptConfig,
  parser: require.resolve('@babel/eslint-parser'),
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
