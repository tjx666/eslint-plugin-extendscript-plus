'use strict';

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]: 'ExtendScript not support let to declare variable',
};

const NotAllowedKind = new Set(['let']);
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
