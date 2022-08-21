'use strict';

const rule = require('../rules/no-property-shorthand');
const { ruleTester } = require('./utils');

ruleTester.run('no-property-shorthand', rule, {
  valid: [
    {
      code: 'var a = 1; var obj = { a: a }',
      options: [],
    },
    {
      code: 'var obj = { f: function(){} }',
      options: [],
    },
  ],

  invalid: [
    {
      code: 'var a = 1; var obj = { a }',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var a = 1; var obj = { a: a }',
    },
    {
      code: 'var obj = { f(){} }',
      errors: [{ message: rule.meta.messages.default }],
      output: 'var obj = { f: function(){} }',
    },
  ],
});
