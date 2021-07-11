class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name is:${this.constructor.name}`);

    }
    showStats() {
        console.log(`Name is:${this.name} strngth is:${this.strength} speed is : ${this.speed} health is: ${this.health} `)

    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(wisdom) {
        super("ali", 200, 10, 10);
        this.wisdom = wisdom;

    }
    speakWisdom() {
        super.drinkSake();
    }


}
const superSensei = new Sensei(" Splinter");
superSensei.speakWisdom();
console.log(superSensei.name)
    // -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"