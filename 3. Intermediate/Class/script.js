let number = [34, 5, 65];
// ForEach Loop
number.forEach((number) => {
  console.log(number);
});

// Map Loop
let result = number.map((number) => {
  return number * 2;
});
console.log(result);

// Destructuring Array
let student = ["John", 3.75, true];
let [nama, gpa, isGraduate] = student;
console.log(nama); // John
console.log(gpa); // 3.75
console.log(isGraduate); // true

// Class
class Showroom {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
  getStarted() {
    console.log(`Welcome to ${this.name} showroom`);
  }
  getStoped() {
    console.log(`Thank you for visiting ${this.name} showroom`);
  }
}

let honda = new Showroom("Honda", "Car", 20000);

honda.getStarted();

class Student {
  constructor(name, energy, hobby) {
    this.name = name;
    this.energy = energy;
    this.hobby = hobby;
  }

  study(hours) {
    this.energy -= hours;
    console.log(`Hello ${this.name}, your energy is ${this.energy}`);
  }
  sleep(hours) {
    this.energy += hours;
    console.log(`Hello ${this.name}, your energy is ${this.energy}`);
  }
  getHobby() {
    console.log(`Hello ${this.name}, your hobby is ${this.hobby}`);
  }
  addHobby(hobby) {
    this.hobby.push(hobby);
    console.log(`Hello ${this.name}, your hobby is ${this.hobby}`);
  }
}

class Class extends Student {
  constructor(name, energy, hobby, className) {
    super(name, energy, hobby);
    this.className = className;
  }
  getClass() {
    console.log(`Hello ${this.name}, your class is ${this.className}`);
  }
  setClass(className) {
    this.className = className;
    console.log(`Hello ${this.name}, your modified class is ${this.className}`);
  }
}

let cryl = new Student("Cryl", 100, ["Basketball", "Music"]);
let josh = new Class("Josh", 100, ["Basketball", "Music"], "A");

josh.getClass();
josh.setClass("B");
