const faker = require("faker");

export default interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
}

export function generateEmployees() {
  var employees: Array<Employee> = [];

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();

    employees.push({
      id: id,
      lastName: firstName,
      firstName: lastName,
      email: email,
    });
  }

  return employees;
}
