class Car {
    constructor(brand, color) { 
        this.brand = brand;
        this.color = color;
    }
    getBrand() {
        return this.brand;
    }
    getColor() {
        return this.color;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setColor(color) {
        this.color = color;
    }
    static getCarCount() {
        return Car.carCount;
    }
    static incrementCarCount() {
        Car.carCount++;
    }
    static carCount = 0;        
}