// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // Stores all the employees that were created by the function
  let employees = [];
  // Checks if the user wants to continue using the function
  let isCreatingEmployee = true;

  while (isCreatingEmployee) {
    // Gets the employee's information
    let firstName = getString(
      "Enter the employee's first name:",
      "Please enter a valid employee’s first name:"
    );
    let lastName = getString(
      "Enter the employee's last name:",
      "Please enter a valid employee’s last name:"
    );
    let salary = getNumber("Enter the employee's salary:");

    // Creates the employee object
    let employee = {
      firstName,
      lastName,
      salary,
    };

    // Stores the new employee object in the array of employees
    employees.push(employee);

    // Checks if the user wants to add another employee to the array
    isCreatingEmployee = confirm("Want to add another employee?");
  }

  // Returns the list of employees
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);

// Validates a string
function getString(message, errorMessage) {
  // Gets the string
  let string = prompt(message);
  // Checks if string is not empty
  let error = true;

  while (error) {
    // If string is empty or null get the string again
    if (!string) {
      string = prompt(errorMessage);
      error = true;
    }
    // If string is valid continue
    else {
      error = false;
    }
  }

  // Returns the string
  return string;
}

// Validates a number
function getNumber(message) {
  // Gets the number
  let number = prompt(message, 0);

  // If number is not a number return 0
  if (isNaN(number)) {
    return 0;
  }

  // If number is a number return it
  return number;
}

// https://www.w3schools.com/js/js_popup.asp
// https://www.w3schools.com/jsref/jsref_isnan_number.asp#:~:text=isNaN()%20returns%20true%20if,a%20number%20before%20testing%20it.
