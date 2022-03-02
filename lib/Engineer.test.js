const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "Ana";
    const employee = new Engineer("Ana", 567, "ana@hotmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Ana", 567, "Ana@hotmail.com", "ElliottPKim");
    expect(employee.getRole()).toBe(role);
  });