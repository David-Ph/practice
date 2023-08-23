-- Find the number of employees
SELECT COUNT(emp_id) -- this will give you how many rows are the in the emp_id column
FROM employee;

-- FIND THE NUMBER OF FEMALE EMPLOYEES THAT'S BORN AFTER 1970
SELECT COUNT(super_id)
FROM employee
WHERE sex = 'F' AND birth_date >= '1971-01-01';

-- find the average of all male employee's salary
SELECT AVG(salary)
FROM employee
WHERE sex = 'M';

-- find sum of all employee's salary
SELECT SUM(salary)
FROM employee;

-- find out how many males and females there are
SELECT COUNT(sex), sex -- just this line will give you 9 M
FROM employee
GROUP BY sex; -- this will give you 3F and 6M

-- find the total sales of each salesman
SELECT SUM(total_sales), emp_id  -- will give you [TOTAL SALES] [EMP_ID]
FROM works_with 
GROUP BY emp_id;                -- will split and group the total sales by emp_id

-- FIND HOW MUCH EACH CLIENT SPENDS
SELECT SUM(total_sales), client_id 
FROM works_with 
GROUP BY client_id;