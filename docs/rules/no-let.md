# ExtendScript doesn't support let

✅ This rule is part of the recommended config.

🔧 This rule is auto-fixable.

## Fail

```javascript
let a;
```

```javascript
let a, b;
```

```javascript
let a,
  b = 1;
```

## Pass

```javascript
var a = 1;
```

```javascript
var a,
  b = 1;
```
