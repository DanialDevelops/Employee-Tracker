INSERT INTO department( name) VALUES ('Finance'), ('Engineering'),('Legal'),('Sales');

INSERT INTO roles(title, salary, department_id) 
VALUES 
('Sales Lead', 100000, 4),
('Lead Engineer', 110000, 2),
('Salesperson', 80000, 4),
('Legal Team Lead', 90000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Mario', 'Mario', 1, null),
('John', 'Brown', 2, null),
('Dan', 'Foster', 3, 2),
('Josh', 'Green', 3, 1),
('Ben', 'Martin', 2, null),
('Danial', 'Chou', 2, 5);