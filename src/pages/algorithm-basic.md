---
title: Basic Algorithm
date: 2021-11-15
spoiler: Mathmatical problems
---

# 1. [Grading Students](https://www.hackerrank.com/challenges/grading/problem)
> The first line contains a single integer, `n`(`1 ≤ n ≤ 60`), the number of students.  
> Each line of the subsequent lines contains a single integer, `grades[i]`(`0 ≤ grades[i] ≤ 100`).  
> If the difference between the `grade` and the next multiple of `5` is less than `3`, round `grade` up to the next multiple of `5`.  
> If the value of `grade` is less than `38`, no rounding occurs as the result will still be a failing grade.
>
> | Original | Final |
> | - | - |
> | 73 | 75 |
> | 67 | 67 |
> | 38 | 40 |
> | 33 | 33 |

## answer
The one-liner code
```java
grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5));
```


# 2. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
> Find the longest common prefix string amongst an array of strings.
> 
> Example 1: `strs = ["flower","flow","flight"]`
> Output: `"fl"`
>
> Example 2: `strs = ["dog","racecar","car"]`
> Output: `""`

## answer
```js
...(strs) => {
    var i = 0; j = 1, prefix = '';

    while (i < strs[0].length) {
        j = 0
        while (j < strs.length) {
            if (i === strs[j].length || strs[0][i] !== strs[j][i]) {
                return prefix
            }
            j++
        }
        if (j === strs.length) {
            prefix += strs[0][i]
        }
        i++
    }
    return prefix
}
```
