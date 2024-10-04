/* eslint-disable */
const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  // test password
  test("pssword should be a string", () => {
    expect(typeof user.getPassword()).toBe("string");
  });
  // test age
  test("age should be a number", () => {
    expect(typeof user.getAge()).toBe("number");
  });
});

describe("User method tests", () => {
  test("user can login", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  });

})

describe("User wrong password test", () => {
  test("throws error user can not login", () => {
    expect(() => {
      user.login("test12");
    }).toThrow();
  });
});

// test logout
describe("User logout test", () => {
  test("user can logout", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});