CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
);