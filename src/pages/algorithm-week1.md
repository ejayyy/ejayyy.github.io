---
title: "알고리즘 week 1"
date: "2020-09-20"
tags: ["algorithm"]
---

# UNION-FIND
최소 선형트리 알고리즘의 서브 루틴


| Function        | Description               |
| - | - |
| UF(int N)       | union-find data (0 ~ N-1) |
| union(p, q)     | add connection p, q       |
| connected(p, q) | IsUnioned?                |

## Quick Find (Eager approach)
1. Initialize  
  <table>
    <tr>
      <td>index</td>
      <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
    </tr>
    <tr>
      <td>value</td>
      <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
    </tr>
  </table>
  `id[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`  
  index == value  
  `ary[N]`으로 N번의 init 
1. Find  
  `return id[p] == id[q]`  
  노드가 연결됐는지 찾는데 1번의 조회로 해결
1. Union  
  `id[] = [0, 1, 2, 3, 4]` - `union(1, 2)` -> `id[] = [0, 1, 1, 3, 4]`  
  `p`, `q` 중 무엇으로 바꿀지 내부적으로 결정해야함  
  해당 `parameter`의 `index`를 찾아 다른 인수의 값으로 수정  
  N<sup>2</sup>의 시간이 필요
  ```js
  for(let i=0;i<id.length;i++)
      if(id[i] == id[q]) id[i] = pid
  ```

## Quick union (Lazy approach)
Quick find의 대안. `tree 구조`로 구성된 `forest`
1. Initialize  
`id[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
1. Find  
  `Root` of `i` : `id[id[id[...id[i]...]]]`  
    `id[i]`는 `i`의 `parent`. `parent`의 마지막 `parent`가 `root`  
  ```js
    while(i != id[i]){
      i = id[i]
    }
  ```
  `Long skinny tree`가 될수록 비용이 커짐
1. Union  
  `id[] = [0, 1, 9, 4, 9, 6, 6, 7, 8, 9]` -> `union(3, 5)`  
  `p`의 `root` = `id[3] = id[4] = id[9] = 9`  
  `q`의 `root` = `id[5] = id[6] = 6`  
  => `p`의 `root`인 `id[9]`의 값을 `6`으로 바꿔준다  
  최대 `N`번의 접근

## 향상된 quick union
동적 연결성(Dynamic connectivity) 문제를 해결하기 위함

### 가중치 (weighting)
`union` 시 큰 트리를 작은 트리 아래에 넣지않음  
`tree`의 `size`를 계속 트래킹 (`weighting`을 위한 추가 `ary` 사용)

`id[] = [0, 9, 6, 5, 4, 2, 6, 1, 0, 5]` -> `union(3, 8)`  
`id[3] = id[5] = id[2] = id[6]`, `id[8] = id[0]`  
  이 때 `8`의 `tree`가 작기 때문에 `3`의 `root`를 따름
=> 평균 거리가 짧아짐
```js
  i = root(p)
  j = root(q)
  if(sz[i] < sz[j])
    id[i] = j; sz[j] += sz[i]
  else
    id[j] = i; sz[i] += sz[j]
```
node x의 최대 깊이가 클수록 트리는 최소 2배의 노드를 가짐
  - x가 속한 tree 크기가 최대 log<sub>2</sub>N배만큼 커짐
  - 1 ~ log<sub>2</sub>N번 = 2배 = N
union = log<sub>2</sub>N
  - N이 100만 ~ 10억일 때 20~30의 비용

### 경로 압축 (path compress)
node p의 `root`를 찾으려면 모든 단계의 노드를 찾아야 함  
=> 모든 경로의 노드가 `root`를 가리키게 만듬 (flatten tree)  
간단히 `root`를 찾을 때 `id[i] = id[id[i]]`로 grand parent를 찾을 수 있음

### 가중치와 경로 압축을 합친 QU
node n을 M번 union, find해도 c(N+M log<sup>\*</sup> N) 시간 소요  
 - _log<sup>\*</sup> N : N을 1로 바꾸기 위해 logN을 취해야하는 횟수_

## Percolation (침투)
N * N의 격자에는 `open`, `block` 상태가 있으며 `p`의 확률로 열리고 `1-p`의 확률로 닫힌다  
격자의 상단에서 하단까지 open된 셀들이 연결되면 percolated된 것이다.

> ### Monte carlo simulation
기본은 모두 닫혀있으며 랜덤으로 오픈된다.  
0 ~ N<sup>2-1</sup>의 노드를 생성하고 최상단, 최하단에 가상의 노드를 추가한다. _추가 노드없이 탐색하는 경우 N<sup>2</sup>의 탐색 시간이 소요된다_

<section class="tabs-container">
  <input name="tab" id="eng-tab" type="radio" checked />
  <blockquote class="tab-content">
    <h3>Social network connectivity</h3>
    Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. The running time of your algorithm should be `m log n` or better and use extra space proportional to `n`<br/>
    Given a social network containing `n` members and a log file containing `m` timestamps at which times pairs of members formed friendships, design an algorithm to determine the earliest time at which all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend).<br/>
    Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. The running time of your algorithm should be `m log n` or better and use extra space proportional to `n`.
  </blockquote>
  <input name="tab" id="kor-tab" type="radio" checked />
  <blockquote class="tab-content">
    <h3>`n`명의 멤버를 가진 소셜 네트워크</h3>
    한 쌍의 멤버들이 우정을 만든 시간에 대한 `m`개의 타임스탬프들이 포함된 로그파일이 있다.<br/>
    가장 짧은 시간 안에 모든 멤버들이 연결되는 알고리즘을 설계해라. (예를 들어 모든 맴버들이 친구의 친구의 친구인 경우)<br/>
    로그 파일이 타임스탬프 기준으로 정렬되어있고 우정은 동등한 값으로 가정한다.<br/>
    알고리즘의 실행 시간은 `m log n` 이상이고 `n`에 비례하는 추가 공간을 사용해야한다.<br/>
  </blockquote>
  <div class="tabs-label">
    <label for="eng-tab">Eng</label>
    <label for="kor-tab">Kor</label>
  </div>
</section>

> Union-find with specific canonical element. Add a method `find()` to the union-find data type so that `find(i)` returns the largest element in the connected component containing `i`. The operations, `union()`, `connected()`, and 
`find()` should all take logarithmic time or better.
For example, if one of the connected components is `{1,2,6,9}`, then the `find()` method should return `9` for each of the four elements in the connected components.

> Successor with delete. Given a set of `n` integers `S={0,1,...,n−1}` and a sequence of requests of the following form:
> - Remove `x` from `S`
> - Find the successor of `x`: the smallest `y` in `S` such that `y≥x`
>
> design a data type so that all operations (except construction) take logarithmic time or better in the worst case.