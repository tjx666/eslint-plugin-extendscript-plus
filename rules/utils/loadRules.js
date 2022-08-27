'use strict';

const fs = require('node:fs');
const path = require('node:path');

const packageJson = require('../../package.json');

/**
 * @typedef {import('eslint').Rule.RuleContext} RuleContext
 * @typedef {import('eslint').Rule.RuleModule} RuleModule
 * @typedef {RuleModule['create']} RuleCreate
 */

const repoUrl = 'https://github.com/tjx666/eslint-plugin-extendscript-plus';
function getDocumentationUrl(filename) {
  const ruleName = path.basename(filename, '.js');
  return `${repoUrl}/blob/v${packageJson.version}/docs/rules/${ruleName}.md`;
}

/** @returns {import('eslint').Rule.RuleModule} */
function loadRule(ruleId) {
  const rule = require(`../${ruleId}`);

  return {
    meta: {
      // If there is are, options add `[]` so ESLint can validate that no data is passed to the rule.
      // https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/require-meta-schema.md
      schema: [],
      ...rule.meta,
      docs: {
        ...(rule.meta.docs || {}),
        url: getDocumentationUrl(ruleId),
      },
    },
    create: rule.create,
  };
}

function loadRules() {
  return Object.fromEntries(
    fs
      .readdirSync(path.resolve(__dirname, '../'), { withFileTypes: true })
      .filter((file) => file.name !== 'index.js' &&  file.isFile())
      .map((file) => {
        const ruleId = path.basename(file.name, '.js');
        return [ruleId, loadRule(ruleId)];
      }),
  );
}

module.exports = { loadRules };
