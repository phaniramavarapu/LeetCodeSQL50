CREATE TABLE products (
    product_id INT PRIMARY KEY,
    low_fats CHAR(1),
    recyclable CHAR(1)
);

select * from products

INSERT INTO products (product_id, low_fats, recyclable) VALUES
(0, 'Y', 'N'),
(1, 'Y', 'Y'),
(2, 'N', 'Y'),
(3, 'Y', 'Y'),
(4, 'N', 'N');

--Write a solution to find the ids of products that are both low fat and recyclable.

--Return the result table in any order.



--Write your MySQL query statement below
select product_id
from Products
where low_fats = 'Y' and recyclable = 'Y'