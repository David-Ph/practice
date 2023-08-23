SELECT * FROM customers;

SELECT CIty FROM customers;

SELECT DISTINCT FROM customers;

SELECT * FROM customers
WHERE City = "Berlin";

SELECT * FROM customers
WHERE NOT City = "Berlin";

SELECT * FROM Customers
WHERE CustomerID = 32;

SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode = 12209;

SELECT * FROM customers
WHERE City = 'Berlin'
OR City = 'London';

SELECT * FROM customers
ORDER BY City;

SELECT * FROM customers
ORDER BY City DESC

SELECT * FROM customers
ORDER BY Country, City