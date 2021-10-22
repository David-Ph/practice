DELETE FROM customers
WHERE Country = 'Norway';

DELETE FROM customers;

SELECT MIN(Price)
FROM customers;

SELECT MAX(Price)
FROM customers;

SELECT COUNT(*)
FROM products
WHERE Price = 18;

SELECT AVG(Price)
FROM customers;

SELECT SUM(Price)
FROM products;

SELECT * FROM customers
WHERE City LIKE 'a%';

SELECT * FROM customers
WHERE City LIKE '%a';

SELECT * FROM customers
WHERE City LIKE '%a%';

SELECT * FROM customers
WHERE City LIKE 'a%b';

SELECT * FROM customers
WHERE City NOT LIKE 'a%';