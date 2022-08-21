'use strict';

const MESSAGE_ID_DEFAULT = 'default';
const messages = {
  [MESSAGE_ID_DEFAULT]: '',
};

/** @type {import('.').RuleCreate} */
const create = (context) => {
  return {};
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
