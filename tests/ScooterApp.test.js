/* eslint-disable */
const User = require("../src/User");
const Scooter = require("../src/Scooter");
const ScooterApp = require("../src/ScooterApp");
let username = "owillz";
let password = "test123";
const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    const response = scooterApp.registerUser("Joe Bloggs", password, 21);
    expect(response).toBeInstanceOf(User);
  });

  test("User cannot register if under age or already registered", () => {
    expect(() => {
      scooterApp.registerUser("Joe Bloggs", password, 14);
    }).toThrow();
  });
});

// log in
describe("loginUser method tests", () => {
  let user = scooterApp.registerUser(username, password, 21);
  test("Should login the given user", () => {
    scooterApp.loginUser(username, password);
    expect(user.loggedIn).toBe(true);
  });

   test("login should throw an error", () => {
     expect(() => {
       scooterApp.loginUser(username, "password");
     }).toThrow();
   });
});
// log out

describe('logOutUser method test', ()=> {
  let user = scooterApp.registerUser('ben', password, 21);
  scooterApp.loginUser('ben', password);
  test('can successfully logout user', () => {
    scooterApp.logoutUser('ben')
    expect(user.loggedIn).toBe(false)
  })
  test("logout should throw an error", () => {
    expect(() => {
      scooterApp.logoutUser('username');
    }).toThrow();
  });
})

// rent scooter
describe('rent scoter method test', ()=> {
  let user = scooterApp.registerUser('Adam', password, 21);
  test('can successfully create a scooter', () => {
    let response = scooterApp.createScooter("glasgow");
    expect(response).toBeInstanceOf(Scooter);
  })

  test("Scooter cannot be created if station does not exist", () => {
    
    expect(() => {
      scooterApp.createScooter("portland");
    }).toThrow();
  });

  test("user can successfully rent a scooter", () => {
    let scooter = scooterApp.createScooter("glasgow");
    scooterApp.rentScooter(scooter, user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });
})

// dock scooter
describe("dock scoter method test", () => {
  let user = scooterApp.registerUser('Tayo', password, 21);
  let scooter = scooterApp.createScooter("aberdeen");

  test("user can successfully dock scooter", () => {
    scooterApp.dockScooter(scooter, "glasgow");
    expect(scooter.user).toBe(null);
    expect(scooter.station).toBe("glasgow");
  });
});