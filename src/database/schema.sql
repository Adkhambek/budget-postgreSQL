CREATE DATABASE mvc;

CREATE TABLE expanses(
    id serial primary key,
    name varchar(128) not null,
    cost int not null,
    date timestamptz default current_timestamp
);

CREATE TABLE income(
    id serial primary key,
    name varchar(128) not null,
    cost int not null,
    date timestamptz default current_timestamp
);

INSERT INTO expanses(name, cost) VALUES ('Ovqat', 500);
INSERT INTO expanses(name, cost) VALUES ('Kvartira', 1200);
INSERT INTO income(name, cost) VALUES ('Ish', 3000);
INSERT INTO income(name, cost) VALUES ('Business', 2000);

SELECT * FROM users;

