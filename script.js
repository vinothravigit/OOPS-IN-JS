// Person class to hold details
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I'm ${this.gender}.`);
  }
}

// UberPrice class to calculate price
class UberPrice {
  constructor(distance, time, surgeMultiplier) {
    this.distance = distance; // in miles
    this.time = time; // in minutes
    this.surgeMultiplier = surgeMultiplier || 1; // default surge multiplier is 1
  }

  calculatePrice() {
    const baseFare = 2.5;
    const perMinuteRate = 0.35;
    const perMileRate = 1.75;

    const fareWithoutSurge = baseFare + (this.time * perMinuteRate) + (this.distance * perMileRate);
    const totalFare = fareWithoutSurge * this.surgeMultiplier;

    return totalFare.toFixed(2); // return fare rounded to 2 decimal places
  }
}

const person1 = new Person('Vinoth', 24, 'male');
person1.introduce();    

const distanceInMiles = 5;
const timeInMinutes = 15;
const surgeMultiplier = 1.2; // Surge pricing multiplier
const uberPrice = new UberPrice(distanceInMiles, timeInMinutes, surgeMultiplier);
console.log(`The estimated Uber price is $${uberPrice.calculatePrice()}`);
