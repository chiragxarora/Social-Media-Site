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

```shell
src
├───controllers         # functions to connect routes to db
├───db                  # db connection and models
├───public              # html/css/js files for static part of website
├───routes              # express middlewares route wise
└───utils               # extra files needed for various functionalities
```