class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Name is:${this.constructor.name}`);

    }
    showStats() {
        console.log(`Name is:${this.constructor.name} strngth is:${this.strength} speed is : ${this.speed} health is: ${this.health} `)

    }
    drinkSake() {
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hyabusa", 5);

ninja1.sayName();
ninja1.showStats();