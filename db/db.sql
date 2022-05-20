CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE IF NOT EXISTS employees (
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) default NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
(1, "Ryan Tay", 2000),
(2, "Joe McMilan", 2500),
(3, "Marta Margareth", 3000);

/*SELECT * FROM employees;
