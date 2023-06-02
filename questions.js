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
        "Update an employee",
      ],
      message: "Select the operation to perform",
    },
  ],

  addDept: [
    {
      type: "input",
      name: "dept",
      message: "What is the name of the department?",
    },
  ],

  addRole: [
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
      type: "list",
      name: "departmentId",
      choices: [1, 2, 3, 4],
      message: "please select a department id for the role",
    },
  ],

  addEmployee: [
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
      type: "list",
      name: "roleId",
      message: "Select a role id",
      choices: [1, 2, 3, 4],
    },
    {
      type: "list",
      name: "managerId",
      message: "please select a manager id for the employee",
      choices: [1, 2, 5],
    },
  ],
  updateEmployee: [
    {
      type: "list",
      name: "employeeName",
      choices: [
        "Mario Mario",
        "John Brown",
        "Dan Foster",
        "Josh Green",
        "Ben Martin",
        "Danial Chou",
      ],
      message: "please select the employees name to update",
    },
    {
      type: "input",
      name: "roleId",
      message: "please enter a role id for the employee",
    },
  ],
};

module.exports = questions;
