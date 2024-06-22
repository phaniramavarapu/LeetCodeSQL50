
-- Create the Customers table
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    contact_name VARCHAR(100),
    country VARCHAR(50)
);

-- Create the Products table
CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the Orders table
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Create the OrderDetails table
CREATE TABLE OrderDetails (
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);


-- Insert data into the Customers table
INSERT INTO Customers (customer_name, contact_name, country) VALUES
('Customer A', 'Contact A', 'USA'),
('Customer B', 'Contact B', 'Canada'),
('Customer C', 'Contact C', 'UK');

-- Insert data into the Products table
INSERT INTO Products (product_name, price) VALUES
('Product X', 19.99),
('Product Y', 29.99),
('Product Z', 39.99);


-- Insert data into the Orders table
INSERT INTO Orders (order_date, customer_id) VALUES
('2024-01-01', 1),
('2024-02-01', 2),
('2024-03-01', 3),
('2024-04-01', 1);


-- Insert data into the OrderDetails table
INSERT INTO OrderDetails (order_id, product_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 1, 1),
(2, 3, 2),
(3, 2, 3),
(4, 1, 1),
(4, 3, 1);


-- Query Customers table
SELECT * FROM Customers;

-- Query Products table
SELECT * FROM Products;

-- Query Orders table
SELECT * FROM Orders;

-- Query OrderDetails table
SELECT * FROM OrderDetails;

--get the details of all orders along with customer names

select Orders.order_id, Orders.order_date, Customers.customer_name
from Orders
left JOIN Customers
on Orders.customer_id = Customers.customer_id

--get all the customers and the orders 

select * from Customers

select * from Orders
