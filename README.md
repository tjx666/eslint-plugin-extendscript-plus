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

```json
{
    "plugins": [
        "extendscript-plus"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "extendscript-plus/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


