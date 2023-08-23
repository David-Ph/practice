SELECT * FROM Customers
WHERE City LIKE '_a%'; -- match where the second character is 'a'

SELECT * FROM Customers
WHERE City LIKE '[acs]%'; -- match where the first character is a or c or s


SELECT * FROM Customers
WHERE City LIKE '[a-f]%'; -- match where the first character is a to f

SELECT * FROM Customers
WHERE City LIKE '[!acf]%';