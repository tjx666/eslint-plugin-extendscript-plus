'use strict';

/**
 * @typedef {import('eslint').Rule.RuleContext} RuleContext
 * @typedef {import('eslint').Rule.RuleModule} RuleModule
 * @typedef {RuleModule['create']} RuleCreate
 */

const { loadRules } = require('./utils/loadRules');
module.exports = loadRules();
