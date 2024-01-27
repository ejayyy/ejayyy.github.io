---
title: Alphabet to number
date: 2019-11-03
---
### Transfer alphabet to number
- `[char].charCodeAt(0)` : a = 97, b = 98....

### Enhanced for loop
- `for(item in ary)` : item = index
- `for(item of ary)` : item = ary[i]

### Sum of each alphabet
- `const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)`
    - Point : string to arr, default value
    - JS [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function : `arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`