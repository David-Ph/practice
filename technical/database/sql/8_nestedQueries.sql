-- when we want to query for very specific information

-- find names of all employees who have
-- sold over 30.000 to a single client
-- so essentially, what this is saying is
-- we want to get first name and last name
SELECT employee.first_name, employee.last_name
FROM employee -- from employee table
WHERE employee.emp_id IN( -- where employee id is IN what gets return below
    SELECT works_with.emp_id -- return emp_id
    FROM works_with -- from works_with table
    WHERE works_with.total_sales > 30000 -- that has more than 30000 sales
);

-- find all clients who are handled by the branch
-- that michael scott manages
-- assume you know michael's ID

SELECT client.client_name
FROM client
WHERE client.branch_id = (
    SELECT branch.branch_id
    FROM branch 
    WHERE branch.mgr_id = 102
    LIMIT 1
);

-- essentially, nested queries are just queries informing another query what they return
-- to get what we want
-- we just use the results from one query to get result from another query
