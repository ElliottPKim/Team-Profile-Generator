const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Elliott";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1234";
    const employee = new Employee("Elliott", id, "elliott@hotmail.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "elliott@hotmail.com";
    const employee = new Employee("Elliott", 1234, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Elliott", 1234, "elliott@hotmail.com");
    expect(employee.getRole()).toBe(role);
  });