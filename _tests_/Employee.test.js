const Employee = require("../lib/Employee");

test("Creating Employee instance for new object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name via constructor arguments", () => {
  const name = "Michael";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.id).toBe(testValue);
});

test("Set email via constructor argument", () => {
  const testValue = "test@gmail.com";
  const e = new Employee("Test", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get name via getName()", () => {
  const testValue = "Michael";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
  const testValue = "test@gmail.com";
  const e = new Employee("Test", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Michael", 1, "test@gmail.com");
  expect(e.getRole()).toBe(testValue);
});