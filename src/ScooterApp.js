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
    if (!user || user.getPaaword() != password) {
      this.throwError("Username or password is incorrect");
    }
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
    let scooter = new Scooter(station);
    this.stations[station].push(scooter)
    console.log("created new scooter");
    return scooter;
  }

  dockScooter(scooter, station){
    this.stations[station].push(scooter)
    scooter.dock(station);
    console.log("scooter is docked");
    if(!this.stations[station]){
      this.throwError("no such station");
    }
    if(scooter.station == station){
      this.throwError("scooter already at station");
    }
  }

  rentScooter(scooter, user){
    scooter.rent(user);
    // this.stations[scooter.station].find((item) => item == scooter);
    let index = this.stations[scooter.station].indexOf(scooter);
    this.stations[scooter.station].splice(index, 1);
    console.log("scooter is rented");
    if(scooter.user){
      this.throwError("scooter already rented");
    }
    // for(let station in this.stations){
    //   if(this.stations[station].includes(scooter)){
    //     let scooter = this.stations[station].find(item => item == scooter)
    //     scooter.rent(user);
    //     let index = this.stations[station].indexOf(scooter);
    //     this.stations[station].splice(index, 1)
    //     console.log("scooter is rented");
    //   }
    // }
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

module.exports = ScooterApp
