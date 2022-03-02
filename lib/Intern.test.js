const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "UW";
    const employee = new Intern("Josh", 89, "Josh@hotmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Josh", 89, "Josh@hotmail.com", "Josh");
    expect(employee.getRole()).toBe(role);
  });