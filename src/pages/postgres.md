---
title: Postgres
date: 2019-10-31
---
### pg_hba.conf
- `/usr/local/var/postgres/pg_hba.conf`
- `/System/Volumes/Data/usr/local/var/postgres/pg_hba.conf`

### Start
- `brew tap homebrew/services`
- `brew services [start/stop/restart] postgresql`

### Database
- `createdb/dropdb [name]`
- `psql [db name] [user name]`
- `create user [name] with password '[pwd]';`
- `exit` or `\q`

### Check the status
- `\c` : `You are now connected to database "[name]" as user "[name]".`
- Current port : `select * from pg_settings where name = 'port';`
