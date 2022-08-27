# eslint-plugin-extendscript-plus

[![npm](https://img.shields.io/npm/v/eslint-plugin-extendscript-plus)](https://www.npmjs.com/package/eslint-plugin-extendscript-plus) [![npm](https://img.shields.io/npm/dm/eslint-plugin-extendscript-plus)](https://www.npmjs.com/package/eslint-plugin-extendscript-plus) ![test](https://github.com/tjx666/eslint-plugin-extendscript-plus/actions/workflows/test.yml/badge.svg)

polyfill global variables &amp; provide some awesome rules

## Installation

```sh
npm install eslint-plugin-extendscript-plus -D

# pnpm
pnpm add eslint-plugin-extendscript-plus -D

# pnpm monorepo
pnpm -w add eslint-plugin-extendscript-plus -D
```

## Usage

Add `extendscript-plus` to the plugins section of your `.eslintrc` configuration file.

```javascript
{
  "extends": [...others， "plugin:extendscript-plus/photoshop"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "extendscript-plus/no-let": 0
  }
}
```

## TODOs

- [ ] AE support

### rules

- [ ] prefer-const-to-var
- [ ] no-redeclare-const

## Supported Rules

Each rule has emojis denoting:

- ✅ if it is enable by default
- 🔧 if some problems reported by the rule are automatically fixable by the `--fix` [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) option
- 💡 if some problems reported by the rule are manually fixable by editor [suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions)

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description                                                    | ✅  | 🔧  | 💡  |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- | :-- | :-- | :-- |
| [no-let](docs/rules/no-let.md)                                                                                                                                                                                                                       | Improve regexes by making them shorter, consistent, and safer. | ✅  | 🔧  |     |
| [no-console](docs/rules/no-console.md)                                                                                                                                                                                                               | Enforce a specific parameter name in catch clauses.            | ✅  | 🔧  |     |
| [no-arrow-func](docs/rules/no-arrow-func.md)                                                                                                                                                                                                         | Use destructured variables over properties.                    | ✅  | 🔧  |     |
| [no-property-shorthand](docs/rules/no-property-shorthand.md)                                                                                                                                                                                         | Move function definitions to the highest possible scope.       | ✅  | 🔧  |     |

## Thanks

I learn a lot from these awesome projects:

- [eslint](https://github.com/eslint/eslint)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-extendscript](https://github.com/adambrgmn/eslint-plugin-extendscript)
- [eslint-plugin-es](https://github.com/tjx666/eslint-plugin-es)
