class User {
  // User code here
  /* eslint-disable */
  #age;
  #password;
  constructor(username, password, age) {
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    console.log(this.#password, "this.#password");
    switch (password) {
      case this.#password:
        this.loggedIn = true;
        break;
      default:
        throw new Error("incorrect password");
    }
  }

  logout() {
      this.loggedIn = false;
  }

  getPaaword(){
    return this.#password
  }
}

module.exports = User
