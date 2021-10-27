SELECT * FROM Customers
WHERE Country IN ('Norway', 'France');

SELECT * FROM Customers
WHERE Country NOT IN ('Norway', 'France');

SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE ProductName BETWEEN 'Alice' AND 'Charlie';

SELECT CustomerName,
Address,
PostalCode as Pno
FROM Customers;

SELECT *
FROM Customers AS Consumers;

SELECT *
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;

SELECT *
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;


SELECT *
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;

SELECT COUNT(CustomerID),
Country
FROM Customers
GROUP BY Country;


SELECT COUNT(CustomerID),
Country
FROM Customers
GROUP BY COUNTRY
ORDER BY COUNT(CustomerID) DESC;

