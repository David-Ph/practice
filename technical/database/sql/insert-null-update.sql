INSERT INTO customers(
    CustomerName,
    Address, 
    City, 
    PostalCode,
    Country
) VALUES (
    'Hekkan Burger',
    'Gatevein 15',
    'Sandes',
    '4306',
    'Norway'
);

SELECT * FROM customers 
WHERE PostalCode IS NULL;

SELECT * FROM customers
WHERE POstalCode IS NOT NULL;

UPDATE Customers 
SET City = 'Oslo';

UPDATE customers 
SET City = 'Oslo';
WHERE City = 'Norway';

UPDATE customers 
SET City = 'Oslo', Country = 'Norway'
WHERE CustomerID = 32;