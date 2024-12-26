--DB Creation and Using statement Statement
CREATE DATABASE handson;

USE DATABASE handson;

-- Create Employee table
CREATE TABLE Employee (
    EMPLOYEE_ID SERIAL PRIMARY KEY,
    FIRST_NAME VARCHAR(50),
    LAST_NAME VARCHAR(50),
    SALARY NUMERIC(10, 2),
    JOINING_DATE DATE,
    DEPARTMENT VARCHAR(50)
);

-- Create Incentives table
CREATE TABLE Incentives (
    EMPLOYEE_REF_ID INT,
    INCENTIVE_DATE DATE,
    INCENTIVE_AMOUNT NUMERIC(10, 2),
    FOREIGN KEY (EMPLOYEE_REF_ID) REFERENCES Employee(EMPLOYEE_ID)
);

-- Insert data into Employee table
INSERT INTO Employee (EMPLOYEE_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
(1, 'Venkatesh', 'S', 100000, '2015-08-28', 'BANKING'),
(2, 'Ragavi', 'P', 75000, '2015-08-28', 'BUSINESS'),
(3, 'Gopinath', 'C', 50000, '2016-03-02', 'PHARMA'),
(4, 'Dinesh', 'G', 50000, '2016-03-02', 'INSURANCE'),
(5, 'Saibabu', 'E', 40000, '2017-07-08', 'SOFTWARE'),
(6, 'Hasan', 'S', 29000, '2017-07-08', 'MANUFACTURING'),
(7, 'Divya', 'P', 33000, '2017-07-08', 'HEALTHCARE'),
(8, 'Aravindan', 'R', 40000, '2017-07-08', 'HEALTHCARE'),
(9, 'Sathish', 'MD', 45000, '2016-03-02', 'AUTOMOBILE'),
(10, 'Prasanth', 'PKP', 34000, '2016-03-02', 'INSURANCE'),
(11, 'Vijay', 'R', 25684, '2016-03-02', 'BUSINESS'),
(12, 'Sivakumar', 'K', 54789, '2016-03-02', 'SOFTWARE');

-- Insert data into Incentives table
INSERT INTO Incentives (EMPLOYEE_REF_ID, INCENTIVE_DATE, INCENTIVE_AMOUNT) VALUES
(1, '2016-02-01', 5000),
(2, '2016-02-01', 3000),
(3, '2017-02-01', 4000),
(1, '2017-01-01', 4500),
(2, '2017-01-01', 3500);


-- 1. Get all employee details from the employee table
SELECT * FROM Employee;

-- 2. Get First_Name, Last_Name from employee table
SELECT FIRST_NAME, LAST_NAME FROM Employee;

-- 3. Get First_Name from employee table using alias name "Employee Name"
SELECT FIRST_NAME AS "Employee Name" FROM Employee;

-- 4. Get First_Name from employee table in upper case
SELECT UPPER(FIRST_NAME) FROM Employee;

-- 5. Get First_Name from employee table in lower case
SELECT LOWER(FIRST_NAME) FROM Employee;

-- 6. Get unique DEPARTMENT from employee table
SELECT DISTINCT DEPARTMENT FROM Employee;

-- 7. Select first 3 characters of FIRST_NAME from EMPLOYEE
SELECT LEFT(FIRST_NAME, 3) FROM Employee;

-- 8. Get position of 'a' in name 'ragavi' from employee table
SELECT CHARINDEX('a', 'ragavi') AS Position;

-- 9. Get FIRST_NAME from employee table after removing white spaces from right side
SELECT RTRIM(FIRST_NAME) FROM Employee;

-- 10. Get FIRST_NAME from employee table after removing white spaces from left side
SELECT LTRIM(FIRST_NAME) FROM Employee;

-- 11. Get length of FIRST_NAME from employee table
SELECT LEN(FIRST_NAME) FROM Employee;

-- 12. Get First_Name from employee table after replacing 'a' with '$'
SELECT REPLACE(FIRST_NAME, 'a', '$') FROM Employee;

-- 13. Get First_Name and Last_Name as single column from employee table separated by a '_'
SELECT CONCAT(FIRST_NAME, '_', LAST_NAME) AS Full_Name FROM Employee;

-- 14. Get FIRST_NAME, Joining year, Joining Month and Joining Date from employee table
SELECT FIRST_NAME, 
       YEAR(JOINING_DATE) AS Joining_Year, 
       MONTH(JOINING_DATE) AS Joining_Month, 
       DAY(JOINING_DATE) AS Joining_Date 
FROM Employee;

-- 15. Get all employee details from the employee table order by First_Name Ascending
SELECT * FROM Employee ORDER BY FIRST_NAME ASC;

-- 16. Get all employee details from the employee table order by First_Name descending
SELECT * FROM Employee ORDER BY FIRST_NAME DESC;

-- 17. Get all employee details from the employee table order by First_Name Ascending and Salary descending
SELECT * FROM Employee ORDER BY FIRST_NAME ASC, SALARY DESC;

-- 18. Get employee details from employee table whose employee name is "Dinesh"
SELECT * FROM Employee WHERE FIRST_NAME = 'Dinesh';

-- 19. Get employee details from employee table whose employee name are "Dinesh" and "Roy"
SELECT * FROM Employee WHERE FIRST_NAME IN ('Dinesh', 'Roy');

-- 20. Get employee details from employee table whose employee name are not "Dinesh" and "Roy"
SELECT * FROM Employee WHERE FIRST_NAME NOT IN ('Dinesh', 'Roy');

-- 21. Get employee details from employee table whose first name starts with 's'
SELECT * FROM Employee WHERE FIRST_NAME LIKE 's%';

-- 22. Get employee details from employee table whose first name contains 'v'
SELECT * FROM Employee WHERE FIRST_NAME LIKE '%v%';

-- 23. Get employee details from employee table whose first name ends with 'n'
SELECT * FROM Employee WHERE FIRST_NAME LIKE '%n';

-- 24. Get employee details from employee table whose first name ends with 'n' and name contains 4 letters
SELECT * FROM Employee WHERE FIRST_NAME LIKE '___n';

-- 25. Get employee details from employee table whose first name starts with 'J' and name contains 4 letters
SELECT * FROM Employee WHERE FIRST_NAME LIKE 'J___';

-- 26. Get employee details from employee table who's Salary greater than 60000
SELECT * FROM Employee WHERE SALARY > 60000;

-- 27. Get employee details from employee table who's Salary less than 80000
SELECT * FROM Employee WHERE SALARY < 80000;

-- 28. Get employee details from employee table who's Salary between 50000 and 80000
SELECT * FROM Employee WHERE SALARY BETWEEN 50000 AND 80000;

-- 29. Get employee details from employee table whose name is venkatesh and ragavi
SELECT * FROM Employee WHERE FIRST_NAME IN ('Venkatesh', 'Ragavi');

-- 30. Get employee details from employee table whose joining year is "2015"
SELECT * FROM Employee WHERE YEAR(JOINING_DATE) = 2015;

-- 31. Get employee details from employee table whose joining month is "January"
SELECT * FROM Employee WHERE MONTH(JOINING_DATE) = 1;

-- 32. Get employee details from employee table who joined before January 1st 2017
SELECT * FROM Employee WHERE JOINING_DATE < '2017-01-01';

-- 33. Get employee details from employee table who joined after January 31st 2016
SELECT * FROM Employee WHERE JOINING_DATE > '2016-01-31';

-- 35. Get Joining Date and Time from employee table
SELECT JOINING_DATE FROM Employee;

-- 36. Get Joining Date, Time including milliseconds from employee table
SELECT CONVERT(DATETIME2, JOINING_DATE) FROM Employee;

-- 37. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT e.EMPLOYEE_ID, DATEDIFF(DAY, e.JOINING_DATE, i.INCENTIVE_DATE) AS Days_Difference
FROM Employee e
JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID;

-- 38. Get database date
SELECT GETDATE() AS Current_Date;

-- 39. Get names of employees from employee table who has '%' in Last_Name
SELECT * FROM Employee WHERE LAST_NAME LIKE '%[%]%';

-- 40. Get Last Name from employee table after replacing special character with white space
SELECT REPLACE(LAST_NAME, '%', ' ') FROM Employee;

-- 41. Get department, total salary with respect to a department from employee table
SELECT DEPARTMENT, SUM(SALARY) AS Total_Salary
FROM Employee
GROUP BY DEPARTMENT;

-- 42. Get department, total salary with respect to a department from employee table order by total salary descending
SELECT DEPARTMENT, SUM(SALARY) AS Total_Salary
FROM Employee
GROUP BY DEPARTMENT
ORDER BY Total_Salary DESC;

-- 43. Get department, no of employees in a department, total salary with respect to a department from employee table order by total salary descending
SELECT DEPARTMENT, COUNT(*) AS Employee_Count, SUM(SALARY) AS Total_Salary
FROM Employee
GROUP BY DEPARTMENT
ORDER BY Total_Salary DESC;

-- 44. Get department wise average salary from employee table order by salary ascending
SELECT DEPARTMENT, AVG(SALARY) AS Avg_Salary
FROM Employee
GROUP BY DEPARTMENT
ORDER BY Avg_Salary ASC;

-- 45. Get department wise maximum salary from employee table order by salary ascending
SELECT DEPARTMENT, MAX(SALARY) AS Max_Salary
FROM Employee
GROUP BY DEPARTMENT
ORDER BY Max_Salary ASC;

-- 46. Get department wise minimum salary from employee table order by salary ascending
SELECT DEPARTMENT, MIN(SALARY) AS Min_Salary
FROM Employee
GROUP BY DEPARTMENT
ORDER BY Min_Salary ASC;

-- 47. Select no of employees joined with respect to year and month from employee table
SELECT YEAR(JOINING_DATE) AS Join_Year, MONTH(JOINING_DATE) AS Join_Month, COUNT(*) AS Employee_Count
FROM Employee
GROUP BY YEAR(JOINING_DATE), MONTH(JOINING_DATE)
ORDER BY Join_Year, Join_Month;

-- 48. Select department, total salary with respect to a department from employee table where total salary greater than 800000 order by Total_Salary descending
SELECT DEPARTMENT, SUM(SALARY) AS Total_Salary
FROM Employee
GROUP BY DEPARTMENT
HAVING SUM(SALARY) > 800000
ORDER BY Total_Salary DESC;

-- 49. Select first_name, incentive amount from employee and incentives table for those employees who have incentives
SELECT e.FIRST_NAME, i.INCENTIVE_AMOUNT
FROM Employee e
INNER JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID;

-- 50. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT e.FIRST_NAME, i.INCENTIVE_AMOUNT
FROM Employee e
INNER JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID
WHERE i.INCENTIVE_AMOUNT > 3000;

-- 51. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives
SELECT e.FIRST_NAME, COALESCE(i.INCENTIVE_AMOUNT, 0) AS INCENTIVE_AMOUNT
FROM Employee e
LEFT JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID;

-- 52. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives and set incentive amount as 0 for those employees who didn't get incentives
SELECT e.FIRST_NAME, COALESCE(i.INCENTIVE_AMOUNT, 0) AS INCENTIVE_AMOUNT
FROM Employee e
LEFT JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID;

-- 53. Select first_name, incentive amount from employee and incentives table for all employees who got incentives using left join
SELECT e.FIRST_NAME, i.INCENTIVE_AMOUNT
FROM Employee e
LEFT JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID
WHERE i.INCENTIVE_AMOUNT IS NOT NULL;

-- 54. Select max incentive with respect to employee from employee and incentives table using sub query
SELECT e.FIRST_NAME, 
       (SELECT MAX(INCENTIVE_AMOUNT) 
        FROM Incentives 
        WHERE EMPLOYEE_REF_ID = e.EMPLOYEE_ID) AS Max_Incentive
FROM Employee e;

-- 55. Select TOP 2 salary from employee table
SELECT TOP 2 SALARY FROM Employee ORDER BY SALARY DESC;

-- 56. Select TOP N salary from employee table
-- Replace N with the desired number
SELECT TOP N SALARY FROM Employee ORDER BY SALARY DESC;

-- 57. Select 2nd Highest salary from employee table
SELECT MAX(SALARY) AS Second_Highest_Salary
FROM Employee
WHERE SALARY < (SELECT MAX(SALARY) FROM Employee);

-- 58. Select Nth Highest salary from employee table
-- Replace N with the desired number
WITH RankedSalaries AS (
    SELECT SALARY, DENSE_RANK() OVER (ORDER BY SALARY DESC) AS SalaryRank
    FROM Employee
)
SELECT SALARY AS Nth_Highest_Salary
FROM RankedSalaries
WHERE SalaryRank = N;

-- 59. Select First_Name, LAST_NAME from employee table as separate rows
SELECT FIRST_NAME AS Name FROM Employee
UNION ALL
SELECT LAST_NAME FROM Employee;

-- 60. What is the difference between UNION and UNION ALL?
-- UNION removes duplicate rows, while UNION ALL keeps all rows including duplicates.

-- 61. Select employee details from employee table if data exists in incentive table
SELECT e.*
FROM Employee e
WHERE EXISTS (SELECT 1 FROM Incentives i WHERE i.EMPLOYEE_REF_ID = e.EMPLOYEE_ID);

-- 62. How to fetch data that are common in two query results?
-- Use INTERSECT between two SELECT statements

-- 63. Get Employee ID's of those employees who didn't receive incentives without using sub query
SELECT e.EMPLOYEE_ID
FROM Employee e
LEFT JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID
WHERE i.EMPLOYEE_REF_ID IS NULL;

-- 64. Select 20% of salary from venkat, 10% of Salary for gopi and for others 15% of salary from employee table
SELECT EMPLOYEE_ID, FIRST_NAME,
    CASE 
        WHEN FIRST_NAME = 'Venkatesh' THEN SALARY * 0.20
        WHEN FIRST_NAME = 'Gopinath' THEN SALARY * 0.10
        ELSE SALARY * 0.15
    END AS Calculated_Salary
FROM Employee;

-- 65. Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Pharma Dept' from employee table
SELECT 
    CASE 
        WHEN DEPARTMENT = 'BANKING' THEN 'Bank Dept'
        WHEN DEPARTMENT = 'INSURANCE' THEN 'Insurance Dept'
        WHEN DEPARTMENT = 'PHARMA' THEN 'Pharma Dept'
        ELSE DEPARTMENT
    END AS Modified_Department
FROM Employee;

-- 66. Delete employee data from employee table who got incentives in incentive table
DELETE FROM Employee
WHERE EMPLOYEE_ID IN (SELECT DISTINCT EMPLOYEE_REF_ID FROM Incentives);

-- 67. Insert into employee table Last Name with " ' " (Single Quote - Special Character)
INSERT INTO Employee (EMPLOYEE_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT)
VALUES (13, 'John', 'O''Connor', 50000, '2023-01-01', 'IT');

-- 68. Select Last Name from employee table which contain only numbers
SELECT LAST_NAME
FROM Employee
WHERE LAST_NAME NOT LIKE '%[^0-9]%';

-- 69. Write a query to rank employees based on their incentives for a month
SELECT e.EMPLOYEE_ID, e.FIRST_NAME,
       i.INCENTIVE_AMOUNT,
       RANK() OVER (ORDER BY i.INCENTIVE_AMOUNT DESC) AS Incentive_Rank
FROM Employee e
JOIN Incentives i ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID
WHERE MONTH(i.INCENTIVE_DATE) = 1 AND YEAR(i.INCENTIVE_DATE) = 2023;

-- 70. Update incentive table where employee name is 'Dinesh'
UPDATE Incentives
SET INCENTIVE_AMOUNT = INCENTIVE_AMOUNT * 1.1
WHERE EMPLOYEE_REF_ID = (SELECT EMPLOYEE_ID FROM Employee WHERE FIRST_NAME = 'Dinesh');