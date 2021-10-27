INSERT INTO branch VALUES(4, 'Buffalo', NULL, NULL);

-- JOIN is used to combine rows from two or more tables based on the related column
-- this is an inner join, where they will combine rows from employee table and branch table
-- whenever they have a shared column
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
JOIN branch -- will join the employee and branch together
ON employee.emp_id = branch.mgr_id; -- on specific column they have in common
-- only employees that has the same emp_id as the one in branch.mgr_id 
-- will be joined together in the same table

-- left join
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
LEFT JOIN branch -- will also include all employees who doesnt share a common column
ON employee.emp_id = branch.mgr_id;

-- right join
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
RIGHT JOIN branch -- will not include employees who doesnt share a common column, but will include ALL the branch table(right)
ON employee.emp_id = branch.mgr_id;

-- inner join
-- right join
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
INNER JOIN branch -- Returns records that have matching values in both tables
ON employee.emp_id = branch.mgr_id;