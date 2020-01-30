DROP DATABASE IF EXISTS wildcircusreloaded;

CREATE DATABASE wildcircusreloaded;

USE wildcircusreloaded;

CREATE TABLE user (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR (320) NOT NULL,
    password VARCHAR (100) NOT NULL,
    firstname VARCHAR (100) NOT NULL,
    lastname VARCHAR (100) NOT NULL,
    role VARCHAR (15) NOT NULL,
    date TIMESTAMP NOT NULL
);

CREATE TABLE guest (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) NOT NULL
);

CREATE TABLE ticket (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    qrcode VARCHAR (400) NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user (id),
    guest_id INT,
    FOREIGN KEY (guest_id) REFERENCES guest (id)
);

CREATE TABLE activity (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR (1000) NOT NULL,
    name VARCHAR (400) NOT NULL
);

CREATE TABLE wilder (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    description VARCHAR (1000) NOT NULL,
    biography VARCHAR (1000) NOT NULL,
    image VARCHAR (1000) NOT NULL
);