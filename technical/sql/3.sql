-- ? Data Types
-- INT      => Whole number
-- Decimal(m, n) => Decimal numbers -> (m is total length of number, n is how many numbers behind the dot)
-- VARCHAR(l) => string of length (l)
--  BLOB => Binary Large Objects => Files or images
--  DATE => YYYY-MM-DD
--  TIMESTAMP => YYYY-MM-DD HH:MM:SS

-- ? CREATE, DROP, AND ALTER TABLE

-- CREATE and TABLE are SQL reserve words
-- these commands will create a table
-- by convention, write in all caps
CREATE TABLE student(
    student_id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL, -- NOT NULL means that name can not be null
    major VARCHAR(20) UNIQUE -- UNIQUE means that the major field has to be unique for each row in this table
);

DESCRIBE student -- will describe details of student tables

DROP TABLE student -- will delete table student

ALTER TABLE student ADD gpa DECIMAL(3, 2) -- will edit student table and add a new column called gp, that will be a DECIMAL data type

ALTER TABLE student DROP COLUMN gpa; -- will edit student table and remove a column called gpa

-- ? INSERT DATA INTO TABLE

INSERT INTO student VALUES(
    -- we want to input informations, according to the order
    -- we created the tables in
    1, 'Jack', 'Biology'
); -- always end with semicolons

INSERT INTO student(student_id, name) VALUES(2, 'Kata'); -- this will insert only on student_id and name column, but not major column

SELECT * FROM student; -- this will get all data from student table

CREATE TABLE student(
    student_id INT PRIMARY KEY AUTO_INCREMENT, -- auto increment will automatically increment this field
    name VARCHAR(20), 
    major VARCHAR(20) DEFAULT 'undecided' -- this will give major a default value of 'undecided'
);

INSERT INTO student(name) VALUES('Jack'); -- because id will auto increment, and major has default value, this will
-- result in (1, 'Jack', 'undecided')

-- ? UPDATE AND DELETE

UPDATE student
SET major = 'Bio'
WHERE major  = 'Biology'; -- UPDATE student table, and change the Biology major into Bio

UPDATE student
SET major = 'Comp Sci'
WHERE major  = 'Computer Science'; -- UPDATE student table, and change the Computer Scienece major into Comp Sci

UPDATE student
SET major = 'Comp Sci'
WHERE student_id = 4; -- UPDATE student table

UPDATE student
SET major = 'Biochemistry'
WHERE major = 'Bio' OR major = 'Chemistry'; -- UPDATE student table

UPDATE student
SET name = 'Tom', major = 'undecided'
WHERE student_id = 1; -- UPDATE 2 columns in a row of student table

UPDATE student
SET major = 'undecided'; -- update every single data in column major

DELETE FROM student; -- delete all rows

DELETE FROM student
WHERE student_id = 5; -- delete row with student_id of 5

DELETE FROM student 
WHERE name = 'Tom' AND major = 'undecided'; -- delete row with stuident name of tom and major of undecided


-- ? BASIC QUERY

SELECT * FROM student; -- query for every single row from student table

SELECT name FROM student; -- query for only name column from student table

SELECT name, major FROM student; -- query for only name and major column from student table

SELECT student.name, student.major FROM student 
ORDER BY name DESC; -- query from studente table and order by name in descending order

SELECT student.name, student.major FROM student 
ORDER BY major, student_id; -- query from studente table and order by major first, then by student_id

SELECT * FROM student ORDER BY student_id LIMIT 2; -- only get 2 row from student table

SELECT * FROM student
WHERE major = 'Biology' OR name = 'Kate'; -- only query for students with major biology or name is kate

-- <, >, <=, >=, =, <>, AND, OR

SELECT * FROM student
WHERE name IN ('Claire', 'Kate', 'Mike') AND student_id > 2; -- if name is claire, kate, or mike, then select that row
-- and student_id is greater than 2


-- ? COMPANY DATABASE INTO
-- create table employee
-- cannot set branch id as foreign key yet
-- because branch id has not benen created
CREATE TABLE employee(
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    birth_day DATE,
    sex VARCHAR(1),
    salary INT,
    super_id INT,
    branch_id INT
);

