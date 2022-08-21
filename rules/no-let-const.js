'use strict';

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]: 'es3 environment not support let/const to declare variable',
};

const NotAllowedKind = new Set(['let', 'const']);
/** @type {import('.').RuleCreate} */
const create = (context) => {
  const sourceCode = context.getSourceCode();
  return {
    VariableDeclaration(node) {
      if (NotAllowedKind.has(node.kind)) {
        context.report({
          node,
          messageId: MESSAGE_ID_DEFAULT,
          fix(fixer) {
            const declareKindToken = sourceCode.getFirstToken(node, {
              filter: (t) => t.value === node.kind,
            });
            return fixer.replaceText(declareKindToken, 'var');
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
