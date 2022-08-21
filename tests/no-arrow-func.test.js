'use strict';

const rule = require('../rules/no-arrow-func');
const { ruleTester } = require('./utils');

ruleTester.run('no-arrow-func', rule, {
  valid: [
    {
      code: 'function test(){}',
      options: [],
    },
    {
      code: '!function(){}',
      options: [],
    },
    {
      code: 'var f = function(){}',
      options: [],
    },
  ],
  invalid: [
    {
      code: 'array.map((e) => {})',
      errors: [{ message: rule.meta.messages.default }],
      options: [],
      output: 'array.map(function(e) {})',
    },
    {
      code: 'array.map(e => {})',
      errors: [{ message: rule.meta.messages.default }],
      options: [],
      output: 'array.map(function(e) {})',
    },
    {
      code: 'var callback = (e) => {}',
      errors: [{ message: rule.meta.messages.default }],
      options: [],
      output: 'var callback = function(e) {}',
    },
    {
      code: 'var callback = (e) => ({})',
      errors: [{ message: rule.meta.messages.default }],
      options: [],
      output: 'var callback = function(e) { return {} }',
    },
  ],
});

const a = () => {};
