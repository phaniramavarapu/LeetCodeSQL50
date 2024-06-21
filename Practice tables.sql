-- Create the Customers table
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    contact_name VARCHAR(100),
    country VARCHAR(50)
);

-- Create the Orders table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
DROP table Products
-- Create the Products table
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Create the OrderDetails table
CREATE TABLE OrderDetails (
    order_detail_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT
    
);

drop table OrderDetails

-- Insert data into the Customers table
INSERT INTO Customers (customer_id, customer_name, contact_name, country) VALUES
(1, 'Customer A', 'Contact A', 'USA'),
(2, 'Customer B', 'Contact B', 'Canada'),
(3, 'Customer C', 'Contact C', 'UK');

SELECT * FROM Customers
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
INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity) VALUES
(123, 1, 1, 2),
(456, 1, 2, 1),
(789, 2, 1, 1),
(011, 2, 3, 2),
(022, 3, 2, 3),
(033, 4, 1, 1),
(044, 4, 3, 1);


select * from Customers;
select * from Products;
select * from Orders;
select * from OrderDetails;

-- Create the table
CREATE TABLE salesman (
    salesman_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    commission DECIMAL(3, 2) NOT NULL
);

-- Insert data into the table
INSERT INTO salesman (salesman_id, name, city, commission) VALUES
(5001, 'James Hoog', 'New York', 0.15),
(5002, 'Nail Knite', 'Paris', 0.13),
(5005, 'Pit Alex', 'London', 0.11),
(5006, 'Mc Lyon', 'Paris', 0.14),
(5007, 'Paul Adam', 'Rome', 0.13),
(5003, 'Lauson Hen', 'San Jose', 0.12);


