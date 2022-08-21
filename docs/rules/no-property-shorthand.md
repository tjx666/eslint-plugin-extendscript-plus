# xxx

✅ This rule is part of the recommended config.

🔧 This rule is auto-fixable.

## Fail

```javascript
var a = 1;
var obj = { a: a };
```

```javascript
var obj = { f: function () {} };
```

## Pass

```javascript
var a = 1;
var obj = { a };
```

```javascript
var obj = { f() {} };
```
