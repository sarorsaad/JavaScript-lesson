// JavaScript Classes Tutorial

// Basic Class Definition
class Car {
    // Constructor - initializes the object
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    getInfo() {
        return `This is a ${this.brand} ${this.model}`;
    }

    // Static method - called on the class itself, not instances
    static getCarType() {
        return "This is a vehicle";
    }
}

// Inheritance Example
class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);  // Call parent constructor
        this.batteryCapacity = batteryCapacity;
    }

    getInfo() {
        return `${super.getInfo()} with ${this.batteryCapacity}kWh battery`;
    }
}

// Display functions for the webpage
function displayCarInfo() {
    const myCar = new Car("Toyota", "Camry");
    const output = [
        myCar.getInfo(),
        Car.getCarType()
    ].join('\n');
    document.getElementById('car-output').innerHTML = output.replace('\n', '<br>');
}

function displayElectricCarInfo() {
    const tesla = new ElectricCar("Tesla", "Model 3", 75);
    document.getElementById('electric-car-output').textContent = tesla.getInfo();
}
