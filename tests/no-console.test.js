'use strict';

const rule = require('../rules/no-console');
const { ruleTester } = require('./utils');

ruleTester.run('no-console', rule, {
  valid: [
    {
      code: '$.writeln(123)',
      options: [],
    },
  ],

  invalid: [
    {
      code: 'console.log(123)',
      errors: [{ message: rule.meta.messages.default }],
      output: '$.writeln(123)',
    },
    {
      code: 'console.error("error...")',
      errors: [{ message: rule.meta.messages.default }],
      output: '$.writeln("error...")',
    },
  ],
});
