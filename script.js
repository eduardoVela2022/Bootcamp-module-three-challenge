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
  // Stores the average salary of all the employees
  let averageSalary = 0;

  // First sums all the salaries into the variable
  for (const employee of employeesArray) {
    averageSalary += employee.salary;
  }

  // Then it divides them by the total number of employees
  averageSalary = averageSalary / employeesArray.length;

  // Logs into the console the result
  console.log(`The average salary of the employees is: $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Gets a random number from the range of 0 to the length of the employees array
  const randomNumber = getRandomNumber(employeesArray.length);

  // Logs to the console the randomly selected employee
  console.log(
    `Today’s randomly selected employee is: ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}`
  );
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
  return +number;
}

// Returns a value from the range of 0 to maxValue - 1.
function getRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue);
}
