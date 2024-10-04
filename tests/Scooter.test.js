/* eslint-disable */
const Scooter = require("../src/Scooter");
const User = require("../src/User");


let username = "owillz";
let password = "1234567";
// typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter('glasgow');
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

// Method tests
describe("scooter methods", () => {
  // tests here!
  const scooter = new Scooter('aberdeen');
  const user = new User(username, password, '18');
  // rent method
  test("User can rent scooter", () => {
    scooter.rent(user);
    expect(scooter.user).toBe(user);
   expect(scooter.station).toBe(null);

  });
  // dock method
 test("User can dock scooter", () => {
   scooter.dock("glasgow");
   expect(scooter.user).toBe(null);
   expect(scooter.station).toBe('glasgow');
 });
  // requestRepair method

  // charge method
});
