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
    let { id, name } = data;
    db.query("INSERT INTO department (id, name) VALUES (?, ?)", [id, name]);
    if (err) console.log(err);
    console.table(data);
    menu;
  });
}
function addRole() {
  inquirer.prompt(questions.addRole).then((data) => {
    console.log(data);
    let { id, title, salary, departmentId } = data;
    db.query(
      "INSERT INTO roles (id, title, salary, departmentId) VALUES (?, ?, ?, ?)",
      [id, title, salary, departmentId]
    );
    if (err) console.log(err);
    console.table(data);
    menu;
  });
}
function addEmployee() {
  inquirer.prompt(questions.addEmployee).then((data) => {
    console.log(data);
    let { id, firstName, lastName, roleId, managerId } = data;
    db.query(
      "INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (?, ?, ?, ?, ?)",
      [id, firstName, lastName, roleId, managerId]
    );
    if (err) console.log(err);
    console.table(data);
    menu;
  });
}

menu();
