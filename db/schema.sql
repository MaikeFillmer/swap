### Schema
CREATE DATABASE swap_db;
USE swap_db;

CREATE TABLE employees
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    company varchar(255) NOT NULL,
	date TIMESTAMP DEFAULT now() ON UPDATE now(),
	PRIMARY KEY (id)
);


CREATE TABLE listings
(
	item_id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    pictures varchar(255) NOT NULL,
    emp_id int,
	date TIMESTAMP DEFAULT now() ON UPDATE now(),
	PRIMARY KEY (item_id),
    FOREIGN KEY (emp_id) REFERENCES employees(id)
);
