const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const questions = require("./questions.js");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "tracking_db",
  },
  console.log(`Connected to the tracking_db database.`)
);

function menu() {
  inquirer.prompt(questions.menu).then((data) => {
    switch (data.userChoice) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View all employees":
        viewAllEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee":
        updateEmployee();
        break;
    }
  });
}

function viewAllDepartments() {
  let query = "SELECT * FROM department";
  db.query(query, (err, data) => {
    if (err) console.log(err);
    console.table(data);
    menu();
  });
}
function viewAllRoles() {
  let query = "SELECT * FROM roles";
  db.query(query, (err, data) => {
    if (err) console.log(err);
      console.table(data);
    menu();
  });
}
function viewAllEmployees() {
  let query = "SELECT * FROM employee";
  db.query(query, (err, data) => {
    if (err) console.log(err);
    console.table(data);
    menu();
  });
}
function addDepartment() {
  inquirer.prompt(questions.addDept).then((data) => {
    console.log(data);
    let { dept } = data;
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      [dept],
      (err, data) => {
        if (err) console.log(err);
        console.table(data);
        viewAllDepartments();
        menu();
      }
    );
  });
}
function addRole() {
  inquirer.prompt(questions.addRole).then((data) => {
    console.log(data);
    let { title, salary, departmentId } = data;
    db.query(
      "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
      [title, salary, departmentId],
      (err, data) => {
        if (err) console.log(err);
        console.table(data);
        viewAllRoles();
        menu();
      }
    );
  });
}
function addEmployee() {
  inquirer.prompt(questions.addEmployee).then((data) => {
    console.log(data);
    let { firstName, lastName, roleId, managerId } = data;
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [firstName, lastName, roleId, managerId],
      (err, data) => {
        if (err) console.log(err);
        console.table(data);
        viewAllEmployees();
        menu();
      }
    );
  });
}
function updateEmployee() {
  inquirer.prompt(questions.updateEmployee).then((data) => {
    console.log(data);
    let { Name, roleId} = data
    let firstName = Name.split(" ")[0]
    let lastName = Name.split(" ")[1]
    console.log(firstName, lastName)
    db.query(
      "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?",
      [roleId, firstName, lastName],
      (err, data) => {
        if (err) console.log(err);
        console.table(data);
        viewAllEmployees()
        menu();
      }
    );
  });
}

menu();
