# xxx

✅ This rule is part of the recommended config.

🔧 This rule is auto-fixable.

## Fail

```javascript
var test = () => {};
```

```javascript
runCallback(() => {});
```

## Pass

```javascript
function test() {}
```

```javascript
runCallback(function () {});
```
