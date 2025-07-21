---
title: Delete query
date: 2020-10-20
tags: [SQL]
spoiler: 고유값이 없는 테이블의 중복 레코드 삭제
---

# 중복값 조회
```sql
SELECT sd1, sd2, count(*)
FROM tbl
GROUP BY sd1, sd2
HAVING count(*) > 1;
```
유니크하지않지만 각각의 정보를 식별할 수 있는 컬럼을 통해 중복된 값을 조회한다.

# 중복 값 삭제
```sql
BEGIN TRAN
DELETE tmp FROM (
    SELECT *, idx = ROW_NUMBER() OVER (PARTITION BY sd1 ORDER BY sd1)
    FROM tbl 
    WHERE sd1 ='sth' AND sd2='sth'
    ) tmp
WHERE idx > 1;

SELECT *
FROM tbl
WHERE sd1 ='sth' AND sd2='sth';
--Rollback TRAN
--COMMIT TRAN 
```
식별값을 기준으로 조회한 값이 들어있는 임시 테이블에 임시 index가 들어있는 컬럼을 만든다.  
중복된 레코드는 인덱스가 1이 아닌 값을 가지므로 1이 아닌 인덱스는 삭제한다.  
임시 테이블과 실제 테이블 이름이 들어가야 할 곳을 헷갈리면 안된다