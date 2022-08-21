![test](https://github.com/tjx666/eslint-plugin-extendscript-plus/actions/workflows/test.yml/badge.svg)

# eslint-plugin-extendscript-plus

polyfill global variables &amp; provide some awesome rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-extendscript-plus`:

```sh
npm install eslint-plugin-extendscript-plus --save-dev
```

## Usage

Add `extendscript-plus` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```javascript
{
  "extends": [...others， "plugin:eslint-plugin-extendscript-plus/photoshop"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eslint-plugin-extendscript-plus/no-let-const": 0
  }
}
```

## Supported Rules

- Fill in provided rules here

## Thanks

I learn a lot from these awesome projects:

- [eslint-plugin-extendscript](https://github.com/adambrgmn/eslint-plugin-extendscript)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-es](https://github.com/tjx666/eslint-plugin-es)
