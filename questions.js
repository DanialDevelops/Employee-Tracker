const questions = {
  menu: [
    {
      type: "list",
      name: "userChoice",
      choices: [
        "View All Departments",
        "View All Roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
      ],
      message: "Select the operation to perform",
    },
  ],

  addDept: [
    {
      type: "input",
      name: "id",
      message: "please enter an id for the department",
    },
    {
      type: "input",
      name: "name",
      message: "please enter a name for the department",
    },
  ],

  addRole: [
    {
      type: "input",
      name: "id",
      message: "please enter an id for the department",
    },
    {
      type: "input",
      name: "title",
      message: "please enter a title for the role",
    },
    {
      type: "input",
      name: "salary",
      message: "please enter a salary for the role",
    },
    {
      type: "input",
      name: "departmentId",
      message: "please enter a department id for the role",
    },
  ],

  addEmployee: [
    {
      type: "input",
      name: "id",
      message: "please enter an id for the employee",
    },
    {
      type: "input",
      name: "firstName",
      message: "please enter a first name for the employee",
    },
    {
      type: "input",
      name: "lastName",
      message: "please enter a last name for the employee",
    },
    {
      type: "input",
      name: "roleId",
      message: "please enter a role id for the employee",
    },
    {
      type: "input",
      name: "managerId",
      message: "please enter a manager id for the employee",
    },
  ],
};

module.exports = questions;
