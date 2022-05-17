const Engineer = require("../lib/Engineer");

test("Set github account via constructor", () => {
  const testValue = "githubUser";
  const e = new Engineer("Test", 1, "test@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Test", 1, "test@gmail.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "githubUser";
  const e = new Engineer("Test", 1, "test@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});