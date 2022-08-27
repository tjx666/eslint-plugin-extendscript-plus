'use strict';

const { isArrowToken, isOpeningParenToken, isClosingParenToken } = require('./utils/token');

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]: 'es3 environment not support arrow function',
};

function rangeInside(a, b) {
  return a[0] >= b[0] && a[1] <= b[1];
}

/** @type {import('.').RuleCreate} */
const create = (context) => {
  const sourceCode = context.getSourceCode();
  return {
    ArrowFunctionExpression(node) {
      context.report({
        node,
        messageId: MESSAGE_ID_DEFAULT,
        *fix(fixer) {
          const arrowToken = sourceCode.getTokenBefore(node.body, isArrowToken);
          // add function prefix
          yield fixer.insertTextBefore(node, 'function');
          const openParenTokenBeforeBody = sourceCode.getTokenBefore(
            node.body,
            (token) => isOpeningParenToken(token) && token.range[0] >= arrowToken.range[1],
          );
          // remove =>
          if (openParenTokenBeforeBody) {
            yield fixer.remove(arrowToken);
          } else {
            yield fixer.removeRange([arrowToken.range[0], node.body.range[0]]);
          }

          if (node.body.type !== 'BlockStatement') {
            // remove extra () which wrap body, for example () => ({})
            if (openParenTokenBeforeBody) {
              yield fixer.remove(openParenTokenBeforeBody);
              const closeParenToken = sourceCode.getTokenAfter(node.body, isClosingParenToken);
              yield fixer.remove(closeParenToken);
            }

            // add return
            yield fixer.insertTextAfter(arrowToken, '{ return');
            yield fixer.insertTextAfter(node, ' }');
          }

          // wrap first argument with ()
          const firstArg = node.params[0];
          if (firstArg) {
            const openParenToken = sourceCode.getTokenBefore(firstArg, isOpeningParenToken);
            if (!openParenToken || !rangeInside(openParenToken.range, node.range)) {
              yield fixer.insertTextBefore(firstArg, '(');
              yield fixer.insertTextAfter(firstArg, ')');
            }
          }
        },
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
