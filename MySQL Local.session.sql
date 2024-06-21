-- Create the Employees table
CREATE TABLE Employees1 (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Insert the provided data into the Employees table
INSERT INTO Employees1 (id, name) VALUES
(1, 'Alice'),
(7, 'Bob'),
(11, 'Meir'),
(90, 'Winston'),
(3, 'Jonathan');

-- Create the EmployeeUNI table
CREATE TABLE EmployeeUNI (
    id INT PRIMARY KEY,
    unique_id INT
);

-- Insert the provided data into the EmployeeUNI table
INSERT INTO EmployeeUNI (id, unique_id) VALUES
(3, 1),
(11, 2),
(90, 3);

select * from Employees1;
select * from EmployeeUNI


select Employees1.name, EmployeeUNI.unique_id
from Employees1
LEFT JOIN EmployeeUNI
on Employees1.id = EmployeeUNI.unique_id



SELECT Employees1.id, Employees1.name, EmployeeUNI.unique_id
FROM Employees1
LEFT JOIN EmployeeUNI
ON Employees1.id = EmployeeUNI.id;

SELECT EmployeeUNI.unique_id, Employees.name
FROM Employees
LEFT JOIN EmployeeUNI
ON Employees.id = EmployeeUNI.id;


