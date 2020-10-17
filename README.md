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

## Business Logic

### Users

1. **create users**
    this will create a user with random username


### Posts

1. **create post**
    this will create a new post, required fields are : 
        - username (author of the post)
        - title
        - body

2. **show all posts**
    list all existing posts, we should have a following filtering support
        - filter by username
        - filter by title

3. **edit post**
    TBD

4. **delete post**
    TBD


## Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**



