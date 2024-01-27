---
title: Postgres
date: 2019-10-31
---
### pg_hba.conf
- `/usr/local/var/postgres/pg_hba.conf`
- `/System/Volumes/Data/usr/local/var/postgres/pg_hba.conf`

### Start
```bash
brew tap homebrew/services
brew services [start/stop/restart] postgresql
```

### Database
```bash
createdb/dropdb $name
psql $DB_NAME $USER_NAME
create user $NAME with password $PWD
```

### Check the status
- `\c` : `You are now connected to database "[name]" as user "[name]".`
- Current port : `select * from pg_settings where name = 'port';`
