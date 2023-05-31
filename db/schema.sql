DROP DATABASE IF EXISTS tracking_db;
CREATE DATABASE tracking_db;

USE tracking_db 

CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) 
);

CREATE TABLE roles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL, 
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id), 
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);
