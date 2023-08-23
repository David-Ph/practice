-- how to delete entries on rows
-- that has a foreign key

CREATE TABLE branch(
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

-- on delete set null, if the references are deleted, that column on that specific row will be set on NULL
-- on delete set cascade, that row will just be deleted
-- if a foreign key of something is the primary key
-- it's a good idea to use on delete set cascade
-- because a primary key can't be null

DELETE FROM employee 
WHERE emp_id = 102;