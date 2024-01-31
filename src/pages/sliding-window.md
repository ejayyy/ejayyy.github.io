---
title: Sliding window
date: 2024-01-27
tags: [Algorithm]
spoiler: Dynamic Programming
---

# What is a `sliding window`
- 길거나 짧은 sequence를 특정할 때
    - 주로 `array`, `string`에 사용
- time complextity `O(k*n)`
    - Brute force의 경우 `O(n^2)`

## 접근방식
1. fast / slow
    - fast slow 모두 나란히 증가
    - [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length)
1. fast / catchup
    - 후순위 탐색이 faster point까지 한 번에 따라잡음
    - Maximum consecutive sum
    - [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i)
1. fast / 따라가기
    - 선행 탐색 이후 slower 결정
    - [Lagging](https://leetcode.com/problems/house-robber)
1. front / back
    - 시작과 끝에서 각자 탐색

1. Solution
[Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii)
`0`, `1`로 구성된 `nums` array. `0`을 `k`번만큼 뒤집어 `1`을 연속되게 만든다. 이 때 만들 수 있는 최대 길이 
```java
int left = 0, right;
for (right = 0; right < nums.length; right++) {
    if (nums[right] == 0) {
        k--;
    }

    if (k < 0) {
        k += 1 - nums[left];
        left++;
    }
}
return right - left;
```
`0`의 숫자를 세지않고 주어진 `k`를 계속헤서 줄여나간다
`while`문으로 `k`를 양수로 돌리지않아도 됨

# 출처
> [What is Sliding Window Algorithm? Examples?](https://stackoverflow.com/a/64111403)  
> [How to Solve Sliding Window Problems](https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66)