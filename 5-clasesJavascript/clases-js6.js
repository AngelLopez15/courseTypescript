// Clase normal de Javascript

class Avenger {
  constructor(name = 'No name', power = 0) {
    this.name = name;
    this.power = power;
  }
}

class FlyAvenger extends Avenger {
  constructor(name, power) {
    super(name, power);
    this.fly = true;
  }
}

const hulk = new Avenger('Hulk', 10000);
const falcon = new Avenger('Falcon', 200);