---
title: "여정 of 분산 쿼리"
date: "2020-09-25"
tags: ["SQL"]
---

_안된다._  
_이 시대에 분산 쿼리라니_  
_요즘 세상에 [linked server](https://docs.microsoft.com/en-us/sql/relational-databases/linked-servers/linked-servers-database-engine?view=sql-server-ver15)라니_

---

모델은 간단하다.  
`서버 a`에서 `서버 b`의 테이블을 조인으로 연결해 조회하면 된다.  
살짝 역겨운 것은 10개의 테이블을 `UNION ALL`한 `뷰`가 본 서버의 대상 테이블이다

&nbsp;

1. 일반 `outer join`
```sql
SELECT a.*, i.*
FROM a_tbl a
LEFT OUTER JOIN OPENQUERY(i, 'SELECT * FROM db.dbo.tbl') i ON a.id = i.id
ORDER BY a.date DESC
OFFSET 1 ROWS FETCH NEXT 100 ROWS ONLY;
```
*놀랍지 않겠지만 반올림한 50초의 실행시간이 걸린다.*

&nbsp;

2. 임시 테이블
```sql
WITH i AS (SELECT * FROM OPENQUERY(i, 'SELECT id FROM db.dbo.tbl'))
SELECT *
FROM a_tbl a
LEFT OUTER JOIN i ON a.id = i.id
ORDER BY a.date DESC
OFFSET 0 ROWS FETCH NEXT 100 ROWS ONLY;
```
*여전히 무난한 40초*

&nbsp;

3. 사전 정의된 조건절  
`sql` quote의 escape는 두번 사용이다
```sql
DECLARE @tmp VARCHAR(5000);
SET @tmp = ''
SELECT @tmp = @tmp + '''''' + id + ''''','
FROM (SELECT id, status FROM a_tbl 
        ORDER BY date DESC
        OFFSET 0 ROWS FETCH NEXT 100 ROWS ONLY) a
WHERE a.status IS NOT NULL  
DECLARE @sql VARCHAR(5000);
SET @sql = 'SELECT *
        FROM a_tbl a
        LEFT OUTER JOIN OPENQUERY(i,  
                ''SELECT id FROM db.dbo.tbl
                WHERE id IN ('+LEFT(@tmp, LEN(@tmp) -1)+')'') i
        ON a.id = i.id
        ORDER BY a.date DESC
        OFFSET 1 ROWS FETCH NEXT 100 ROWS ONLY'
EXEC SP_SQLEXEC @sql;
```
*20초*

&nbsp;

4. 사전 정의된 조건절 2  
변수에 할당된 길이를 다 사용하여 query가 잘렸었다. *정말 다 쓸 줄이야..*
```sql
DECLARE @tmp VARCHAR(7000);
SET @tmp = '';
SELECT @tmp = @tmp + '''''' + id + ''''','
FROM a_tbl a
ORDER BY a.date DESC
OFFSET 0 ROWS FETCH NEXT 100 ROWS ONLY;
SET @tmp = LEFT(@tmp, LEN(@tmp) -1);  
DECLARE @sql VARCHAR(max);
SET @sql = 'SELECT *
        FROM a_tbl a
        LEFT OUTER JOIN OPENQUERY(i, 
                ''SELECT id FROM db.dbo.tbl WHERE id IN ('+@tmp+')'') i 
        ON a.id = i.id 
        WHERE a.id in ('+replace(@tmp,'''''','''')+') 
        ORDER BY a.date DESC';
exec sp_sqlexec @sql;
```
*10초 안쪽으로도 나오지만 여전히 느리다*

&nbsp;

- 다른 쿼리  
```sql
SELECT a.*, b.*, (SELECT TOP 1 status FROM server_name.db.dbo.tbl WHERE id = a.id)
FROM a_tbl a
ORDER BY a.date DESC
OFFSET 0 ROWS FETCH NEXT 100 ROWS ONLY
```
*20초*  
`ORDER BY`가 들어가지 않으면 1초대의 실행시간을 보인다

&nbsp;

어떤 쿼리든 `execution plan`을 보면 view의 테이블 중 백만개의 recode가 들어가있는 테이블의 `clustered index scan`이 cost의 상당수를 잡아먹는다  