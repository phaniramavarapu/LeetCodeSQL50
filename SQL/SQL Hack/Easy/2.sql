-- Create STATION table
CREATE TABLE STATION (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CITY VARCHAR(50)
);

-- Insert sample data
INSERT INTO STATION (CITY) VALUES
    ('New York'),
    ('Los Angeles'),
    ('Chicago'),
    ('San Francisco'),
    ('Seattle'),
    ('Boston'),
    ('Houston'),
    ('Miami'),
    ('Dallas'),
    ('Philadelphia');

    select * from STATION

(select city, length(city) as city_length 
from station
order by city_length, CITY
limit 2 offset 5)
union all
(
(select city, length(city) as city_length 
from station
order by city_length desc, city
limit 1))