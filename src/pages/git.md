---
title: Git 명령어
date: 2020-11-04
spoiler: 잘 외워지지 않는 명령어
---

## 파일을 트래킹하지 않는 명령어  
```bash
git update-index --assume-unchanged [file]
```

## pushed commit을 없애고 새로 커밋
```bash
git reset [recoverCommitId]
git add [files]
git commit
git push --force
```