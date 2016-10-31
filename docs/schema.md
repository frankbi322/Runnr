# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## routes

Ken: Use associations: A Route has_many waypoints. Waypoints should be a separate table with a coordinates column. This will make editing routes easier.

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed
map_info    | text      | not null JSON string

## runs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
route_id    | integer   | not null, foreign key
title       | string    | not null
description | text      |
distance    | float     |
date        | date      | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
route_id    | string    | not null
body        | text      | not null

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
name        | string    | not null
