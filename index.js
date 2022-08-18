'use strict';

const extendscriptConfig = require('./configs/extendscript');
const photoshopConfig = require('./configs/photoshop');

const { loadRules } = require('./rules');

/**
 * @type {import('eslint').ESLint.Plugin}
 */
module.exports = {
  rules: loadRules(),
  configs: {
    extendscript: extendscriptConfig,
    photoshop: photoshopConfig,
  },
};
