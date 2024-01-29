---
title: Sliding window
date: 2024-01-27
tags: [Algorithm]
spoiler: Dynamic Programming
draft: true
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
    - [lagging](https://leetcode.com/problems/house-robber)
1. front / back
    - 시작과 끝에서 각자 탐색

# 출처
> [What is Sliding Window Algorithm? Examples?](https://stackoverflow.com/a/64111403)  
> [How to Solve Sliding Window Problems](https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66)