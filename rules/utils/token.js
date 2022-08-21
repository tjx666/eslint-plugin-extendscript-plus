'use strict';

/**
 * Checks if the given token is a PunctuatorToken with the given value
 * @param {Token} token - The token to check.
 * @param {string} value - The value to check.
 * @returns {boolean} `true` if the token is a PunctuatorToken with the given value.
 */
function isPunctuatorTokenWithValue(token, value) {
  return token.type === 'Punctuator' && token.value === value;
}

/**
 * Checks if the given token is an arrow token or not.
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is an arrow token.
 */
function isArrowToken(token) {
  return isPunctuatorTokenWithValue(token, '=>');
}

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is an opening square bracket token.
 */
function isOpeningBracketToken(token) {
  return isPunctuatorTokenWithValue(token, '[');
}

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is a closing square bracket token.
 */
function isClosingBracketToken(token) {
  return isPunctuatorTokenWithValue(token, ']');
}

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is an opening parenthesis token.
 */
  function isOpeningParenToken(token) {
  return isPunctuatorTokenWithValue(token, "(")
}

/**
* Checks if the given token is a closing parenthesis token or not.
* @param {Token} token - The token to check.
* @returns {boolean} `true` if the token is a closing parenthesis token.
*/
 function isClosingParenToken(token) {
  return isPunctuatorTokenWithValue(token, ")")
}

module.exports = {
  isArrowToken,
  isOpeningBracketToken,
  isClosingBracketToken,
  isOpeningParenToken,
  isClosingParenToken,
};
