class Pet {
    constructor (name, favoriteToy) {
    this.name = name;
    this.happinessLevel = 0;
    this.hungerLevel = 10;
    this.favoriteToy = favoriteToy;

    feed(this.hungerLevel){
        set this.hungerLevel
    }
}
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

let  myPet = new Pet('Jack', 7, 5, 'ball');
console.log(myPet)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });