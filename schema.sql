DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

\c employee_tracker;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) UNIQUE NOT NULL
)

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT NOT NULL,
)

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
)



