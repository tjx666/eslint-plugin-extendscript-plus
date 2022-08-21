'use strict';

const extendscriptConfig = require('./configs/extendscript');
const photoshopConfig = require('./configs/photoshop');

const rules = require('./rules/index');

/**
 * @type {import('eslint').ESLint.Plugin}
 */
module.exports = {
  rules,
  configs: {
    extendscript: extendscriptConfig,
    photoshop: photoshopConfig,
  },
};
