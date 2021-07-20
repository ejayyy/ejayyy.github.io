---
title: Git 명령어
date: 2020-11-04
spoiler: 잘 외워지지 않는 명령어
---

## 파일을 트래킹하지 않는 명령어  
    `git update-index --assume-unchanged [file]`
## pushed commit을 없애고 새로 커밋
    1. `git reset [recoverCommitId]`
    1. `git add .`
    1. `git commit`
    1. `git push --force`