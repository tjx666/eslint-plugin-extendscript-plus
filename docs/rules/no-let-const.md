# ExtendScript ECMAScript3 doesn't support let/const

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

```javascript
const a = 1;
```

```javascript
const b = 1,
  c = 2;
```

## Pass

```javascript
var a = 1;
```

```javascript
var a,
  b = 1;
```
