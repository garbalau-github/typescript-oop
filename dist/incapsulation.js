"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    calcArea() {
        return this._width * this._height;
    }
    calcPerimeter() {
        return (this._width + this._height) * 2;
    }
}
const rect = new Rectangle(10, 5);
// We have access to methods only
console.log(rect.calcArea()); // 30
console.log(rect.calcPerimeter()); // 50
