-- union is a special sql oprator
-- which we can use to combine the result of multiple select 
-- statements into one
-- they have to have same data types
SELECT first_name AS Company_Names
FROM employee
UNION -- THIS WILL combine both these queries into a single column
SELECT branch_name
FROM branch
UNION 
SELECT client_name
FROM client;

-- find a list of all clients % branch suppliers names
SELECT client_name, client.brancH_id
FROM client
UNION 
SELECT supplier_name, branch_supplier.branch_id
FROM branch_supplier;

-- find a list of all money spent or earned by the company
SELECT salary 
FROM employee
UNION
SELECT total_sales
FROM works_with;