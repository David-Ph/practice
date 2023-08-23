-- wildcards is similar to regex
-- where it will match a string
-- find any clients who are an LLC
-- % = any number of characters
SELECT * 
FROM client 
WHERE client_name LIKE '%LLC'; -- if it's any number of characters, than LLC in the end, then return it

-- FIND ANY BRANCH SUPPLIERS WHO ARE IN LABEL BUSINESS
SELECT *
FROM branch_supplier
WHERE supplier_name LIKE '% Label%'; -- this will match if the supplier_name has the word label in it somewhere

-- FIND ANY EMPLOYEE BORN IN OCTOBER
SELECT *
FROM employee 
WHERE birth_date LIKE '____-10%'; -- this will match any 4 char, a dash, and 10, and a dash, and any number of chars

-- FIND any clients who are schools
SELECT * 
FROM client
WHERE client_name LIKE '%school%'; -- this will match any client_name who has the word school in it


