INSERT INTO department(id, name) VALUES (1, 'Finance'), (2, 'Engineering'),(3, 'Legal'),(4, 'Sales');

INSERT INTO roles(id, title, salary, department_id) 
VALUES 
(1, 'Sales Lead', 100000, 4),
(2, 'Lead Engineer', 110000, 2),
(3, 'Legal Team Lead', 90000, 3),
(4, 'Salesperson', 80000, 4)

INSERT INTO employee(id, first_name, last_name, role_id, manager_id) 
VALUES
(1, "John", "Brown", )