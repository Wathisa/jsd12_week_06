function checkPort(port) {
  console.log("outside");
  return port ? port : 0;
}

class Human {
  // properties
  name = null;
  age = null;
  full = false;
  steps = 0;
  tiredCondition = 0;

  constructor(name, age, tiredCondition) {
    this.name = name;
    this.age = age;
    this.tiredCondition = tiredCondition;
  }

  startServer(word, port) {
    // == logic start server ====
    // console.log(`${word} ${port ? port : 0} .... i dunno know`)
    console.log(`${word} ${checkPort(port)} .... i dunno know`);
  }

  checkPort(port) {
    console.log("inside");
    return port ? port : 0;
  }

  // methods
  eat(menu) {
    this.full = true;
    console.log(`eat ${menu}, so full`);
  }

  walk(step) {
    this.steps = this.steps + step;

    if (this.steps > this.tiredCondition) {
      console.log("tired");
    }
  }

  eatDonut() {
    this.eat("donut");
  }
}

// class Bank extends Human {
//   handsome = true;
//
//   constructor() {
//     super("bank", 18, 100);
//   }
// }
//
// class Emmi extends Human {
//   pretty = true;
//
//   constructor() {
//     super("emmi", 12, 80);
//   }
// }

// const obj = { name: "emmi" }
// console.log(obj.x());

const kira = new Human("kira", 15, 75);
const bank = new Human("bank", 18, 100);
const emmi = new Human("emmi", 12, 80);

// console.log(bank.name);
// bank.eatDonut();
// console.log(bank.full);
bank.startServer("start", null);
// bank.walk(80);
// console.log('bank ', bank.steps);
// console.log("============")
// console.log('emmi ', emmi.steps);
// emmi.walk(40);
// console.log('emmi ', emmi.steps);

class App {
  isStart = false;

  startServer(word, port) {
    this.connectDatabase();
    console.log(`${word} ${this.checkPort(port)} .... i dunno know`);
  }

  checkPort(port) {
    return port ? port : 0;
  }

  connectDatabase() {
    console.log("");
  }
}