-- create table branch
CREATE TABLE branch(
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

-- edit table employee
-- to add foreign key of branch id and super id
ALTER TABLE employee
ADD FOREIGN KEY(branch_id)
REFERENCES branch(branch_id)
ON DELETE SET NULL;

ALTER TABLE employee
ADD FOREIGN KEY(super_id)
REFERENCES employee(emp_id)
ON DELETE SET NULL;

-- create table client
CREATE TABLE client(
    client_id INT PRIMARY KEY,
    client_name VARCHAR(40),
    branch_id INT,
    FOREIGN KEY(branch_id) REFERENCES brancH(branch_id) ON DELETE SET NULL
);

-- create table works_with
CREATE TABLE works_with(
    emp_id INT,
    client_id INT,
    total_sales INT,
    PRIMARY KEY(emp_id, client_id),
    FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE SET CASCADE,
    FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE SET CASCADE
);

-- Create table branch_supplier
CREATE TABLE branch_supplier(
    branch_id INT,
    supplier_name VARCHAR(40),
    supply_type VARCHAR(40),
    PRIMARY KEY(branch_id, supplier_name),
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
);

-- ? INSERTING DATA 
-- insert first data into employee table
-- because branch has no data yet, set branch_id to null
INSERT INTO employee VALUES(100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);
-- create branch
INSERT INTO branch VALUES(1, 'Corporate', 100, '2006-02-09');
-- then update employee to add branch_id
UPDATE employee
SET branch_id = 1
WHERE emp_id = 100;

INSERT INTO employee VALUES(101, 'Jan', 'Levinson', '1960-05-11', 'F', 110000, 100, 1);

-- another example from another branch
INSERT INTO employee VALUES(102, 'Michael', 'Scott', '1964-03-15', 'M', 250000, NULL, NULL);

INSERT INTO branch VALUES(2, 'Scranton', 102, '1992-04-06');

UPDATE employee
SET branch_id = 2
WHERE emp_id = 102;

INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 80000, 102, 2);
INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1971-06-25', 'F', 80000, 102, 2);
INSERT INTO employee VALUES(105, 'Stanley', 'Hudson', '1971-06-25', 'M', 80000, 102, 2);

-- YET ANOTHER EXAMPLE
INSERT INTO employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 300000, NULL, NULL);

INSERT INTO branch VALUES(3, 'Stamford', 106, '1998-02-13');

UPDATE employee
SET branch_id = 3
WHERE emp_id = 106;

INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 75000, 103, 3);
INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1973-07-22', 'M', 75000, 103, 3);

-- INSERT INTO BRANCH SUPPLIER
INSERT INTO branch_supplier(2, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier(2, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier(3, 'Patriot Paper', 'Paper');
INSERT INTO branch_supplier(2, 'J.T. Forms & Labels', 'Custom Forms');
INSERT INTO branch_supplier(3, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier(3, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier(3, 'Stamford Lables', 'Custom Forms');

-- INSERT INTO CLIENT
INSERT INTO client VALUES(400, 'Dunmore Highschool', 2);
INSERT INTO client VALUES(401, 'Lackawana Country', 2);
INSERT INTO client VALUES(402, 'FedEx', 3);
INSERT INTO client VALUES(403, 'John Daly Law, LLC', 3);
INSERT INTO client VALUES(404, 'Scranton Whitepages', 2);
INSERT INTO client VALUES(405, 'Times Newspaper', 3);
INSERT INTO client VALUES(406, 'FedEx', 2);

-- INSERT INTO works_with
INSERT INTO works_with VALUES(105, 400, 55000);
INSERT INTO works_with VALUES(102, 401, 267000);
INSERT INTO works_with VALUES(108, 402, 22500);
INSERT INTO works_with VALUES(107, 403, 5000);
INSERT INTO works_with VALUES(108, 404, 12000);
INSERT INTO works_with VALUES(105, 405, 33000);
INSERT INTO works_with VALUES(107, 406, 26000);
INSERT INTO works_with VALUES(102, 406, 16000);

-- CHECK ALL TABLES
SELECT * FROM employee;
SELECT * FROM works_with;

-- ? MORE BASIC QUERIES

-- FIND ALL EMPLOYEES

SELECT * 
FROM employee;

-- FIND ALL CLIENTS
SELECT *
FROM client

-- FIND ALL EMPLOYES ORDERED BY SALARY
SELECT *
FROM employee 
ORDER BY salary DESC;

-- FIND ALL EMPLOYEES ORDERED BY SEX THEN NAME
SELECT * 
FROM employee 
ORDER BY sex, first_name, last_name LIMIT 5;

SELECT first_name AS Forename, last_name AS Surname
FROM employee;

--Find out all the different genders
SELECT DISTINCT sex 
FROM employee;