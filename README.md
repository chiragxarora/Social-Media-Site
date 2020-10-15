# Social Media Sample Project

## Database Setup

```shell
$ mysql -u root -p

$ Enter Password : *********
```

```mysql
create database socialmediadb;

create user socialmediauser identified by '*********';

grant all privileges on socialmediadb.* to socialmediauser;

flush privileges;
```

## Project Structure

