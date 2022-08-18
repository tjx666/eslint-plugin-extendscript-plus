'use strict';

/**
 * @typedef {import('eslint').Linter.Config} ESlintConfig
 */

/** @type {ESlintConfig} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
  rules: {
    'no-unused-vars': [1, { argsIgnorePattern: 'context' }],
  },
};
