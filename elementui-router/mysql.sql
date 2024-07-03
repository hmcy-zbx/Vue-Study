create database test;
use test;
CREATE TABLE user (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    age VARCHAR(255) NOT NULL,
    email  VARCHAR(255) NOT NULL
);
INSERT INTO user (name, password,age,email) VALUES ('Bob', '123','23','123456@qq.com');
INSERT INTO user (name, password,age,email) VALUES ('Tom', '123','23','123456@qq.com');