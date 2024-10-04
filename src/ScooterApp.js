// require the User and Scooter classes - see where they can be used in ScooterApp.js
/* eslint-disable */
const User = require("./User");
const Scooter = require("./Scooter");
class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      'glasgow' : [],
      'edinburg' : [],
      'aberdeen' : []
    }
    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if(age >= 18 && !this.registeredUsers[username]){
      let user = new User(username, password, age)
      console.log(user, 'user');
      
      this.registeredUsers[username] = user;
      console.log("user has been registered");
      return user;
    }else if(this.registeredUsers[username]){
      this.throwError("already registered");
    }else{
      this.throwError("too young to register");
    }
  }

  loginUser(username, password){
    let user = this.getUser(username)
    if (!user || user.getPassword() != password) {
      this.throwError("Username or password is incorrect");
    }
    user.login(password);
    console.log("user has been logged in");
    
  }

  logoutUser(username){
    let user = this.getUser(username);    
    if (user.loggedIn){
      user.logout();
      console.log("user is logged out");
    } else{
      this.throwError("no such user is logged in");
    }
    
  }

  createScooter(station){
    if(this.stations[station]){
      let scooter = new Scooter(station);
      this.stations[station].push(scooter)
      console.log("created new scooter");
      return scooter;
    }else{
      this.throwError('station does not exist')
    }
  }

  dockScooter(scooter, station){

    if(!this.stations[station]){
      this.throwError("no such station");
    }
    else if(scooter.station == station){
      this.throwError("scooter already at station");
    }else{
          this.stations[station].push(scooter);
          scooter.dock(station);
          console.log("scooter is docked");
    }
  }

  rentScooter(scooter, user){
    if(scooter.user){
      this.throwError("scooter already rented");
    }else{
          let index = this.stations[scooter.station].indexOf(scooter);
          console.log(index, "index");

          this.stations[scooter.station].splice(index, 1);
          scooter.rent(user);
          console.log("scooter is rented");
    }
  }

  print(){
    console.log(this.registeredUsers, "this.registeredUsers");
    console.log(this.stations.glasgow.length, "Glasgow");
    console.log(this.stations.edinburg.length, "Edinburg");
    console.log(this.stations.aberdeen.length, "Aberdeen");
    
  }

  getUser(username){
    return this.registeredUsers[username];
  }
  throwError(msg){
    throw new Error(msg);
  }
}

let username = 'owillz'
let password = '1234567'
let app = new ScooterApp()
let user = app.registerUser(username, password, 18);
app.loginUser(username, password)
app.logoutUser(username)

let scooter = app.createScooter("glasgow");
app.rentScooter(scooter, user);
app.dockScooter(scooter, "glasgow");

app.print()
module.exports = ScooterApp
