-- Create STATION table
CREATE TABLE STATION1 (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CITY VARCHAR(50)
);

-- Insert sample data
INSERT INTO STATION1 (CITY) VALUES
    ('New York'),
    ('Los Angeles'),
    ('Austin'),
    ('Miami'),
    ('Seattle'),
    ('Orlando'),
    ('Denver'),
    ('Chicago');
select DISTINCT city
from STATION1
where lower(
        substring(city, 1, 1) in ('a', 'e', 'i', 'o', 'u')
    )


SELECT SUBSTRING_INDEX('john.doe@example.com', '@', 1) AS result;

select SUBSTRING_INDEX('aappccdd', 'c' , -1)

select SUBSTRING_INDEX('john.doe@example.com', '@', -1)

SELECT right('Hello World', 1, 1);

select DISTINCT city as x
from STATION1
where lower(substring(city, 1, 1) in ('a', 'e', 'i', 'o', 'u')) and (right(city, 1) in ('a', 'e', 'i', 'o', 'u'))

select SUBSTRING_INDEX




