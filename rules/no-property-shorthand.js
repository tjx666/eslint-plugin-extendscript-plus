'use strict';

// https://github.com/mysticatea/eslint-plugin-es/blob/master/lib/rules/no-property-shorthands.js

const { isOpeningBracketToken, isClosingBracketToken } = require('./utils/token');

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]: 'es3 environment not support object property shorthand syntax',
};

/** @type {import('.').RuleCreate} */
const create = (context) => {
  const sourceCode = context.getSourceCode();

  /**
   * Fixes a FunctionExpression node by making it into a longform property.
   * @param {SourceCodeFixer} fixer The fixer object
   * @param {ASTNode} node A `Property` node that has a `FunctionExpression` as its value
   * @returns {object} A fix for this node
   */
  function makeFunctionLongForm(fixer, node) {
    const firstKeyToken = node.computed
      ? sourceCode.getTokenBefore(node.key, isOpeningBracketToken)
      : sourceCode.getFirstToken(node.key);
    const lastKeyToken = node.computed
      ? sourceCode.getTokenAfter(node.key, isClosingBracketToken)
      : sourceCode.getLastToken(node.key);
    const keyText = sourceCode.text.slice(firstKeyToken.range[0], lastKeyToken.range[1]);
    let functionHeader = 'function';

    if (node.value.async) {
      functionHeader = `async ${functionHeader}`;
    }
    if (node.value.generator) {
      functionHeader = `${functionHeader}*`;
    }

    return fixer.replaceTextRange(
      [node.range[0], lastKeyToken.range[1]],
      `${keyText}: ${functionHeader}`,
    );
  }

  return {
    'ObjectExpression > :matches(Property[method=true], Property[shorthand=true])'(node) {
      context.report({
        node,
        messageId: MESSAGE_ID_DEFAULT,
        fix: node.method
          ? (fixer) => makeFunctionLongForm(fixer, node)
          : (fixer) => fixer.insertTextAfter(node.key, `: ${node.key.name}`),
      });
    },
  };
};

/** @type {import('.').RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    schema: [],
    fixable: 'code',
    messages,
  },
  create,
};
