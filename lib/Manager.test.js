const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1";
    const employee = new Manager("Elliott", 1, "elliott@hotmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Elliott", 1, "elliott@hotmail.com", "Elliott");
    expect(employee.getRole()).toBe(role);
  });