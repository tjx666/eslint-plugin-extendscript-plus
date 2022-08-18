'use strict';

const rule = require('../rules/no-let-const');
const { ruleTester } = require('./utils');

ruleTester.run('no-let-const', rule, {
  valid: [
    {
      code: 'var a = 1',
      options: [],
    },
  ],

  invalid: [
    {
      code: 'let a = 1',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a = 1',
    },
    {
      code: 'let a, b;',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a, b;',
    },
    {
      code: 'let a, b = 1;',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a, b = 1;',
    },
    {
      code: 'const a = 1',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a = 1',
    },
    {
      code: 'const a = 1, b = 2;',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a = 1, b = 2;',
    },
  ],
});
