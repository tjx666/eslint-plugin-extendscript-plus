'use strict';

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]:
    'There is no console object in extendscript, use $.writeln("message") instead',
};

/** @type {import('.').RuleCreate} */
const create = (context) => {
  return {
    CallExpression(node) {
      const { callee } = node;
      if (callee.type === 'MemberExpression' && callee.object.name === 'console') {
        context.report({
          node,
          messageId: MESSAGE_ID_DEFAULT,
          fix(fixer) {
            const rangeBeforeParen = [node.range[0], callee.property.range[1]];
            return fixer.replaceTextRange(rangeBeforeParen, '$.writeln');
          },
        });
      }
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
